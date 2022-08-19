import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSDateTime: any;
  AWSEmail: any;
  AWSIPAddress: any;
  AWSJSON: any;
  AWSPhone: any;
  AWSTime: any;
  AWSTimestamp: any;
  AWSURL: any;
  BigInt: any;
  Double: any;
};

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type AwsDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['AWSDateTime']>;
  gt?: InputMaybe<Scalars['AWSDateTime']>;
  gte?: InputMaybe<Scalars['AWSDateTime']>;
  in?: InputMaybe<Array<Scalars['AWSDateTime']>>;
  lt?: InputMaybe<Scalars['AWSDateTime']>;
  lte?: InputMaybe<Scalars['AWSDateTime']>;
  not?: InputMaybe<NestedAwsDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['AWSDateTime']>>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type Domain = {
  __typename?: 'Domain';
  _count?: Maybe<DomainCount>;
  id: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  users: Array<User>;
  uuid?: Maybe<Scalars['String']>;
};


export type DomainUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type DomainCount = {
  __typename?: 'DomainCount';
  users: Scalars['Int'];
};

export type DomainCreateInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserCreateNestedManyWithoutDomainInput>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type DomainCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<DomainWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DomainCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<DomainCreateWithoutUsersInput>;
};

export type DomainCreateOrConnectWithoutUsersInput = {
  create: DomainCreateWithoutUsersInput;
  where: DomainWhereUniqueInput;
};

export type DomainCreateWithoutUsersInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type DomainOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
  uuid?: InputMaybe<SortOrder>;
};

export type DomainRelationFilter = {
  is?: InputMaybe<DomainWhereInput>;
  isNot?: InputMaybe<DomainWhereInput>;
};

export enum DomainScalarFieldEnum {
  Id = 'id',
  IsActive = 'isActive',
  Name = 'name',
  Uuid = 'uuid'
}

export type DomainUpdateOneRequiredWithoutUsersInput = {
  connect?: InputMaybe<DomainWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DomainCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<DomainCreateWithoutUsersInput>;
  update?: InputMaybe<DomainUpdateWithoutUsersInput>;
  upsert?: InputMaybe<DomainUpsertWithoutUsersInput>;
};

export type DomainUpdateWithoutUsersInput = {
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  uuid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DomainUpsertWithoutUsersInput = {
  create: DomainCreateWithoutUsersInput;
  update: DomainUpdateWithoutUsersInput;
};

export type DomainWhereInput = {
  AND?: InputMaybe<Array<DomainWhereInput>>;
  NOT?: InputMaybe<Array<DomainWhereInput>>;
  OR?: InputMaybe<Array<DomainWhereInput>>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  users?: InputMaybe<UserListRelationFilter>;
  uuid?: InputMaybe<StringNullableFilter>;
};

export type DomainWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type EnumGroupTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<GroupType>;
};

export type EnumGroupTypeFilter = {
  equals?: InputMaybe<GroupType>;
  in?: InputMaybe<Array<GroupType>>;
  not?: InputMaybe<NestedEnumGroupTypeFilter>;
  notIn?: InputMaybe<Array<GroupType>>;
};

export type EnumUserOnlineStatusNullableFilter = {
  equals?: InputMaybe<UserOnlineStatus>;
  in?: InputMaybe<Array<UserOnlineStatus>>;
  not?: InputMaybe<NestedEnumUserOnlineStatusNullableFilter>;
  notIn?: InputMaybe<Array<UserOnlineStatus>>;
};

