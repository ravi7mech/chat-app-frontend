import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  FindMessagesByRoomIdGQL,
  FindMessagesByRoomIdQuery,
  MessageTypingGQL,
  MessageTypingInput,
  MessageTypingMutation,
  OnMessageTypingDocument,
  OnMessageTypingGQL,
  OnMessageTypingSubscription,
  ReadAllRoomsByUserIdGQL,
  ReadAllRoomsByUserIdQuery,
  Room,
  RoomParticipant,
  SortOrder,
  User,
} from 'src/generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chat-app-frontend';
  roomParticipants!: Observable<ReadAllRoomsByUserIdQuery['roomParticipants']>;

  messages!: Observable<FindMessagesByRoomIdQuery['messages']>;
  onMessageTyping!: Observable<OnMessageTypingSubscription['onMessageTyping']>;
  currentRoom!: Observable<Room>;
  sessionUserId: number = 1;
  currentRoomId: number = 0;
  typingUsers: Array<MessageTypingInput> = [];
  sessionUserName: string = 'Ravikumar';
  newMessage: string = '';
  constructor(
    private ReadAllRoomsByUserIdGQL: ReadAllRoomsByUserIdGQL,
    private FindMessagesByRoomIdGQL: FindMessagesByRoomIdGQL,
    private MessageTypingGQL: MessageTypingGQL,
    private OnMessageTypingGQL: OnMessageTypingGQL
  ) {}

  ngOnInit() {
    this.roomParticipants = this.ReadAllRoomsByUserIdGQL.watch({
      where: { user: { is: { id: { equals: this.sessionUserId } } } },
    }).valueChanges.pipe(
      map((result) => {
        if (result.data.roomParticipants) {
          this.loadMessagesForRoom(result.data.roomParticipants[0]);
        }
        return result.data.roomParticipants;
      })
    );
  }
  refreshData() {
    this.ngOnInit();
  }
  findOtherUser(roomParticipants: any | RoomParticipant[]): User | any {
    if (roomParticipants && roomParticipants.length > 0) {
      let user: any = roomParticipants.filter(
        (participant: any) => participant.user.id != this.sessionUserId
      )[0].user;

      return user;
    }
  }
  convertToDate(input: string) {
    return new Date(input);
  }
  loadMessagesForRoom(roomParticipant: any | RoomParticipant) {
    this.currentRoom = of(roomParticipant.room);
    this.currentRoomId = roomParticipant.room.id;
    this.subscribeOnMessageTyping();
    this.messages = this.FindMessagesByRoomIdGQL.watch({
      where: { roomId: { equals: this.currentRoomId } },
      skip: 0,
      take: 10,
      cursor: { id: 1 },
      orderBy: { id: SortOrder.Asc },
    }).valueChanges.pipe(map((result) => result.data.messages));
  }

  messageTyping(event: Event) {
    this.MessageTypingGQL.mutate({
      data: {
        body: this.newMessage,
        roomId: this.currentRoomId,
        id: 6,
        userId: this.sessionUserId,
        event: event.type,
        userName: this.sessionUserName,
      },
    })
      .pipe(
        map((result) => {
          result.data?.messageTyping;
        })
      )
      .subscribe();
  }

  subscribeOnMessageTyping() {
    this.onMessageTyping = this.OnMessageTypingGQL.subscribe({
      roomId: this.currentRoomId,
    }).pipe(
      map((result) => {
        if (result.data?.onMessageTyping?.userId != this.sessionUserId) {
          console.log(result.data?.onMessageTyping);
          if (result.data?.onMessageTyping?.event === 'keydown') {
            this.typingUsers.push(result.data?.onMessageTyping);
          } else {
            const index = this.typingUsers.findIndex(
              (data) => data.userId === result.data?.onMessageTyping?.userId
            );
            if (index != -1) {
              this.typingUsers.splice(index, 1);
            }
          }
        }

        return result.data?.onMessageTyping;
      })
    );
    this.onMessageTyping.subscribe();
  }
}
