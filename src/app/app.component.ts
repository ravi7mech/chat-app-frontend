import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chat-app-frontend';
  connectedUsers: Array<{
    id: string;
    name: string;
    isActive: boolean;
    hoursAgo: string;
    isOnline: boolean;
    image: string;
  }> = [
    {
      id: 'fff',
      name: 'Charles Wilkes',
      isActive: false,
      hoursAgo: 'left 7 mins ago',
      isOnline: true,
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id: 'fff',
      name: 'Vincent Porter',
      isActive: false,
      hoursAgo: 'left 7 mins ago',
      isOnline: false,
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    },
    {
      id: 'fff',
      name: 'Aiden Chavez',
      isActive: false,
      hoursAgo: 'left 7 mins ago',
      isOnline: true,
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    },
    {
      id: 'fff',
      name: 'Mike Thomas',
      isActive: false,
      hoursAgo: 'left 7 mins ago',
      isOnline: true,
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 'fff',
      name: 'Christian Kelly',
      isActive: false,
      hoursAgo: 'left 7 mins ago',
      isOnline: true,
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    },
  ];
  GET_POSTS = gql`
    query ReadAllRoomsByUserId {
      roomParticipants(where: { user: { is: { id: { equals: 1 } } } }) {
        id
      }
    }
  `;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: this.GET_POSTS,
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
      });
  }
}