export enum GroupType {
  Multiple = 'MULTIPLE',
  Single = 'SINGLE'
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

/** The `AWSJSON` scalar type represents AWSJSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JsonNullableFilter = {
  equals?: InputMaybe<Scalars['AWSJSON']>;
  not?: InputMaybe<Scalars['AWSJSON']>;
};

export type Message = {
  __typename?: 'Message';
  _count?: Maybe<MessageCount>;
  body: Scalars['String'];
  createdDate?: Maybe<Scalars['AWSDateTime']>;
  createrId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  isCreated?: Maybe<Scalars['Boolean']>;
  messageAttachments: Array<MessageAttachment>;
  messageRecipients: Array<MessageRecipient>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['Int']>;
  updatedDate?: Maybe<Scalars['AWSDateTime']>;
  user?: Maybe<User>;
};


export type MessageMessageAttachmentsArgs = {
  cursor?: InputMaybe<MessageAttachmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageAttachmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageAttachmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageAttachmentWhereInput>;
};


export type MessageMessageRecipientsArgs = {
  cursor?: InputMaybe<MessageRecipientWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageRecipientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageRecipientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageRecipientWhereInput>;
};

export type MessageAttachment = {
  __typename?: 'MessageAttachment';
  createdDate?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  messageId?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Scalars['AWSJSON']>;
  updatedDate?: Maybe<Scalars['AWSDateTime']>;
};

export type MessageAttachmentCreateManyMessageInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  metaData?: InputMaybe<Scalars['AWSJSON']>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type MessageAttachmentCreateManyMessageInputEnvelope = {
  data: Array<MessageAttachmentCreateManyMessageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageAttachmentCreateNestedManyWithoutMessageInput = {
  connect?: InputMaybe<Array<MessageAttachmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageAttachmentCreateOrConnectWithoutMessageInput>>;
  create?: InputMaybe<Array<MessageAttachmentCreateWithoutMessageInput>>;
  createMany?: InputMaybe<MessageAttachmentCreateManyMessageInputEnvelope>;
};

export type MessageAttachmentCreateOrConnectWithoutMessageInput = {
  create: MessageAttachmentCreateWithoutMessageInput;
  where: MessageAttachmentWhereUniqueInput;
};

export type MessageAttachmentCreateWithoutMessageInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  metaData?: InputMaybe<Scalars['AWSJSON']>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type MessageAttachmentListRelationFilter = {
  every?: InputMaybe<MessageAttachmentWhereInput>;
  none?: InputMaybe<MessageAttachmentWhereInput>;
  some?: InputMaybe<MessageAttachmentWhereInput>;
};

export type MessageAttachmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageAttachmentOrderByWithRelationInput = {
  createdDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  message?: InputMaybe<MessageOrderByWithRelationInput>;
  messageId?: InputMaybe<SortOrder>;
  metaData?: InputMaybe<SortOrder>;
  updatedDate?: InputMaybe<SortOrder>;
};

export enum MessageAttachmentScalarFieldEnum {
  CreatedDate = 'createdDate',
  Id = 'id',
  IsActive = 'isActive',
  MessageId = 'messageId',
  MetaData = 'metaData',
  UpdatedDate = 'updatedDate'
}

export type MessageAttachmentScalarWhereInput = {
  AND?: InputMaybe<Array<MessageAttachmentScalarWhereInput>>;
  NOT?: InputMaybe<Array<MessageAttachmentScalarWhereInput>>;
  OR?: InputMaybe<Array<MessageAttachmentScalarWhereInput>>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  messageId?: InputMaybe<IntNullableFilter>;
  metaData?: InputMaybe<JsonNullableFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
};

export type MessageAttachmentUpdateManyMutationInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  metaData?: InputMaybe<Scalars['AWSJSON']>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type MessageAttachmentUpdateManyWithWhereWithoutMessageInput = {
  data: MessageAttachmentUpdateManyMutationInput;
  where: MessageAttachmentScalarWhereInput;
};

export type MessageAttachmentUpdateManyWithoutMessageInput = {
  connect?: InputMaybe<Array<MessageAttachmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageAttachmentCreateOrConnectWithoutMessageInput>>;
  create?: InputMaybe<Array<MessageAttachmentCreateWithoutMessageInput>>;
  createMany?: InputMaybe<MessageAttachmentCreateManyMessageInputEnvelope>;
  delete?: InputMaybe<Array<MessageAttachmentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageAttachmentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageAttachmentWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageAttachmentWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput>>;
  updateMany?: InputMaybe<Array<MessageAttachmentUpdateManyWithWhereWithoutMessageInput>>;
  upsert?: InputMaybe<Array<MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput>>;
};

export type MessageAttachmentUpdateWithWhereUniqueWithoutMessageInput = {
  data: MessageAttachmentUpdateWithoutMessageInput;
  where: MessageAttachmentWhereUniqueInput;
};

export type MessageAttachmentUpdateWithoutMessageInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  metaData?: InputMaybe<Scalars['AWSJSON']>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type MessageAttachmentUpsertWithWhereUniqueWithoutMessageInput = {
  create: MessageAttachmentCreateWithoutMessageInput;
  update: MessageAttachmentUpdateWithoutMessageInput;
  where: MessageAttachmentWhereUniqueInput;
};

export type MessageAttachmentWhereInput = {
  AND?: InputMaybe<Array<MessageAttachmentWhereInput>>;
  NOT?: InputMaybe<Array<MessageAttachmentWhereInput>>;
  OR?: InputMaybe<Array<MessageAttachmentWhereInput>>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  message?: InputMaybe<MessageRelationFilter>;
  messageId?: InputMaybe<IntNullableFilter>;
  metaData?: InputMaybe<JsonNullableFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
};

export type MessageAttachmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type MessageCount = {
  __typename?: 'MessageCount';
  messageAttachments: Scalars['Int'];
  messageRecipients: Scalars['Int'];
};

export type MessageCreateInput = {
  body: Scalars['String'];
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isCreated?: InputMaybe<Scalars['Boolean']>;
  messageAttachments?: InputMaybe<MessageAttachmentCreateNestedManyWithoutMessageInput>;
  messageRecipients?: InputMaybe<MessageRecipientCreateNestedManyWithoutMessageInput>;
  room?: InputMaybe<RoomCreateNestedOneWithoutMessagesInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutMessagesInput>;
};

export type MessageCreateManyRoomInput = {
  body: Scalars['String'];
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  createrId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isCreated?: InputMaybe<Scalars['Boolean']>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type MessageCreateManyRoomInputEnvelope = {
  data: Array<MessageCreateManyRoomInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManyUserInput = {
  body: Scalars['String'];
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isCreated?: InputMaybe<Scalars['Boolean']>;
  roomId?: InputMaybe<Scalars['Int']>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type MessageCreateManyUserInputEnvelope = {
  data: Array<MessageCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateNestedManyWithoutRoomInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutRoomInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutRoomInput>>;
  createMany?: InputMaybe<MessageCreateManyRoomInputEnvelope>;
};

export type MessageCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutUserInput>>;
  createMany?: InputMaybe<MessageCreateManyUserInputEnvelope>;
};

export type MessageCreateNestedOneWithoutMessageRecipientsInput = {
  connect?: InputMaybe<MessageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MessageCreateOrConnectWithoutMessageRecipientsInput>;
  create?: InputMaybe<MessageCreateWithoutMessageRecipientsInput>;
};

export type MessageCreateOrConnectWithoutMessageRecipientsInput = {
  create: MessageCreateWithoutMessageRecipientsInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutRoomInput = {
  create: MessageCreateWithoutRoomInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutUserInput = {
  create: MessageCreateWithoutUserInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutMessageRecipientsInput = {
  body: Scalars['String'];
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isCreated?: InputMaybe<Scalars['Boolean']>;
  messageAttachments?: InputMaybe<MessageAttachmentCreateNestedManyWithoutMessageInput>;
  room?: InputMaybe<RoomCreateNestedOneWithoutMessagesInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutMessagesInput>;
};

export type MessageCreateWithoutRoomInput = {
  body: Scalars['String'];
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isCreated?: InputMaybe<Scalars['Boolean']>;
  messageAttachments?: InputMaybe<MessageAttachmentCreateNestedManyWithoutMessageInput>;
  messageRecipients?: InputMaybe<MessageRecipientCreateNestedManyWithoutMessageInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutMessagesInput>;
};

export type MessageCreateWithoutUserInput = {
  body: Scalars['String'];
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isCreated?: InputMaybe<Scalars['Boolean']>;
  messageAttachments?: InputMaybe<MessageAttachmentCreateNestedManyWithoutMessageInput>;
  messageRecipients?: InputMaybe<MessageRecipientCreateNestedManyWithoutMessageInput>;
  room?: InputMaybe<RoomCreateNestedOneWithoutMessagesInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  body?: InputMaybe<SortOrder>;
  createdDate?: InputMaybe<SortOrder>;
  createrId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  isCreated?: InputMaybe<SortOrder>;
  messageAttachments?: InputMaybe<MessageAttachmentOrderByRelationAggregateInput>;
  messageRecipients?: InputMaybe<MessageRecipientOrderByRelationAggregateInput>;
  room?: InputMaybe<RoomOrderByWithRelationInput>;
  roomId?: InputMaybe<SortOrder>;
  updatedDate?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type MessageRecipient = {
  __typename?: 'MessageRecipient';
  createdDate?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  isRead?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Message>;
  messageId?: Maybe<Scalars['Int']>;
  roomParticipant: RoomParticipant;
  roomParticipantId: Scalars['Int'];
  updatedDate?: Maybe<Scalars['AWSDateTime']>;
};

export type MessageRecipientCreateManyMessageInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  roomParticipantId: Scalars['Int'];
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type MessageRecipientCreateManyMessageInputEnvelope = {
  data: Array<MessageRecipientCreateManyMessageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageRecipientCreateManyRoomParticipantInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  messageId?: InputMaybe<Scalars['Int']>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type MessageRecipientCreateManyRoomParticipantInputEnvelope = {
  data: Array<MessageRecipientCreateManyRoomParticipantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageRecipientCreateNestedManyWithoutMessageInput = {
  connect?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageRecipientCreateOrConnectWithoutMessageInput>>;
  create?: InputMaybe<Array<MessageRecipientCreateWithoutMessageInput>>;
  createMany?: InputMaybe<MessageRecipientCreateManyMessageInputEnvelope>;
};

export type MessageRecipientCreateNestedManyWithoutRoomParticipantInput = {
  connect?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageRecipientCreateOrConnectWithoutRoomParticipantInput>>;
  create?: InputMaybe<Array<MessageRecipientCreateWithoutRoomParticipantInput>>;
  createMany?: InputMaybe<MessageRecipientCreateManyRoomParticipantInputEnvelope>;
};

export type MessageRecipientCreateOrConnectWithoutMessageInput = {
  create: MessageRecipientCreateWithoutMessageInput;
  where: MessageRecipientWhereUniqueInput;
};

export type MessageRecipientCreateOrConnectWithoutRoomParticipantInput = {
  create: MessageRecipientCreateWithoutRoomParticipantInput;
  where: MessageRecipientWhereUniqueInput;
};

export type MessageRecipientCreateWithoutMessageInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  roomParticipant: RoomParticipantCreateNestedOneWithoutMessageRecipientsInput;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type MessageRecipientCreateWithoutRoomParticipantInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<MessageCreateNestedOneWithoutMessageRecipientsInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type MessageRecipientListRelationFilter = {
  every?: InputMaybe<MessageRecipientWhereInput>;
  none?: InputMaybe<MessageRecipientWhereInput>;
  some?: InputMaybe<MessageRecipientWhereInput>;
};

export type MessageRecipientOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageRecipientOrderByWithRelationInput = {
  createdDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  isRead?: InputMaybe<SortOrder>;
  message?: InputMaybe<MessageOrderByWithRelationInput>;
  messageId?: InputMaybe<SortOrder>;
  roomParticipant?: InputMaybe<RoomParticipantOrderByWithRelationInput>;
  roomParticipantId?: InputMaybe<SortOrder>;
  updatedDate?: InputMaybe<SortOrder>;
};

export enum MessageRecipientScalarFieldEnum {
  CreatedDate = 'createdDate',
  Id = 'id',
  IsActive = 'isActive',
  IsRead = 'isRead',
  MessageId = 'messageId',
  RoomParticipantId = 'roomParticipantId',
  UpdatedDate = 'updatedDate'
}

export type MessageRecipientScalarWhereInput = {
  AND?: InputMaybe<Array<MessageRecipientScalarWhereInput>>;
  NOT?: InputMaybe<Array<MessageRecipientScalarWhereInput>>;
  OR?: InputMaybe<Array<MessageRecipientScalarWhereInput>>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  isRead?: InputMaybe<BoolNullableFilter>;
  messageId?: InputMaybe<IntNullableFilter>;
  roomParticipantId?: InputMaybe<IntFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
};

export type MessageRecipientUpdateManyMutationInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isRead?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type MessageRecipientUpdateManyWithWhereWithoutMessageInput = {
  data: MessageRecipientUpdateManyMutationInput;
  where: MessageRecipientScalarWhereInput;
};

export type MessageRecipientUpdateManyWithWhereWithoutRoomParticipantInput = {
  data: MessageRecipientUpdateManyMutationInput;
  where: MessageRecipientScalarWhereInput;
};

export type MessageRecipientUpdateManyWithoutMessageInput = {
  connect?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageRecipientCreateOrConnectWithoutMessageInput>>;
  create?: InputMaybe<Array<MessageRecipientCreateWithoutMessageInput>>;
  createMany?: InputMaybe<MessageRecipientCreateManyMessageInputEnvelope>;
  delete?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageRecipientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageRecipientUpdateWithWhereUniqueWithoutMessageInput>>;
  updateMany?: InputMaybe<Array<MessageRecipientUpdateManyWithWhereWithoutMessageInput>>;
  upsert?: InputMaybe<Array<MessageRecipientUpsertWithWhereUniqueWithoutMessageInput>>;
};

export type MessageRecipientUpdateManyWithoutRoomParticipantInput = {
  connect?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageRecipientCreateOrConnectWithoutRoomParticipantInput>>;
  create?: InputMaybe<Array<MessageRecipientCreateWithoutRoomParticipantInput>>;
  createMany?: InputMaybe<MessageRecipientCreateManyRoomParticipantInputEnvelope>;
  delete?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageRecipientScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageRecipientWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageRecipientUpdateWithWhereUniqueWithoutRoomParticipantInput>>;
  updateMany?: InputMaybe<Array<MessageRecipientUpdateManyWithWhereWithoutRoomParticipantInput>>;
  upsert?: InputMaybe<Array<MessageRecipientUpsertWithWhereUniqueWithoutRoomParticipantInput>>;
};

export type MessageRecipientUpdateWithWhereUniqueWithoutMessageInput = {
  data: MessageRecipientUpdateWithoutMessageInput;
  where: MessageRecipientWhereUniqueInput;
};

export type MessageRecipientUpdateWithWhereUniqueWithoutRoomParticipantInput = {
  data: MessageRecipientUpdateWithoutRoomParticipantInput;
  where: MessageRecipientWhereUniqueInput;
};

export type MessageRecipientUpdateWithoutMessageInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isRead?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  roomParticipant?: InputMaybe<RoomParticipantUpdateOneRequiredWithoutMessageRecipientsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type MessageRecipientUpdateWithoutRoomParticipantInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isRead?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  message?: InputMaybe<MessageUpdateOneWithoutMessageRecipientsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type MessageRecipientUpsertWithWhereUniqueWithoutMessageInput = {
  create: MessageRecipientCreateWithoutMessageInput;
  update: MessageRecipientUpdateWithoutMessageInput;
  where: MessageRecipientWhereUniqueInput;
};

export type MessageRecipientUpsertWithWhereUniqueWithoutRoomParticipantInput = {
  create: MessageRecipientCreateWithoutRoomParticipantInput;
  update: MessageRecipientUpdateWithoutRoomParticipantInput;
  where: MessageRecipientWhereUniqueInput;
};

export type MessageRecipientWhereInput = {
  AND?: InputMaybe<Array<MessageRecipientWhereInput>>;
  NOT?: InputMaybe<Array<MessageRecipientWhereInput>>;
  OR?: InputMaybe<Array<MessageRecipientWhereInput>>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  isRead?: InputMaybe<BoolNullableFilter>;
  message?: InputMaybe<MessageRelationFilter>;
  messageId?: InputMaybe<IntNullableFilter>;
  roomParticipant?: InputMaybe<RoomParticipantRelationFilter>;
  roomParticipantId?: InputMaybe<IntFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
};

export type MessageRecipientWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type MessageRelationFilter = {
  is?: InputMaybe<MessageWhereInput>;
  isNot?: InputMaybe<MessageWhereInput>;
};

export enum MessageScalarFieldEnum {
  Body = 'body',
  CreatedDate = 'createdDate',
  CreaterId = 'createrId',
  Id = 'id',
  IsActive = 'isActive',
  IsCreated = 'isCreated',
  RoomId = 'roomId',
  UpdatedDate = 'updatedDate'
}

export type MessageScalarWhereInput = {
  AND?: InputMaybe<Array<MessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<MessageScalarWhereInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereInput>>;
  body?: InputMaybe<StringFilter>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  createrId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  isCreated?: InputMaybe<BoolNullableFilter>;
  roomId?: InputMaybe<IntNullableFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
};

export type MessageTyping = {
  __typename?: 'MessageTyping';
  body?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  roomId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
};

export type MessageTypingInput = {
  body?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  roomId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type MessageUpdateManyMutationInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isCreated?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateManyWithWhereWithoutRoomInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithWhereWithoutUserInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutRoomInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutRoomInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutRoomInput>>;
  createMany?: InputMaybe<MessageCreateManyRoomInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutRoomInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutRoomInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutRoomInput>>;
};

export type MessageUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutUserInput>>;
  createMany?: InputMaybe<MessageCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MessageUpdateOneWithoutMessageRecipientsInput = {
  connect?: InputMaybe<MessageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MessageCreateOrConnectWithoutMessageRecipientsInput>;
  create?: InputMaybe<MessageCreateWithoutMessageRecipientsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<MessageUpdateWithoutMessageRecipientsInput>;
  upsert?: InputMaybe<MessageUpsertWithoutMessageRecipientsInput>;
};

export type MessageUpdateWithWhereUniqueWithoutRoomInput = {
  data: MessageUpdateWithoutRoomInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithWhereUniqueWithoutUserInput = {
  data: MessageUpdateWithoutUserInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithoutMessageRecipientsInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isCreated?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  messageAttachments?: InputMaybe<MessageAttachmentUpdateManyWithoutMessageInput>;
  room?: InputMaybe<RoomUpdateOneWithoutMessagesInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutMessagesInput>;
};

export type MessageUpdateWithoutRoomInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isCreated?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  messageAttachments?: InputMaybe<MessageAttachmentUpdateManyWithoutMessageInput>;
  messageRecipients?: InputMaybe<MessageRecipientUpdateManyWithoutMessageInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutMessagesInput>;
};

export type MessageUpdateWithoutUserInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isCreated?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  messageAttachments?: InputMaybe<MessageAttachmentUpdateManyWithoutMessageInput>;
  messageRecipients?: InputMaybe<MessageRecipientUpdateManyWithoutMessageInput>;
  room?: InputMaybe<RoomUpdateOneWithoutMessagesInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type MessageUpsertWithWhereUniqueWithoutRoomInput = {
  create: MessageCreateWithoutRoomInput;
  update: MessageUpdateWithoutRoomInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithWhereUniqueWithoutUserInput = {
  create: MessageCreateWithoutUserInput;
  update: MessageUpdateWithoutUserInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithoutMessageRecipientsInput = {
  create: MessageCreateWithoutMessageRecipientsInput;
  update: MessageUpdateWithoutMessageRecipientsInput;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  body?: InputMaybe<StringFilter>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  createrId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  isCreated?: InputMaybe<BoolNullableFilter>;
  messageAttachments?: InputMaybe<MessageAttachmentListRelationFilter>;
  messageRecipients?: InputMaybe<MessageRecipientListRelationFilter>;
  room?: InputMaybe<RoomRelationFilter>;
  roomId?: InputMaybe<IntNullableFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDomain: Domain;
  createManyUser: AffectedRowsOutput;
  createMessage: Message;
  createRoom: Room;
  createUser: User;
  messageTyping?: Maybe<MessageTyping>;
  updateUser?: Maybe<User>;
};


export type MutationCreateDomainArgs = {
  data: DomainCreateInput;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateRoomArgs = {
  data: RoomCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationMessageTypingArgs = {
  data?: InputMaybe<MessageTypingInput>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedAwsDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['AWSDateTime']>;
  gt?: InputMaybe<Scalars['AWSDateTime']>;
  gte?: InputMaybe<Scalars['AWSDateTime']>;
  in?: InputMaybe<Array<Scalars['AWSDateTime']>>;
  lt?: InputMaybe<Scalars['AWSDateTime']>;
  lte?: InputMaybe<Scalars['AWSDateTime']>;
  not?: InputMaybe<NestedAwsDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['AWSDateTime']>>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedEnumGroupTypeFilter = {
  equals?: InputMaybe<GroupType>;
  in?: InputMaybe<Array<GroupType>>;
  not?: InputMaybe<NestedEnumGroupTypeFilter>;
  notIn?: InputMaybe<Array<GroupType>>;
};

export type NestedEnumUserOnlineStatusNullableFilter = {
  equals?: InputMaybe<UserOnlineStatus>;
  in?: InputMaybe<Array<UserOnlineStatus>>;
  not?: InputMaybe<NestedEnumUserOnlineStatusNullableFilter>;
  notIn?: InputMaybe<Array<UserOnlineStatus>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableAwsDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['AWSDateTime']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableEnumUserOnlineStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<UserOnlineStatus>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findFirstDomain?: Maybe<Domain>;
  findFirstUser?: Maybe<User>;
  messages: Array<Message>;
  roomParticipants: Array<RoomParticipant>;
  rooms: Array<Room>;
};


export type QueryFindFirstDomainArgs = {
  cursor?: InputMaybe<DomainWhereUniqueInput>;
  distinct?: InputMaybe<Array<DomainScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DomainOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DomainWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryRoomParticipantsArgs = {
  cursor?: InputMaybe<RoomParticipantWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoomParticipantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoomParticipantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoomParticipantWhereInput>;
};


export type QueryRoomsArgs = {
  cursor?: InputMaybe<RoomWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoomScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoomOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoomWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Room = {
  __typename?: 'Room';
  _count?: Maybe<RoomCount>;
  createdDate?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  lastActivityDate?: Maybe<Scalars['AWSDateTime']>;
  messages: Array<Message>;
  name?: Maybe<Scalars['String']>;
  roomParticipants: Array<RoomParticipant>;
  type: GroupType;
  updatedDate?: Maybe<Scalars['AWSDateTime']>;
  user: User;
  userId: Scalars['Int'];
};


export type RoomMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type RoomRoomParticipantsArgs = {
  cursor?: InputMaybe<RoomParticipantWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoomParticipantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoomParticipantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoomParticipantWhereInput>;
};

export type RoomCount = {
  __typename?: 'RoomCount';
  messages: Scalars['Int'];
  roomParticipants: Scalars['Int'];
};

export type RoomCreateInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityDate?: InputMaybe<Scalars['AWSDateTime']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutRoomInput>;
  name?: InputMaybe<Scalars['String']>;
  roomParticipants?: InputMaybe<RoomParticipantCreateNestedManyWithoutRoomInput>;
  type?: InputMaybe<GroupType>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  user: UserCreateNestedOneWithoutRoomsInput;
};

export type RoomCreateManyUserInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityDate?: InputMaybe<Scalars['AWSDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<GroupType>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type RoomCreateManyUserInputEnvelope = {
  data: Array<RoomCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RoomCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RoomWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoomCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RoomCreateWithoutUserInput>>;
  createMany?: InputMaybe<RoomCreateManyUserInputEnvelope>;
};

export type RoomCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<RoomWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoomCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<RoomCreateWithoutMessagesInput>;
};

export type RoomCreateNestedOneWithoutRoomParticipantsInput = {
  connect?: InputMaybe<RoomWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoomCreateOrConnectWithoutRoomParticipantsInput>;
  create?: InputMaybe<RoomCreateWithoutRoomParticipantsInput>;
};

export type RoomCreateOrConnectWithoutMessagesInput = {
  create: RoomCreateWithoutMessagesInput;
  where: RoomWhereUniqueInput;
};

export type RoomCreateOrConnectWithoutRoomParticipantsInput = {
  create: RoomCreateWithoutRoomParticipantsInput;
  where: RoomWhereUniqueInput;
};

export type RoomCreateOrConnectWithoutUserInput = {
  create: RoomCreateWithoutUserInput;
  where: RoomWhereUniqueInput;
};

export type RoomCreateWithoutMessagesInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityDate?: InputMaybe<Scalars['AWSDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  roomParticipants?: InputMaybe<RoomParticipantCreateNestedManyWithoutRoomInput>;
  type?: InputMaybe<GroupType>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  user: UserCreateNestedOneWithoutRoomsInput;
};

export type RoomCreateWithoutRoomParticipantsInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityDate?: InputMaybe<Scalars['AWSDateTime']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutRoomInput>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<GroupType>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  user: UserCreateNestedOneWithoutRoomsInput;
};

export type RoomCreateWithoutUserInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastActivityDate?: InputMaybe<Scalars['AWSDateTime']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutRoomInput>;
  name?: InputMaybe<Scalars['String']>;
  roomParticipants?: InputMaybe<RoomParticipantCreateNestedManyWithoutRoomInput>;
  type?: InputMaybe<GroupType>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type RoomListRelationFilter = {
  every?: InputMaybe<RoomWhereInput>;
  none?: InputMaybe<RoomWhereInput>;
  some?: InputMaybe<RoomWhereInput>;
};

export type RoomOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RoomOrderByWithRelationInput = {
  createdDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  lastActivityDate?: InputMaybe<SortOrder>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  roomParticipants?: InputMaybe<RoomParticipantOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  updatedDate?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type RoomParticipant = {
  __typename?: 'RoomParticipant';
  _count?: Maybe<RoomParticipantCount>;
  createdDate?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['Int'];
  isActive?: Maybe<Scalars['Boolean']>;
  messageRecipients: Array<MessageRecipient>;
  participantId: Scalars['Int'];
  room: Room;
  roomId: Scalars['Int'];
  updatedDate?: Maybe<Scalars['AWSDateTime']>;
  user: User;
};


export type RoomParticipantMessageRecipientsArgs = {
  cursor?: InputMaybe<MessageRecipientWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageRecipientScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageRecipientOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageRecipientWhereInput>;
};

export type RoomParticipantCount = {
  __typename?: 'RoomParticipantCount';
  messageRecipients: Scalars['Int'];
};

export type RoomParticipantCreateManyRoomInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  participantId: Scalars['Int'];
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type RoomParticipantCreateManyRoomInputEnvelope = {
  data: Array<RoomParticipantCreateManyRoomInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RoomParticipantCreateManyUserInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  roomId: Scalars['Int'];
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type RoomParticipantCreateManyUserInputEnvelope = {
  data: Array<RoomParticipantCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RoomParticipantCreateNestedManyWithoutRoomInput = {
  connect?: InputMaybe<Array<RoomParticipantWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoomParticipantCreateOrConnectWithoutRoomInput>>;
  create?: InputMaybe<Array<RoomParticipantCreateWithoutRoomInput>>;
  createMany?: InputMaybe<RoomParticipantCreateManyRoomInputEnvelope>;
};

export type RoomParticipantCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RoomParticipantWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoomParticipantCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RoomParticipantCreateWithoutUserInput>>;
  createMany?: InputMaybe<RoomParticipantCreateManyUserInputEnvelope>;
};

export type RoomParticipantCreateNestedOneWithoutMessageRecipientsInput = {
  connect?: InputMaybe<RoomParticipantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoomParticipantCreateOrConnectWithoutMessageRecipientsInput>;
  create?: InputMaybe<RoomParticipantCreateWithoutMessageRecipientsInput>;
};

export type RoomParticipantCreateOrConnectWithoutMessageRecipientsInput = {
  create: RoomParticipantCreateWithoutMessageRecipientsInput;
  where: RoomParticipantWhereUniqueInput;
};

export type RoomParticipantCreateOrConnectWithoutRoomInput = {
  create: RoomParticipantCreateWithoutRoomInput;
  where: RoomParticipantWhereUniqueInput;
};

export type RoomParticipantCreateOrConnectWithoutUserInput = {
  create: RoomParticipantCreateWithoutUserInput;
  where: RoomParticipantWhereUniqueInput;
};

export type RoomParticipantCreateWithoutMessageRecipientsInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  room: RoomCreateNestedOneWithoutRoomParticipantsInput;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  user: UserCreateNestedOneWithoutRoomParticipantsInput;
};

export type RoomParticipantCreateWithoutRoomInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  messageRecipients?: InputMaybe<MessageRecipientCreateNestedManyWithoutRoomParticipantInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  user: UserCreateNestedOneWithoutRoomParticipantsInput;
};

export type RoomParticipantCreateWithoutUserInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  messageRecipients?: InputMaybe<MessageRecipientCreateNestedManyWithoutRoomParticipantInput>;
  room: RoomCreateNestedOneWithoutRoomParticipantsInput;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
};

export type RoomParticipantListRelationFilter = {
  every?: InputMaybe<RoomParticipantWhereInput>;
  none?: InputMaybe<RoomParticipantWhereInput>;
  some?: InputMaybe<RoomParticipantWhereInput>;
};

export type RoomParticipantOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RoomParticipantOrderByWithRelationInput = {
  createdDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  messageRecipients?: InputMaybe<MessageRecipientOrderByRelationAggregateInput>;
  participantId?: InputMaybe<SortOrder>;
  room?: InputMaybe<RoomOrderByWithRelationInput>;
  roomId?: InputMaybe<SortOrder>;
  updatedDate?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type RoomParticipantRelationFilter = {
  is?: InputMaybe<RoomParticipantWhereInput>;
  isNot?: InputMaybe<RoomParticipantWhereInput>;
};

export enum RoomParticipantScalarFieldEnum {
  CreatedDate = 'createdDate',
  Id = 'id',
  IsActive = 'isActive',
  ParticipantId = 'participantId',
  RoomId = 'roomId',
  UpdatedDate = 'updatedDate'
}

export type RoomParticipantScalarWhereInput = {
  AND?: InputMaybe<Array<RoomParticipantScalarWhereInput>>;
  NOT?: InputMaybe<Array<RoomParticipantScalarWhereInput>>;
  OR?: InputMaybe<Array<RoomParticipantScalarWhereInput>>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  participantId?: InputMaybe<IntFilter>;
  roomId?: InputMaybe<IntFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
};

export type RoomParticipantUpdateManyMutationInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type RoomParticipantUpdateManyWithWhereWithoutRoomInput = {
  data: RoomParticipantUpdateManyMutationInput;
  where: RoomParticipantScalarWhereInput;
};

export type RoomParticipantUpdateManyWithWhereWithoutUserInput = {
  data: RoomParticipantUpdateManyMutationInput;
  where: RoomParticipantScalarWhereInput;
};

export type RoomParticipantUpdateManyWithoutRoomInput = {
  connect?: InputMaybe<Array<RoomParticipantWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoomParticipantCreateOrConnectWithoutRoomInput>>;
  create?: InputMaybe<Array<RoomParticipantCreateWithoutRoomInput>>;
  createMany?: InputMaybe<RoomParticipantCreateManyRoomInputEnvelope>;
  delete?: InputMaybe<Array<RoomParticipantWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RoomParticipantScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RoomParticipantWhereUniqueInput>>;
  set?: InputMaybe<Array<RoomParticipantWhereUniqueInput>>;
  update?: InputMaybe<Array<RoomParticipantUpdateWithWhereUniqueWithoutRoomInput>>;
  updateMany?: InputMaybe<Array<RoomParticipantUpdateManyWithWhereWithoutRoomInput>>;
  upsert?: InputMaybe<Array<RoomParticipantUpsertWithWhereUniqueWithoutRoomInput>>;
};

export type RoomParticipantUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<RoomParticipantWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoomParticipantCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RoomParticipantCreateWithoutUserInput>>;
  createMany?: InputMaybe<RoomParticipantCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RoomParticipantWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RoomParticipantScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RoomParticipantWhereUniqueInput>>;
  set?: InputMaybe<Array<RoomParticipantWhereUniqueInput>>;
  update?: InputMaybe<Array<RoomParticipantUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RoomParticipantUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RoomParticipantUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RoomParticipantUpdateOneRequiredWithoutMessageRecipientsInput = {
  connect?: InputMaybe<RoomParticipantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoomParticipantCreateOrConnectWithoutMessageRecipientsInput>;
  create?: InputMaybe<RoomParticipantCreateWithoutMessageRecipientsInput>;
  update?: InputMaybe<RoomParticipantUpdateWithoutMessageRecipientsInput>;
  upsert?: InputMaybe<RoomParticipantUpsertWithoutMessageRecipientsInput>;
};

export type RoomParticipantUpdateWithWhereUniqueWithoutRoomInput = {
  data: RoomParticipantUpdateWithoutRoomInput;
  where: RoomParticipantWhereUniqueInput;
};

export type RoomParticipantUpdateWithWhereUniqueWithoutUserInput = {
  data: RoomParticipantUpdateWithoutUserInput;
  where: RoomParticipantWhereUniqueInput;
};

export type RoomParticipantUpdateWithoutMessageRecipientsInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  room?: InputMaybe<RoomUpdateOneRequiredWithoutRoomParticipantsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRoomParticipantsInput>;
};

export type RoomParticipantUpdateWithoutRoomInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  messageRecipients?: InputMaybe<MessageRecipientUpdateManyWithoutRoomParticipantInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRoomParticipantsInput>;
};

export type RoomParticipantUpdateWithoutUserInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  messageRecipients?: InputMaybe<MessageRecipientUpdateManyWithoutRoomParticipantInput>;
  room?: InputMaybe<RoomUpdateOneRequiredWithoutRoomParticipantsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type RoomParticipantUpsertWithWhereUniqueWithoutRoomInput = {
  create: RoomParticipantCreateWithoutRoomInput;
  update: RoomParticipantUpdateWithoutRoomInput;
  where: RoomParticipantWhereUniqueInput;
};

export type RoomParticipantUpsertWithWhereUniqueWithoutUserInput = {
  create: RoomParticipantCreateWithoutUserInput;
  update: RoomParticipantUpdateWithoutUserInput;
  where: RoomParticipantWhereUniqueInput;
};

export type RoomParticipantUpsertWithoutMessageRecipientsInput = {
  create: RoomParticipantCreateWithoutMessageRecipientsInput;
  update: RoomParticipantUpdateWithoutMessageRecipientsInput;
};

export type RoomParticipantWhereInput = {
  AND?: InputMaybe<Array<RoomParticipantWhereInput>>;
  NOT?: InputMaybe<Array<RoomParticipantWhereInput>>;
  OR?: InputMaybe<Array<RoomParticipantWhereInput>>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  messageRecipients?: InputMaybe<MessageRecipientListRelationFilter>;
  participantId?: InputMaybe<IntFilter>;
  room?: InputMaybe<RoomRelationFilter>;
  roomId?: InputMaybe<IntFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type RoomParticipantWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type RoomRelationFilter = {
  is?: InputMaybe<RoomWhereInput>;
  isNot?: InputMaybe<RoomWhereInput>;
};

export enum RoomScalarFieldEnum {
  CreatedDate = 'createdDate',
  Id = 'id',
  IsActive = 'isActive',
  LastActivityDate = 'lastActivityDate',
  Name = 'name',
  Type = 'type',
  UpdatedDate = 'updatedDate',
  UserId = 'userId'
}

export type RoomScalarWhereInput = {
  AND?: InputMaybe<Array<RoomScalarWhereInput>>;
  NOT?: InputMaybe<Array<RoomScalarWhereInput>>;
  OR?: InputMaybe<Array<RoomScalarWhereInput>>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  lastActivityDate?: InputMaybe<AwsDateTimeNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumGroupTypeFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type RoomUpdateManyMutationInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  lastActivityDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumGroupTypeFieldUpdateOperationsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type RoomUpdateManyWithWhereWithoutUserInput = {
  data: RoomUpdateManyMutationInput;
  where: RoomScalarWhereInput;
};

export type RoomUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<RoomWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoomCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RoomCreateWithoutUserInput>>;
  createMany?: InputMaybe<RoomCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RoomWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RoomScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RoomWhereUniqueInput>>;
  set?: InputMaybe<Array<RoomWhereUniqueInput>>;
  update?: InputMaybe<Array<RoomUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RoomUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RoomUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RoomUpdateOneRequiredWithoutRoomParticipantsInput = {
  connect?: InputMaybe<RoomWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoomCreateOrConnectWithoutRoomParticipantsInput>;
  create?: InputMaybe<RoomCreateWithoutRoomParticipantsInput>;
  update?: InputMaybe<RoomUpdateWithoutRoomParticipantsInput>;
  upsert?: InputMaybe<RoomUpsertWithoutRoomParticipantsInput>;
};

export type RoomUpdateOneWithoutMessagesInput = {
  connect?: InputMaybe<RoomWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoomCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<RoomCreateWithoutMessagesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<RoomUpdateWithoutMessagesInput>;
  upsert?: InputMaybe<RoomUpsertWithoutMessagesInput>;
};

export type RoomUpdateWithWhereUniqueWithoutUserInput = {
  data: RoomUpdateWithoutUserInput;
  where: RoomWhereUniqueInput;
};

export type RoomUpdateWithoutMessagesInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  lastActivityDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roomParticipants?: InputMaybe<RoomParticipantUpdateManyWithoutRoomInput>;
  type?: InputMaybe<EnumGroupTypeFieldUpdateOperationsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRoomsInput>;
};

export type RoomUpdateWithoutRoomParticipantsInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  lastActivityDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutRoomInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumGroupTypeFieldUpdateOperationsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRoomsInput>;
};

export type RoomUpdateWithoutUserInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  lastActivityDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutRoomInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roomParticipants?: InputMaybe<RoomParticipantUpdateManyWithoutRoomInput>;
  type?: InputMaybe<EnumGroupTypeFieldUpdateOperationsInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
};

export type RoomUpsertWithWhereUniqueWithoutUserInput = {
  create: RoomCreateWithoutUserInput;
  update: RoomUpdateWithoutUserInput;
  where: RoomWhereUniqueInput;
};

export type RoomUpsertWithoutMessagesInput = {
  create: RoomCreateWithoutMessagesInput;
  update: RoomUpdateWithoutMessagesInput;
};

export type RoomUpsertWithoutRoomParticipantsInput = {
  create: RoomCreateWithoutRoomParticipantsInput;
  update: RoomUpdateWithoutRoomParticipantsInput;
};

export type RoomWhereInput = {
  AND?: InputMaybe<Array<RoomWhereInput>>;
  NOT?: InputMaybe<Array<RoomWhereInput>>;
  OR?: InputMaybe<Array<RoomWhereInput>>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  lastActivityDate?: InputMaybe<AwsDateTimeNullableFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  roomParticipants?: InputMaybe<RoomParticipantListRelationFilter>;
  type?: InputMaybe<EnumGroupTypeFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type RoomWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onMessageTyping?: Maybe<MessageTyping>;
};


export type SubscriptionOnMessageTypingArgs = {
  roomId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  createdDate?: Maybe<Scalars['AWSDateTime']>;
  deviceToken?: Maybe<Scalars['String']>;
  domain: Domain;
  domainId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  externalUserId: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isPushEnabled?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  messages: Array<Message>;
  onlineStatus?: Maybe<UserOnlineStatus>;
  preferences?: Maybe<Scalars['AWSJSON']>;
  roomParticipants: Array<RoomParticipant>;
  rooms: Array<Room>;
  updatedDate?: Maybe<Scalars['AWSDateTime']>;
  uuid?: Maybe<Scalars['String']>;
};


export type UserMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type UserRoomParticipantsArgs = {
  cursor?: InputMaybe<RoomParticipantWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoomParticipantScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoomParticipantOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoomParticipantWhereInput>;
};


export type UserRoomsArgs = {
  cursor?: InputMaybe<RoomWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoomScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoomOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoomWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  messages: Scalars['Int'];
  roomParticipants: Scalars['Int'];
  rooms: Scalars['Int'];
};

export type UserCreateInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  deviceToken?: InputMaybe<Scalars['String']>;
  domain: DomainCreateNestedOneWithoutUsersInput;
  email?: InputMaybe<Scalars['String']>;
  externalUserId: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPushEnabled?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutUserInput>;
  onlineStatus?: InputMaybe<UserOnlineStatus>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  roomParticipants?: InputMaybe<RoomParticipantCreateNestedManyWithoutUserInput>;
  rooms?: InputMaybe<RoomCreateNestedManyWithoutUserInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type UserCreateManyDomainInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  deviceToken?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  externalUserId: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPushEnabled?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  onlineStatus?: InputMaybe<UserOnlineStatus>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type UserCreateManyDomainInputEnvelope = {
  data: Array<UserCreateManyDomainInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateManyInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  deviceToken?: InputMaybe<Scalars['String']>;
  domainId: Scalars['Int'];
  email?: InputMaybe<Scalars['String']>;
  externalUserId: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPushEnabled?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  onlineStatus?: InputMaybe<UserOnlineStatus>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedManyWithoutDomainInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutDomainInput>>;
  create?: InputMaybe<Array<UserCreateWithoutDomainInput>>;
  createMany?: InputMaybe<UserCreateManyDomainInputEnvelope>;
};

export type UserCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserCreateWithoutMessagesInput>;
};

export type UserCreateNestedOneWithoutRoomParticipantsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRoomParticipantsInput>;
  create?: InputMaybe<UserCreateWithoutRoomParticipantsInput>;
};

export type UserCreateNestedOneWithoutRoomsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRoomsInput>;
  create?: InputMaybe<UserCreateWithoutRoomsInput>;
};

export type UserCreateOrConnectWithoutDomainInput = {
  create: UserCreateWithoutDomainInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRoomParticipantsInput = {
  create: UserCreateWithoutRoomParticipantsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRoomsInput = {
  create: UserCreateWithoutRoomsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutDomainInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  deviceToken?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  externalUserId: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPushEnabled?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutUserInput>;
  onlineStatus?: InputMaybe<UserOnlineStatus>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  roomParticipants?: InputMaybe<RoomParticipantCreateNestedManyWithoutUserInput>;
  rooms?: InputMaybe<RoomCreateNestedManyWithoutUserInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutMessagesInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  deviceToken?: InputMaybe<Scalars['String']>;
  domain: DomainCreateNestedOneWithoutUsersInput;
  email?: InputMaybe<Scalars['String']>;
  externalUserId: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPushEnabled?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  onlineStatus?: InputMaybe<UserOnlineStatus>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  roomParticipants?: InputMaybe<RoomParticipantCreateNestedManyWithoutUserInput>;
  rooms?: InputMaybe<RoomCreateNestedManyWithoutUserInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutRoomParticipantsInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  deviceToken?: InputMaybe<Scalars['String']>;
  domain: DomainCreateNestedOneWithoutUsersInput;
  email?: InputMaybe<Scalars['String']>;
  externalUserId: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPushEnabled?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutUserInput>;
  onlineStatus?: InputMaybe<UserOnlineStatus>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  rooms?: InputMaybe<RoomCreateNestedManyWithoutUserInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutRoomsInput = {
  createdDate?: InputMaybe<Scalars['AWSDateTime']>;
  deviceToken?: InputMaybe<Scalars['String']>;
  domain: DomainCreateNestedOneWithoutUsersInput;
  email?: InputMaybe<Scalars['String']>;
  externalUserId: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isPushEnabled?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutUserInput>;
  onlineStatus?: InputMaybe<UserOnlineStatus>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  roomParticipants?: InputMaybe<RoomParticipantCreateNestedManyWithoutUserInput>;
  updatedDate?: InputMaybe<Scalars['AWSDateTime']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type UserExternalUserIdDomainIdCompoundUniqueInput = {
  domainId: Scalars['Int'];
  externalUserId: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export enum UserOnlineStatus {
  Available = 'Available',
  Away = 'Away',
  Offline = 'Offline'
}

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdDate?: InputMaybe<SortOrder>;
  deviceToken?: InputMaybe<SortOrder>;
  domain?: InputMaybe<DomainOrderByWithRelationInput>;
  domainId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  externalUserId?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  isPushEnabled?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  onlineStatus?: InputMaybe<SortOrder>;
  preferences?: InputMaybe<SortOrder>;
  roomParticipants?: InputMaybe<RoomParticipantOrderByRelationAggregateInput>;
  rooms?: InputMaybe<RoomOrderByRelationAggregateInput>;
  updatedDate?: InputMaybe<SortOrder>;
  uuid?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedDate = 'createdDate',
  DeviceToken = 'deviceToken',
  DomainId = 'domainId',
  Email = 'email',
  ExternalUserId = 'externalUserId',
  FirstName = 'firstName',
  Id = 'id',
  ImageUrl = 'imageUrl',
  IsActive = 'isActive',
  IsPushEnabled = 'isPushEnabled',
  LastName = 'lastName',
  OnlineStatus = 'onlineStatus',
  Preferences = 'preferences',
  UpdatedDate = 'updatedDate',
  Uuid = 'uuid'
}

export type UserUpdateInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  deviceToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<DomainUpdateOneRequiredWithoutUsersInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isPushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutUserInput>;
  onlineStatus?: InputMaybe<NullableEnumUserOnlineStatusFieldUpdateOperationsInput>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  roomParticipants?: InputMaybe<RoomParticipantUpdateManyWithoutUserInput>;
  rooms?: InputMaybe<RoomUpdateManyWithoutUserInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  uuid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutRoomParticipantsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRoomParticipantsInput>;
  create?: InputMaybe<UserCreateWithoutRoomParticipantsInput>;
  update?: InputMaybe<UserUpdateWithoutRoomParticipantsInput>;
  upsert?: InputMaybe<UserUpsertWithoutRoomParticipantsInput>;
};

export type UserUpdateOneRequiredWithoutRoomsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRoomsInput>;
  create?: InputMaybe<UserCreateWithoutRoomsInput>;
  update?: InputMaybe<UserUpdateWithoutRoomsInput>;
  upsert?: InputMaybe<UserUpsertWithoutRoomsInput>;
};

export type UserUpdateOneWithoutMessagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserCreateWithoutMessagesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutMessagesInput>;
  upsert?: InputMaybe<UserUpsertWithoutMessagesInput>;
};

export type UserUpdateWithoutMessagesInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  deviceToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<DomainUpdateOneRequiredWithoutUsersInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isPushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onlineStatus?: InputMaybe<NullableEnumUserOnlineStatusFieldUpdateOperationsInput>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  roomParticipants?: InputMaybe<RoomParticipantUpdateManyWithoutUserInput>;
  rooms?: InputMaybe<RoomUpdateManyWithoutUserInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  uuid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRoomParticipantsInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  deviceToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<DomainUpdateOneRequiredWithoutUsersInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isPushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutUserInput>;
  onlineStatus?: InputMaybe<NullableEnumUserOnlineStatusFieldUpdateOperationsInput>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  rooms?: InputMaybe<RoomUpdateManyWithoutUserInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  uuid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRoomsInput = {
  createdDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  deviceToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  domain?: InputMaybe<DomainUpdateOneRequiredWithoutUsersInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalUserId?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isActive?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  isPushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutUserInput>;
  onlineStatus?: InputMaybe<NullableEnumUserOnlineStatusFieldUpdateOperationsInput>;
  preferences?: InputMaybe<Scalars['AWSJSON']>;
  roomParticipants?: InputMaybe<RoomParticipantUpdateManyWithoutUserInput>;
  updatedDate?: InputMaybe<NullableAwsDateTimeFieldUpdateOperationsInput>;
  uuid?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  update: UserUpdateWithoutMessagesInput;
};

export type UserUpsertWithoutRoomParticipantsInput = {
  create: UserCreateWithoutRoomParticipantsInput;
  update: UserUpdateWithoutRoomParticipantsInput;
};

export type UserUpsertWithoutRoomsInput = {
  create: UserCreateWithoutRoomsInput;
  update: UserUpdateWithoutRoomsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdDate?: InputMaybe<AwsDateTimeNullableFilter>;
  deviceToken?: InputMaybe<StringNullableFilter>;
  domain?: InputMaybe<DomainRelationFilter>;
  domainId?: InputMaybe<IntFilter>;
  email?: InputMaybe<StringNullableFilter>;
  externalUserId?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  imageUrl?: InputMaybe<StringNullableFilter>;
  isActive?: InputMaybe<BoolNullableFilter>;
  isPushEnabled?: InputMaybe<BoolNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  onlineStatus?: InputMaybe<EnumUserOnlineStatusNullableFilter>;
  preferences?: InputMaybe<JsonNullableFilter>;
  roomParticipants?: InputMaybe<RoomParticipantListRelationFilter>;
  rooms?: InputMaybe<RoomListRelationFilter>;
  updatedDate?: InputMaybe<AwsDateTimeNullableFilter>;
  uuid?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  externalUserId_domainId?: InputMaybe<UserExternalUserIdDomainIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type MessageTypingMutationVariables = Exact<{
  data?: InputMaybe<MessageTypingInput>;
}>;


export type MessageTypingMutation = { __typename?: 'Mutation', messageTyping?: { __typename?: 'MessageTyping', roomId?: number | null, id?: number | null, body?: string | null, userName?: string | null, event?: string | null, userId?: number | null } | null };

export type FindMessagesByRoomIdQueryVariables = Exact<{
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum> | MessageScalarFieldEnum>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput> | MessageOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
}>;


export type FindMessagesByRoomIdQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: number, body: string, createdDate?: any | null, updatedDate?: any | null, room?: { __typename?: 'Room', id: number, name?: string | null, type: GroupType, updatedDate?: any | null } | null, messageRecipients: Array<{ __typename?: 'MessageRecipient', id: number, isRead?: boolean | null, roomParticipant: { __typename?: 'RoomParticipant', id: number, user: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, imageUrl?: string | null, preferences?: any | null, onlineStatus?: UserOnlineStatus | null, updatedDate?: any | null, externalUserId: string } } }>, user?: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, imageUrl?: string | null, preferences?: any | null, onlineStatus?: UserOnlineStatus | null, updatedDate?: any | null, externalUserId: string } | null }> };

export type ReadAllRoomsByUserIdQueryVariables = Exact<{
  where?: InputMaybe<RoomParticipantWhereInput>;
}>;


export type ReadAllRoomsByUserIdQuery = { __typename?: 'Query', roomParticipants: Array<{ __typename?: 'RoomParticipant', id: number, room: { __typename?: 'Room', id: number, name?: string | null, type: GroupType, updatedDate?: any | null, _count?: { __typename?: 'RoomCount', roomParticipants: number } | null, roomParticipants: Array<{ __typename?: 'RoomParticipant', user: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, imageUrl?: string | null, preferences?: any | null, onlineStatus?: UserOnlineStatus | null, updatedDate?: any | null, externalUserId: string } }> }, messageRecipients: Array<{ __typename?: 'MessageRecipient', id: number, isRead?: boolean | null, message?: { __typename?: 'Message', id: number, body: string, user?: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, imageUrl?: string | null, preferences?: any | null, onlineStatus?: UserOnlineStatus | null, updatedDate?: any | null, externalUserId: string } | null } | null }> }> };

export type OnMessageTypingSubscriptionVariables = Exact<{
  roomId: Scalars['Int'];
}>;


export type OnMessageTypingSubscription = { __typename?: 'Subscription', onMessageTyping?: { __typename?: 'MessageTyping', body?: string | null, id?: number | null, roomId?: number | null, userName?: string | null, event?: string | null, userId?: number | null } | null };

export const MessageTypingDocument = gql`
    mutation MessageTyping($data: MessageTypingInput) {
  messageTyping(data: $data) {
    roomId
    id
    body
    userName
    event
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MessageTypingGQL extends Apollo.Mutation<MessageTypingMutation, MessageTypingMutationVariables> {
    document = MessageTypingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindMessagesByRoomIdDocument = gql`
    query FindMessagesByRoomId($cursor: MessageWhereUniqueInput, $distinct: [MessageScalarFieldEnum!], $orderBy: [MessageOrderByWithRelationInput!], $skip: Int, $take: Int, $where: MessageWhereInput) {
  messages(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    id
    body
    createdDate
    updatedDate
    room {
      id
      name
      type
      updatedDate
    }
    messageRecipients {
      id
      isRead
      roomParticipant {
        id
        user {
          id
          firstName
          lastName
          imageUrl
          preferences
          onlineStatus
          updatedDate
          externalUserId
        }
      }
    }
    user {
      id
      firstName
      lastName
      imageUrl
      preferences
      onlineStatus
      updatedDate
      externalUserId
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindMessagesByRoomIdGQL extends Apollo.Query<FindMessagesByRoomIdQuery, FindMessagesByRoomIdQueryVariables> {
    document = FindMessagesByRoomIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReadAllRoomsByUserIdDocument = gql`
    query ReadAllRoomsByUserId($where: RoomParticipantWhereInput) {
  roomParticipants(where: $where) {
    id
    room {
      id
      name
      type
      updatedDate
      _count {
        roomParticipants
      }
      roomParticipants {
        user {
          id
          firstName
          lastName
          imageUrl
          preferences
          onlineStatus
          updatedDate
          externalUserId
        }
      }
    }
    messageRecipients {
      id
      isRead
      message {
        id
        body
        user {
          id
          firstName
          lastName
          imageUrl
          preferences
          onlineStatus
          updatedDate
          externalUserId
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReadAllRoomsByUserIdGQL extends Apollo.Query<ReadAllRoomsByUserIdQuery, ReadAllRoomsByUserIdQueryVariables> {
    document = ReadAllRoomsByUserIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OnMessageTypingDocument = gql`
    subscription OnMessageTyping($roomId: Int!) {
  onMessageTyping(roomId: $roomId) {
    body
    id
    roomId
    userName
    event
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OnMessageTypingGQL extends Apollo.Subscription<OnMessageTypingSubscription, OnMessageTypingSubscriptionVariables> {
    document = OnMessageTypingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }