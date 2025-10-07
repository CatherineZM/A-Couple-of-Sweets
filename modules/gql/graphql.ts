/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type AboutItem = Entity & {
  __typename?: 'AboutItem';
  /** One paragraph of description for this section */
  description: RichText;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  photo?: Maybe<Media>;
  /** System stage field */
  stage: Stage;
  /** Title for this section */
  title: Scalars['String']['output'];
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AboutItemPhotoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AboutItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AboutItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type AboutItemConnection = {
  __typename?: 'AboutItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AboutItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AboutItemCreateInput = {
  description: Scalars['RichTextAST']['input'];
  photo?: InputMaybe<MediaCreateOneInlineInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AboutItemCreateManyInlineInput = {
  /** Create and connect multiple existing AboutItem documents */
  create?: InputMaybe<Array<AboutItemCreateInput>>;
};

export type AboutItemCreateOneInlineInput = {
  /** Create and connect one AboutItem document */
  create?: InputMaybe<AboutItemCreateInput>;
};

export type AboutItemCreateWithPositionInput = {
  /** Document to create */
  data: AboutItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AboutItemEdge = {
  __typename?: 'AboutItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AboutItem;
};

/** Identifies documents */
export type AboutItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  photo?: InputMaybe<MediaWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum AboutItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AboutItemParent = AboutUs;

export type AboutItemParentConnectInput = {
  AboutUs?: InputMaybe<AboutUsConnectInput>;
};

export type AboutItemParentCreateInput = {
  AboutUs?: InputMaybe<AboutUsCreateInput>;
};

export type AboutItemParentCreateManyInlineInput = {
  /** Connect multiple existing AboutItemParent documents */
  connect?: InputMaybe<Array<AboutItemParentWhereUniqueInput>>;
  /** Create and connect multiple existing AboutItemParent documents */
  create?: InputMaybe<Array<AboutItemParentCreateInput>>;
};

export type AboutItemParentCreateOneInlineInput = {
  /** Connect one existing AboutItemParent document */
  connect?: InputMaybe<AboutItemParentWhereUniqueInput>;
  /** Create and connect one AboutItemParent document */
  create?: InputMaybe<AboutItemParentCreateInput>;
};

export type AboutItemParentUpdateInput = {
  AboutUs?: InputMaybe<AboutUsUpdateInput>;
};

export type AboutItemParentUpdateManyInlineInput = {
  /** Connect multiple existing AboutItemParent documents */
  connect?: InputMaybe<Array<AboutItemParentConnectInput>>;
  /** Create and connect multiple AboutItemParent documents */
  create?: InputMaybe<Array<AboutItemParentCreateInput>>;
  /** Delete multiple AboutItemParent documents */
  delete?: InputMaybe<Array<AboutItemParentWhereUniqueInput>>;
  /** Disconnect multiple AboutItemParent documents */
  disconnect?: InputMaybe<Array<AboutItemParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AboutItemParent documents */
  set?: InputMaybe<Array<AboutItemParentWhereUniqueInput>>;
  /** Update multiple AboutItemParent documents */
  update?: InputMaybe<Array<AboutItemParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AboutItemParent documents */
  upsert?: InputMaybe<Array<AboutItemParentUpsertWithNestedWhereUniqueInput>>;
};

export type AboutItemParentUpdateManyWithNestedWhereInput = {
  AboutUs?: InputMaybe<AboutUsUpdateManyWithNestedWhereInput>;
};

export type AboutItemParentUpdateOneInlineInput = {
  /** Connect existing AboutItemParent document */
  connect?: InputMaybe<AboutItemParentWhereUniqueInput>;
  /** Create and connect one AboutItemParent document */
  create?: InputMaybe<AboutItemParentCreateInput>;
  /** Delete currently connected AboutItemParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected AboutItemParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AboutItemParent document */
  update?: InputMaybe<AboutItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AboutItemParent document */
  upsert?: InputMaybe<AboutItemParentUpsertWithNestedWhereUniqueInput>;
};

export type AboutItemParentUpdateWithNestedWhereUniqueInput = {
  AboutUs?: InputMaybe<AboutUsUpdateWithNestedWhereUniqueInput>;
};

export type AboutItemParentUpsertWithNestedWhereUniqueInput = {
  AboutUs?: InputMaybe<AboutUsUpsertWithNestedWhereUniqueInput>;
};

export type AboutItemParentWhereInput = {
  AboutUs?: InputMaybe<AboutUsWhereInput>;
};

export type AboutItemParentWhereUniqueInput = {
  AboutUs?: InputMaybe<AboutUsWhereUniqueInput>;
};

export type AboutItemUpdateInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  photo?: InputMaybe<MediaUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutItemUpdateManyInlineInput = {
  /** Create and connect multiple AboutItem component instances */
  create?: InputMaybe<Array<AboutItemCreateWithPositionInput>>;
  /** Delete multiple AboutItem documents */
  delete?: InputMaybe<Array<AboutItemWhereUniqueInput>>;
  /** Update multiple AboutItem component instances */
  update?: InputMaybe<Array<AboutItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple AboutItem component instances */
  upsert?: InputMaybe<Array<AboutItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AboutItemUpdateManyInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AboutItemUpdateManyInput;
  /** Document search */
  where: AboutItemWhereInput;
};

export type AboutItemUpdateOneInlineInput = {
  /** Create and connect one AboutItem document */
  create?: InputMaybe<AboutItemCreateInput>;
  /** Delete currently connected AboutItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AboutItem document */
  update?: InputMaybe<AboutItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AboutItem document */
  upsert?: InputMaybe<AboutItemUpsertWithNestedWhereUniqueInput>;
};

export type AboutItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<AboutItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AboutItemWhereUniqueInput;
};

export type AboutItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AboutItemUpdateInput;
  /** Unique document search */
  where: AboutItemWhereUniqueInput;
};

export type AboutItemUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutItemCreateInput;
  /** Update document if it exists */
  update: AboutItemUpdateInput;
};

export type AboutItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<AboutItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AboutItemWhereUniqueInput;
};

export type AboutItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AboutItemUpsertInput;
  /** Unique document search */
  where: AboutItemWhereUniqueInput;
};

/** Identifies documents */
export type AboutItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  photo?: InputMaybe<MediaWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References AboutItem record uniquely */
export type AboutItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AboutUs = Entity & Node & {
  __typename?: 'AboutUs';
  aboutList: Array<AboutItem>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<AboutUs>;
  /** List of AboutUs versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AboutUsAboutListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AboutItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AboutItemWhereInput>;
};


export type AboutUsCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutUsDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type AboutUsHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type AboutUsPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutUsScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AboutUsUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AboutUsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AboutUsWhereUniqueInput;
};

/** A connection to a list of items. */
export type AboutUsConnection = {
  __typename?: 'AboutUsConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AboutUsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AboutUsCreateInput = {
  aboutList?: InputMaybe<AboutItemCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AboutUsCreateManyInlineInput = {
  /** Connect multiple existing AboutUs documents */
  connect?: InputMaybe<Array<AboutUsWhereUniqueInput>>;
  /** Create and connect multiple existing AboutUs documents */
  create?: InputMaybe<Array<AboutUsCreateInput>>;
};

export type AboutUsCreateOneInlineInput = {
  /** Connect one existing AboutUs document */
  connect?: InputMaybe<AboutUsWhereUniqueInput>;
  /** Create and connect one AboutUs document */
  create?: InputMaybe<AboutUsCreateInput>;
};

/** An edge in a connection. */
export type AboutUsEdge = {
  __typename?: 'AboutUsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AboutUs;
};

/** Identifies documents */
export type AboutUsManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutUsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutUsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutUsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  aboutList_every?: InputMaybe<AboutItemWhereInput>;
  aboutList_none?: InputMaybe<AboutItemWhereInput>;
  aboutList_some?: InputMaybe<AboutItemWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AboutUsWhereStageInput>;
  documentInStages_none?: InputMaybe<AboutUsWhereStageInput>;
  documentInStages_some?: InputMaybe<AboutUsWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AboutUsOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AboutUsUpdateInput = {
  aboutList?: InputMaybe<AboutItemUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutUsUpdateManyInlineInput = {
  /** Connect multiple existing AboutUs documents */
  connect?: InputMaybe<Array<AboutUsConnectInput>>;
  /** Create and connect multiple AboutUs documents */
  create?: InputMaybe<Array<AboutUsCreateInput>>;
  /** Delete multiple AboutUs documents */
  delete?: InputMaybe<Array<AboutUsWhereUniqueInput>>;
  /** Disconnect multiple AboutUs documents */
  disconnect?: InputMaybe<Array<AboutUsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AboutUs documents */
  set?: InputMaybe<Array<AboutUsWhereUniqueInput>>;
  /** Update multiple AboutUs documents */
  update?: InputMaybe<Array<AboutUsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AboutUs documents */
  upsert?: InputMaybe<Array<AboutUsUpsertWithNestedWhereUniqueInput>>;
};

export type AboutUsUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutUsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AboutUsUpdateManyInput;
  /** Document search */
  where: AboutUsWhereInput;
};

export type AboutUsUpdateOneInlineInput = {
  /** Connect existing AboutUs document */
  connect?: InputMaybe<AboutUsWhereUniqueInput>;
  /** Create and connect one AboutUs document */
  create?: InputMaybe<AboutUsCreateInput>;
  /** Delete currently connected AboutUs document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected AboutUs document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AboutUs document */
  update?: InputMaybe<AboutUsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AboutUs document */
  upsert?: InputMaybe<AboutUsUpsertWithNestedWhereUniqueInput>;
};

export type AboutUsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AboutUsUpdateInput;
  /** Unique document search */
  where: AboutUsWhereUniqueInput;
};

export type AboutUsUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutUsCreateInput;
  /** Update document if it exists */
  update: AboutUsUpdateInput;
};

export type AboutUsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AboutUsUpsertInput;
  /** Unique document search */
  where: AboutUsWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AboutUsWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AboutUsWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutUsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutUsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutUsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  aboutList_every?: InputMaybe<AboutItemWhereInput>;
  aboutList_none?: InputMaybe<AboutItemWhereInput>;
  aboutList_some?: InputMaybe<AboutItemWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AboutUsWhereStageInput>;
  documentInStages_none?: InputMaybe<AboutUsWhereStageInput>;
  documentInStages_some?: InputMaybe<AboutUsWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AboutUsWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutUsWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutUsWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutUsWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AboutUsWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References AboutUs record uniquely */
export type AboutUsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AchievementItem = Entity & {
  __typename?: 'AchievementItem';
  date: Scalars['String']['output'];
  /** Make sure to use different headings for contents. */
  description: RichText;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** If there is any photos of them, you can use it/them here. */
  image: Array<Scalars['Json']['output']>;
  name: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AchievementItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AchievementItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type AchievementItemConnection = {
  __typename?: 'AchievementItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AchievementItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AchievementItemCreateInput = {
  date: Scalars['String']['input'];
  description: Scalars['RichTextAST']['input'];
  image?: InputMaybe<Array<Scalars['Json']['input']>>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AchievementItemCreateManyInlineInput = {
  /** Create and connect multiple existing AchievementItem documents */
  create?: InputMaybe<Array<AchievementItemCreateInput>>;
};

export type AchievementItemCreateOneInlineInput = {
  /** Create and connect one AchievementItem document */
  create?: InputMaybe<AchievementItemCreateInput>;
};

export type AchievementItemCreateWithPositionInput = {
  /** Document to create */
  data: AchievementItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AchievementItemEdge = {
  __typename?: 'AchievementItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AchievementItem;
};

/** Identifies documents */
export type AchievementItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AchievementItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AchievementItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AchievementItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  date_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  date_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  date_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  date_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  date_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  date_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  image_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  image_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum AchievementItemOrderByInput {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AchievementItemParent = AchievementList;

export type AchievementItemParentConnectInput = {
  AchievementList?: InputMaybe<AchievementListConnectInput>;
};

export type AchievementItemParentCreateInput = {
  AchievementList?: InputMaybe<AchievementListCreateInput>;
};

export type AchievementItemParentCreateManyInlineInput = {
  /** Connect multiple existing AchievementItemParent documents */
  connect?: InputMaybe<Array<AchievementItemParentWhereUniqueInput>>;
  /** Create and connect multiple existing AchievementItemParent documents */
  create?: InputMaybe<Array<AchievementItemParentCreateInput>>;
};

export type AchievementItemParentCreateOneInlineInput = {
  /** Connect one existing AchievementItemParent document */
  connect?: InputMaybe<AchievementItemParentWhereUniqueInput>;
  /** Create and connect one AchievementItemParent document */
  create?: InputMaybe<AchievementItemParentCreateInput>;
};

export type AchievementItemParentUpdateInput = {
  AchievementList?: InputMaybe<AchievementListUpdateInput>;
};

export type AchievementItemParentUpdateManyInlineInput = {
  /** Connect multiple existing AchievementItemParent documents */
  connect?: InputMaybe<Array<AchievementItemParentConnectInput>>;
  /** Create and connect multiple AchievementItemParent documents */
  create?: InputMaybe<Array<AchievementItemParentCreateInput>>;
  /** Delete multiple AchievementItemParent documents */
  delete?: InputMaybe<Array<AchievementItemParentWhereUniqueInput>>;
  /** Disconnect multiple AchievementItemParent documents */
  disconnect?: InputMaybe<Array<AchievementItemParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AchievementItemParent documents */
  set?: InputMaybe<Array<AchievementItemParentWhereUniqueInput>>;
  /** Update multiple AchievementItemParent documents */
  update?: InputMaybe<Array<AchievementItemParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AchievementItemParent documents */
  upsert?: InputMaybe<Array<AchievementItemParentUpsertWithNestedWhereUniqueInput>>;
};

export type AchievementItemParentUpdateManyWithNestedWhereInput = {
  AchievementList?: InputMaybe<AchievementListUpdateManyWithNestedWhereInput>;
};

export type AchievementItemParentUpdateOneInlineInput = {
  /** Connect existing AchievementItemParent document */
  connect?: InputMaybe<AchievementItemParentWhereUniqueInput>;
  /** Create and connect one AchievementItemParent document */
  create?: InputMaybe<AchievementItemParentCreateInput>;
  /** Delete currently connected AchievementItemParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected AchievementItemParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AchievementItemParent document */
  update?: InputMaybe<AchievementItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AchievementItemParent document */
  upsert?: InputMaybe<AchievementItemParentUpsertWithNestedWhereUniqueInput>;
};

export type AchievementItemParentUpdateWithNestedWhereUniqueInput = {
  AchievementList?: InputMaybe<AchievementListUpdateWithNestedWhereUniqueInput>;
};

export type AchievementItemParentUpsertWithNestedWhereUniqueInput = {
  AchievementList?: InputMaybe<AchievementListUpsertWithNestedWhereUniqueInput>;
};

export type AchievementItemParentWhereInput = {
  AchievementList?: InputMaybe<AchievementListWhereInput>;
};

export type AchievementItemParentWhereUniqueInput = {
  AchievementList?: InputMaybe<AchievementListWhereUniqueInput>;
};

export type AchievementItemUpdateInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  image?: InputMaybe<Array<Scalars['Json']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AchievementItemUpdateManyInlineInput = {
  /** Create and connect multiple AchievementItem component instances */
  create?: InputMaybe<Array<AchievementItemCreateWithPositionInput>>;
  /** Delete multiple AchievementItem documents */
  delete?: InputMaybe<Array<AchievementItemWhereUniqueInput>>;
  /** Update multiple AchievementItem component instances */
  update?: InputMaybe<Array<AchievementItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple AchievementItem component instances */
  upsert?: InputMaybe<Array<AchievementItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AchievementItemUpdateManyInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  image?: InputMaybe<Array<Scalars['Json']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AchievementItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AchievementItemUpdateManyInput;
  /** Document search */
  where: AchievementItemWhereInput;
};

export type AchievementItemUpdateOneInlineInput = {
  /** Create and connect one AchievementItem document */
  create?: InputMaybe<AchievementItemCreateInput>;
  /** Delete currently connected AchievementItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AchievementItem document */
  update?: InputMaybe<AchievementItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AchievementItem document */
  upsert?: InputMaybe<AchievementItemUpsertWithNestedWhereUniqueInput>;
};

export type AchievementItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<AchievementItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AchievementItemWhereUniqueInput;
};

export type AchievementItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AchievementItemUpdateInput;
  /** Unique document search */
  where: AchievementItemWhereUniqueInput;
};

export type AchievementItemUpsertInput = {
  /** Create document if it didn't exist */
  create: AchievementItemCreateInput;
  /** Update document if it exists */
  update: AchievementItemUpdateInput;
};

export type AchievementItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<AchievementItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AchievementItemWhereUniqueInput;
};

export type AchievementItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AchievementItemUpsertInput;
  /** Unique document search */
  where: AchievementItemWhereUniqueInput;
};

/** Identifies documents */
export type AchievementItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AchievementItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AchievementItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AchievementItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  date_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  date_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  date_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  date_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  date_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  date_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  image_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  image_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References AchievementItem record uniquely */
export type AchievementItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AchievementList = Entity & Node & {
  __typename?: 'AchievementList';
  achievementItem: Array<AchievementItem>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<AchievementList>;
  /** List of AchievementList versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AchievementListAchievementItemArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AchievementItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AchievementItemWhereInput>;
};


export type AchievementListCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AchievementListDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type AchievementListHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type AchievementListPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AchievementListScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AchievementListUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AchievementListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AchievementListWhereUniqueInput;
};

/** A connection to a list of items. */
export type AchievementListConnection = {
  __typename?: 'AchievementListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AchievementListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AchievementListCreateInput = {
  achievementItem?: InputMaybe<AchievementItemCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AchievementListCreateManyInlineInput = {
  /** Connect multiple existing AchievementList documents */
  connect?: InputMaybe<Array<AchievementListWhereUniqueInput>>;
  /** Create and connect multiple existing AchievementList documents */
  create?: InputMaybe<Array<AchievementListCreateInput>>;
};

export type AchievementListCreateOneInlineInput = {
  /** Connect one existing AchievementList document */
  connect?: InputMaybe<AchievementListWhereUniqueInput>;
  /** Create and connect one AchievementList document */
  create?: InputMaybe<AchievementListCreateInput>;
};

/** An edge in a connection. */
export type AchievementListEdge = {
  __typename?: 'AchievementListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AchievementList;
};

/** Identifies documents */
export type AchievementListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AchievementListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AchievementListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AchievementListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  achievementItem_every?: InputMaybe<AchievementItemWhereInput>;
  achievementItem_none?: InputMaybe<AchievementItemWhereInput>;
  achievementItem_some?: InputMaybe<AchievementItemWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AchievementListWhereStageInput>;
  documentInStages_none?: InputMaybe<AchievementListWhereStageInput>;
  documentInStages_some?: InputMaybe<AchievementListWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AchievementListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AchievementListUpdateInput = {
  achievementItem?: InputMaybe<AchievementItemUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AchievementListUpdateManyInlineInput = {
  /** Connect multiple existing AchievementList documents */
  connect?: InputMaybe<Array<AchievementListConnectInput>>;
  /** Create and connect multiple AchievementList documents */
  create?: InputMaybe<Array<AchievementListCreateInput>>;
  /** Delete multiple AchievementList documents */
  delete?: InputMaybe<Array<AchievementListWhereUniqueInput>>;
  /** Disconnect multiple AchievementList documents */
  disconnect?: InputMaybe<Array<AchievementListWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AchievementList documents */
  set?: InputMaybe<Array<AchievementListWhereUniqueInput>>;
  /** Update multiple AchievementList documents */
  update?: InputMaybe<Array<AchievementListUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AchievementList documents */
  upsert?: InputMaybe<Array<AchievementListUpsertWithNestedWhereUniqueInput>>;
};

export type AchievementListUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AchievementListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AchievementListUpdateManyInput;
  /** Document search */
  where: AchievementListWhereInput;
};

export type AchievementListUpdateOneInlineInput = {
  /** Connect existing AchievementList document */
  connect?: InputMaybe<AchievementListWhereUniqueInput>;
  /** Create and connect one AchievementList document */
  create?: InputMaybe<AchievementListCreateInput>;
  /** Delete currently connected AchievementList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected AchievementList document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AchievementList document */
  update?: InputMaybe<AchievementListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AchievementList document */
  upsert?: InputMaybe<AchievementListUpsertWithNestedWhereUniqueInput>;
};

export type AchievementListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AchievementListUpdateInput;
  /** Unique document search */
  where: AchievementListWhereUniqueInput;
};

export type AchievementListUpsertInput = {
  /** Create document if it didn't exist */
  create: AchievementListCreateInput;
  /** Update document if it exists */
  update: AchievementListUpdateInput;
};

export type AchievementListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AchievementListUpsertInput;
  /** Unique document search */
  where: AchievementListWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AchievementListWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AchievementListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AchievementListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AchievementListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AchievementListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  achievementItem_every?: InputMaybe<AchievementItemWhereInput>;
  achievementItem_none?: InputMaybe<AchievementItemWhereInput>;
  achievementItem_some?: InputMaybe<AchievementItemWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AchievementListWhereStageInput>;
  documentInStages_none?: InputMaybe<AchievementListWhereStageInput>;
  documentInStages_some?: InputMaybe<AchievementListWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AchievementListWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AchievementListWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AchievementListWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AchievementListWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AchievementListWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References AchievementList record uniquely */
export type AchievementListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload?: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type CollectionsPage = Entity & Node & {
  __typename?: 'CollectionsPage';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<CollectionsPage>;
  /** List of CollectionsPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CollectionsPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CollectionsPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type CollectionsPageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type CollectionsPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CollectionsPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CollectionsPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CollectionsPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CollectionsPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type CollectionsPageConnection = {
  __typename?: 'CollectionsPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CollectionsPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CollectionsPageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollectionsPageCreateManyInlineInput = {
  /** Connect multiple existing CollectionsPage documents */
  connect?: InputMaybe<Array<CollectionsPageWhereUniqueInput>>;
  /** Create and connect multiple existing CollectionsPage documents */
  create?: InputMaybe<Array<CollectionsPageCreateInput>>;
};

export type CollectionsPageCreateOneInlineInput = {
  /** Connect one existing CollectionsPage document */
  connect?: InputMaybe<CollectionsPageWhereUniqueInput>;
  /** Create and connect one CollectionsPage document */
  create?: InputMaybe<CollectionsPageCreateInput>;
};

/** An edge in a connection. */
export type CollectionsPageEdge = {
  __typename?: 'CollectionsPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CollectionsPage;
};

/** Identifies documents */
export type CollectionsPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionsPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionsPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionsPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CollectionsPageWhereStageInput>;
  documentInStages_none?: InputMaybe<CollectionsPageWhereStageInput>;
  documentInStages_some?: InputMaybe<CollectionsPageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CollectionsPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CollectionsPageUpdateInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionsPageUpdateManyInlineInput = {
  /** Connect multiple existing CollectionsPage documents */
  connect?: InputMaybe<Array<CollectionsPageConnectInput>>;
  /** Create and connect multiple CollectionsPage documents */
  create?: InputMaybe<Array<CollectionsPageCreateInput>>;
  /** Delete multiple CollectionsPage documents */
  delete?: InputMaybe<Array<CollectionsPageWhereUniqueInput>>;
  /** Disconnect multiple CollectionsPage documents */
  disconnect?: InputMaybe<Array<CollectionsPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CollectionsPage documents */
  set?: InputMaybe<Array<CollectionsPageWhereUniqueInput>>;
  /** Update multiple CollectionsPage documents */
  update?: InputMaybe<Array<CollectionsPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CollectionsPage documents */
  upsert?: InputMaybe<Array<CollectionsPageUpsertWithNestedWhereUniqueInput>>;
};

export type CollectionsPageUpdateManyInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionsPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CollectionsPageUpdateManyInput;
  /** Document search */
  where: CollectionsPageWhereInput;
};

export type CollectionsPageUpdateOneInlineInput = {
  /** Connect existing CollectionsPage document */
  connect?: InputMaybe<CollectionsPageWhereUniqueInput>;
  /** Create and connect one CollectionsPage document */
  create?: InputMaybe<CollectionsPageCreateInput>;
  /** Delete currently connected CollectionsPage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected CollectionsPage document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CollectionsPage document */
  update?: InputMaybe<CollectionsPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CollectionsPage document */
  upsert?: InputMaybe<CollectionsPageUpsertWithNestedWhereUniqueInput>;
};

export type CollectionsPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CollectionsPageUpdateInput;
  /** Unique document search */
  where: CollectionsPageWhereUniqueInput;
};

export type CollectionsPageUpsertInput = {
  /** Create document if it didn't exist */
  create: CollectionsPageCreateInput;
  /** Update document if it exists */
  update: CollectionsPageUpdateInput;
};

export type CollectionsPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CollectionsPageUpsertInput;
  /** Unique document search */
  where: CollectionsPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CollectionsPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CollectionsPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionsPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionsPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionsPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CollectionsPageWhereStageInput>;
  documentInStages_none?: InputMaybe<CollectionsPageWhereStageInput>;
  documentInStages_some?: InputMaybe<CollectionsPageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CollectionsPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionsPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionsPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionsPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CollectionsPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References CollectionsPage record uniquely */
export type CollectionsPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactInfo = Entity & Node & {
  __typename?: 'ContactInfo';
  bio?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ContactInfo>;
  email?: Maybe<Scalars['String']['output']>;
  /** List of ContactInfo versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  location?: Maybe<RichText>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ContactInfoCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContactInfoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ContactInfoHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ContactInfoPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContactInfoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ContactInfoUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ContactInfoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactInfoWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactInfoConnection = {
  __typename?: 'ContactInfoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactInfoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactInfoCreateInput = {
  bio?: InputMaybe<Scalars['RichTextAST']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['RichTextAST']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContactInfoCreateManyInlineInput = {
  /** Connect multiple existing ContactInfo documents */
  connect?: InputMaybe<Array<ContactInfoWhereUniqueInput>>;
  /** Create and connect multiple existing ContactInfo documents */
  create?: InputMaybe<Array<ContactInfoCreateInput>>;
};

export type ContactInfoCreateOneInlineInput = {
  /** Connect one existing ContactInfo document */
  connect?: InputMaybe<ContactInfoWhereUniqueInput>;
  /** Create and connect one ContactInfo document */
  create?: InputMaybe<ContactInfoCreateInput>;
};

/** An edge in a connection. */
export type ContactInfoEdge = {
  __typename?: 'ContactInfoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContactInfo;
};

/** Identifies documents */
export type ContactInfoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactInfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactInfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactInfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ContactInfoWhereStageInput>;
  documentInStages_none?: InputMaybe<ContactInfoWhereStageInput>;
  documentInStages_some?: InputMaybe<ContactInfoWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  instagram_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  instagram_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  instagram_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  instagram_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  instagram_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  instagram_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  instagram_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  instagram_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ContactInfoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InstagramAsc = 'instagram_ASC',
  InstagramDesc = 'instagram_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ContactInfoUpdateInput = {
  bio?: InputMaybe<Scalars['RichTextAST']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type ContactInfoUpdateManyInlineInput = {
  /** Connect multiple existing ContactInfo documents */
  connect?: InputMaybe<Array<ContactInfoConnectInput>>;
  /** Create and connect multiple ContactInfo documents */
  create?: InputMaybe<Array<ContactInfoCreateInput>>;
  /** Delete multiple ContactInfo documents */
  delete?: InputMaybe<Array<ContactInfoWhereUniqueInput>>;
  /** Disconnect multiple ContactInfo documents */
  disconnect?: InputMaybe<Array<ContactInfoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContactInfo documents */
  set?: InputMaybe<Array<ContactInfoWhereUniqueInput>>;
  /** Update multiple ContactInfo documents */
  update?: InputMaybe<Array<ContactInfoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContactInfo documents */
  upsert?: InputMaybe<Array<ContactInfoUpsertWithNestedWhereUniqueInput>>;
};

export type ContactInfoUpdateManyInput = {
  bio?: InputMaybe<Scalars['RichTextAST']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type ContactInfoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactInfoUpdateManyInput;
  /** Document search */
  where: ContactInfoWhereInput;
};

export type ContactInfoUpdateOneInlineInput = {
  /** Connect existing ContactInfo document */
  connect?: InputMaybe<ContactInfoWhereUniqueInput>;
  /** Create and connect one ContactInfo document */
  create?: InputMaybe<ContactInfoCreateInput>;
  /** Delete currently connected ContactInfo document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ContactInfo document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContactInfo document */
  update?: InputMaybe<ContactInfoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactInfo document */
  upsert?: InputMaybe<ContactInfoUpsertWithNestedWhereUniqueInput>;
};

export type ContactInfoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactInfoUpdateInput;
  /** Unique document search */
  where: ContactInfoWhereUniqueInput;
};

export type ContactInfoUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactInfoCreateInput;
  /** Update document if it exists */
  update: ContactInfoUpdateInput;
};

export type ContactInfoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactInfoUpsertInput;
  /** Unique document search */
  where: ContactInfoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ContactInfoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ContactInfoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactInfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactInfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactInfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ContactInfoWhereStageInput>;
  documentInStages_none?: InputMaybe<ContactInfoWhereStageInput>;
  documentInStages_some?: InputMaybe<ContactInfoWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  instagram_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  instagram_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  instagram_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  instagram_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  instagram_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  instagram_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  instagram_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  instagram_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ContactInfoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactInfoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactInfoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactInfoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ContactInfoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ContactInfo record uniquely */
export type ContactInfoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum DietaryRestriction {
  DairyFree = 'dairyFree',
  GlutenFree = 'glutenFree',
  NutFree = 'nutFree'
}

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  AboutItem = 'AboutItem',
  AboutUs = 'AboutUs',
  AchievementItem = 'AchievementItem',
  AchievementList = 'AchievementList',
  /** Asset system model */
  Asset = 'Asset',
  CollectionsPage = 'CollectionsPage',
  ContactInfo = 'ContactInfo',
  /** All time favourite list that doesn't update very often */
  FeaturedList = 'FeaturedList',
  Flavour = 'Flavour',
  /** Title, description and slogan for the home page */
  HomePage = 'HomePage',
  MarketItem = 'MarketItem',
  MarketList = 'MarketList',
  Media = 'Media',
  Product = 'Product',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  /** Seasonal collections that updates frequently */
  SeasonalDrop = 'SeasonalDrop',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

/** All time favourite list that doesn't update very often */
export type FeaturedList = Entity & Node & {
  __typename?: 'FeaturedList';
  /** A short description to introduce this collection */
  collectionDescription?: Maybe<RichText>;
  collectionName: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<FeaturedList>;
  /** List of FeaturedList versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  productList: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** All time favourite list that doesn't update very often */
export type FeaturedListCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** All time favourite list that doesn't update very often */
export type FeaturedListDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** All time favourite list that doesn't update very often */
export type FeaturedListHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** All time favourite list that doesn't update very often */
export type FeaturedListProductListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


/** All time favourite list that doesn't update very often */
export type FeaturedListPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** All time favourite list that doesn't update very often */
export type FeaturedListScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** All time favourite list that doesn't update very often */
export type FeaturedListUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FeaturedListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FeaturedListWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeaturedListConnection = {
  __typename?: 'FeaturedListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FeaturedListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FeaturedListCreateInput = {
  collectionDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  collectionName: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  productList?: InputMaybe<ProductCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeaturedListCreateManyInlineInput = {
  /** Connect multiple existing FeaturedList documents */
  connect?: InputMaybe<Array<FeaturedListWhereUniqueInput>>;
  /** Create and connect multiple existing FeaturedList documents */
  create?: InputMaybe<Array<FeaturedListCreateInput>>;
};

export type FeaturedListCreateOneInlineInput = {
  /** Connect one existing FeaturedList document */
  connect?: InputMaybe<FeaturedListWhereUniqueInput>;
  /** Create and connect one FeaturedList document */
  create?: InputMaybe<FeaturedListCreateInput>;
};

/** An edge in a connection. */
export type FeaturedListEdge = {
  __typename?: 'FeaturedListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: FeaturedList;
};

/** Identifies documents */
export type FeaturedListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  collectionName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  collectionName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  collectionName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  collectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  collectionName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  collectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  collectionName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  collectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  collectionName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  collectionName_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FeaturedListWhereStageInput>;
  documentInStages_none?: InputMaybe<FeaturedListWhereStageInput>;
  documentInStages_some?: InputMaybe<FeaturedListWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  productList_every?: InputMaybe<ProductWhereInput>;
  productList_none?: InputMaybe<ProductWhereInput>;
  productList_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FeaturedListOrderByInput {
  CollectionNameAsc = 'collectionName_ASC',
  CollectionNameDesc = 'collectionName_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FeaturedListUpdateInput = {
  collectionDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  collectionName?: InputMaybe<Scalars['String']['input']>;
  productList?: InputMaybe<ProductUpdateManyInlineInput>;
};

export type FeaturedListUpdateManyInlineInput = {
  /** Connect multiple existing FeaturedList documents */
  connect?: InputMaybe<Array<FeaturedListConnectInput>>;
  /** Create and connect multiple FeaturedList documents */
  create?: InputMaybe<Array<FeaturedListCreateInput>>;
  /** Delete multiple FeaturedList documents */
  delete?: InputMaybe<Array<FeaturedListWhereUniqueInput>>;
  /** Disconnect multiple FeaturedList documents */
  disconnect?: InputMaybe<Array<FeaturedListWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FeaturedList documents */
  set?: InputMaybe<Array<FeaturedListWhereUniqueInput>>;
  /** Update multiple FeaturedList documents */
  update?: InputMaybe<Array<FeaturedListUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FeaturedList documents */
  upsert?: InputMaybe<Array<FeaturedListUpsertWithNestedWhereUniqueInput>>;
};

export type FeaturedListUpdateManyInput = {
  collectionDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  collectionName?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturedListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FeaturedListUpdateManyInput;
  /** Document search */
  where: FeaturedListWhereInput;
};

export type FeaturedListUpdateOneInlineInput = {
  /** Connect existing FeaturedList document */
  connect?: InputMaybe<FeaturedListWhereUniqueInput>;
  /** Create and connect one FeaturedList document */
  create?: InputMaybe<FeaturedListCreateInput>;
  /** Delete currently connected FeaturedList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected FeaturedList document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FeaturedList document */
  update?: InputMaybe<FeaturedListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeaturedList document */
  upsert?: InputMaybe<FeaturedListUpsertWithNestedWhereUniqueInput>;
};

export type FeaturedListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FeaturedListUpdateInput;
  /** Unique document search */
  where: FeaturedListWhereUniqueInput;
};

export type FeaturedListUpsertInput = {
  /** Create document if it didn't exist */
  create: FeaturedListCreateInput;
  /** Update document if it exists */
  update: FeaturedListUpdateInput;
};

export type FeaturedListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FeaturedListUpsertInput;
  /** Unique document search */
  where: FeaturedListWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FeaturedListWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type FeaturedListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  collectionName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  collectionName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  collectionName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  collectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  collectionName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  collectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  collectionName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  collectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  collectionName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  collectionName_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FeaturedListWhereStageInput>;
  documentInStages_none?: InputMaybe<FeaturedListWhereStageInput>;
  documentInStages_some?: InputMaybe<FeaturedListWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  productList_every?: InputMaybe<ProductWhereInput>;
  productList_none?: InputMaybe<ProductWhereInput>;
  productList_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FeaturedListWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedListWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedListWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedListWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FeaturedListWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References FeaturedList record uniquely */
export type FeaturedListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Flavour = Entity & {
  __typename?: 'Flavour';
  /** Dietary for this flavour only. If it's the same as the main product, leave this empty */
  dietary?: Maybe<DietaryRestriction>;
  /** If there is no description, it will by default display the full description of the product */
  flavourDescription?: Maybe<RichText>;
  flavourName: Scalars['String']['output'];
  /** If the price doesn't change, leave this empty */
  flavourPrice?: Maybe<RichText>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FlavourConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FlavourWhereUniqueInput;
};

/** A connection to a list of items. */
export type FlavourConnection = {
  __typename?: 'FlavourConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FlavourEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FlavourCreateInput = {
  dietary?: InputMaybe<DietaryRestriction>;
  flavourDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  flavourName: Scalars['String']['input'];
  flavourPrice?: InputMaybe<Scalars['RichTextAST']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FlavourCreateManyInlineInput = {
  /** Create and connect multiple existing Flavour documents */
  create?: InputMaybe<Array<FlavourCreateInput>>;
};

export type FlavourCreateOneInlineInput = {
  /** Create and connect one Flavour document */
  create?: InputMaybe<FlavourCreateInput>;
};

export type FlavourCreateWithPositionInput = {
  /** Document to create */
  data: FlavourCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FlavourEdge = {
  __typename?: 'FlavourEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Flavour;
};

/** Identifies documents */
export type FlavourManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FlavourWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FlavourWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FlavourWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  dietary?: InputMaybe<DietaryRestriction>;
  /** All values that are contained in given list. */
  dietary_in?: InputMaybe<Array<InputMaybe<DietaryRestriction>>>;
  /** Any other value that exists and is not equal to the given value. */
  dietary_not?: InputMaybe<DietaryRestriction>;
  /** All values that are not contained in given list. */
  dietary_not_in?: InputMaybe<Array<InputMaybe<DietaryRestriction>>>;
  flavourName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  flavourName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  flavourName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  flavourName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  flavourName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  flavourName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  flavourName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  flavourName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  flavourName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  flavourName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum FlavourOrderByInput {
  DietaryAsc = 'dietary_ASC',
  DietaryDesc = 'dietary_DESC',
  FlavourNameAsc = 'flavourName_ASC',
  FlavourNameDesc = 'flavourName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FlavourParent = Product;

export type FlavourParentConnectInput = {
  Product?: InputMaybe<ProductConnectInput>;
};

export type FlavourParentCreateInput = {
  Product?: InputMaybe<ProductCreateInput>;
};

export type FlavourParentCreateManyInlineInput = {
  /** Create and connect multiple existing FlavourParent documents */
  create?: InputMaybe<Array<FlavourParentCreateInput>>;
};

export type FlavourParentCreateOneInlineInput = {
  /** Create and connect one FlavourParent document */
  create?: InputMaybe<FlavourParentCreateInput>;
};

export type FlavourParentCreateWithPositionInput = {
  Product?: InputMaybe<ProductCreateWithPositionInput>;
};

export type FlavourParentUpdateInput = {
  Product?: InputMaybe<ProductUpdateInput>;
};

export type FlavourParentUpdateManyInlineInput = {
  /** Create and connect multiple FlavourParent component instances */
  create?: InputMaybe<Array<FlavourParentCreateWithPositionInput>>;
  /** Delete multiple FlavourParent documents */
  delete?: InputMaybe<Array<FlavourParentWhereUniqueInput>>;
  /** Update multiple FlavourParent component instances */
  update?: InputMaybe<Array<FlavourParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FlavourParent component instances */
  upsert?: InputMaybe<Array<FlavourParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FlavourParentUpdateManyWithNestedWhereInput = {
  Product?: InputMaybe<ProductUpdateManyWithNestedWhereInput>;
};

export type FlavourParentUpdateOneInlineInput = {
  /** Create and connect one FlavourParent document */
  create?: InputMaybe<FlavourParentCreateInput>;
  /** Delete currently connected FlavourParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FlavourParent document */
  update?: InputMaybe<FlavourParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FlavourParent document */
  upsert?: InputMaybe<FlavourParentUpsertWithNestedWhereUniqueInput>;
};

export type FlavourParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Product?: InputMaybe<ProductUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type FlavourParentUpdateWithNestedWhereUniqueInput = {
  Product?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
};

export type FlavourParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Product?: InputMaybe<ProductUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type FlavourParentUpsertWithNestedWhereUniqueInput = {
  Product?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type FlavourParentWhereInput = {
  Product?: InputMaybe<ProductWhereInput>;
};

export type FlavourParentWhereUniqueInput = {
  Product?: InputMaybe<ProductWhereUniqueInput>;
};

export type FlavourUpdateInput = {
  dietary?: InputMaybe<DietaryRestriction>;
  flavourDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  flavourName?: InputMaybe<Scalars['String']['input']>;
  flavourPrice?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type FlavourUpdateManyInlineInput = {
  /** Create and connect multiple Flavour component instances */
  create?: InputMaybe<Array<FlavourCreateWithPositionInput>>;
  /** Delete multiple Flavour documents */
  delete?: InputMaybe<Array<FlavourWhereUniqueInput>>;
  /** Update multiple Flavour component instances */
  update?: InputMaybe<Array<FlavourUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Flavour component instances */
  upsert?: InputMaybe<Array<FlavourUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FlavourUpdateManyInput = {
  dietary?: InputMaybe<DietaryRestriction>;
  flavourDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  flavourName?: InputMaybe<Scalars['String']['input']>;
  flavourPrice?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type FlavourUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FlavourUpdateManyInput;
  /** Document search */
  where: FlavourWhereInput;
};

export type FlavourUpdateOneInlineInput = {
  /** Create and connect one Flavour document */
  create?: InputMaybe<FlavourCreateInput>;
  /** Delete currently connected Flavour document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Flavour document */
  update?: InputMaybe<FlavourUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Flavour document */
  upsert?: InputMaybe<FlavourUpsertWithNestedWhereUniqueInput>;
};

export type FlavourUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FlavourUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FlavourWhereUniqueInput;
};

export type FlavourUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FlavourUpdateInput;
  /** Unique document search */
  where: FlavourWhereUniqueInput;
};

export type FlavourUpsertInput = {
  /** Create document if it didn't exist */
  create: FlavourCreateInput;
  /** Update document if it exists */
  update: FlavourUpdateInput;
};

export type FlavourUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FlavourUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FlavourWhereUniqueInput;
};

export type FlavourUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FlavourUpsertInput;
  /** Unique document search */
  where: FlavourWhereUniqueInput;
};

/** Identifies documents */
export type FlavourWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FlavourWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FlavourWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FlavourWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  dietary?: InputMaybe<DietaryRestriction>;
  /** All values that are contained in given list. */
  dietary_in?: InputMaybe<Array<InputMaybe<DietaryRestriction>>>;
  /** Any other value that exists and is not equal to the given value. */
  dietary_not?: InputMaybe<DietaryRestriction>;
  /** All values that are not contained in given list. */
  dietary_not_in?: InputMaybe<Array<InputMaybe<DietaryRestriction>>>;
  flavourName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  flavourName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  flavourName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  flavourName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  flavourName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  flavourName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  flavourName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  flavourName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  flavourName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  flavourName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References Flavour record uniquely */
export type FlavourWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Title, description and slogan for the home page */
export type HomePage = Entity & Node & {
  __typename?: 'HomePage';
  /** Announcements and upcoming events/markets can be shown here */
  announcement: Array<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<HomePage>;
  /** List of HomePage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The slogan that shows on the home page */
  slogan: RichText;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  welcome: Scalars['String']['output'];
};


/** Title, description and slogan for the home page */
export type HomePageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Title, description and slogan for the home page */
export type HomePageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Title, description and slogan for the home page */
export type HomePageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Title, description and slogan for the home page */
export type HomePagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Title, description and slogan for the home page */
export type HomePageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Title, description and slogan for the home page */
export type HomePageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type HomePageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HomePageWhereUniqueInput;
};

/** A connection to a list of items. */
export type HomePageConnection = {
  __typename?: 'HomePageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HomePageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HomePageCreateInput = {
  announcement?: InputMaybe<Array<Scalars['RichTextAST']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  slogan: Scalars['RichTextAST']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  welcome: Scalars['String']['input'];
};

export type HomePageCreateManyInlineInput = {
  /** Connect multiple existing HomePage documents */
  connect?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Create and connect multiple existing HomePage documents */
  create?: InputMaybe<Array<HomePageCreateInput>>;
};

export type HomePageCreateOneInlineInput = {
  /** Connect one existing HomePage document */
  connect?: InputMaybe<HomePageWhereUniqueInput>;
  /** Create and connect one HomePage document */
  create?: InputMaybe<HomePageCreateInput>;
};

/** An edge in a connection. */
export type HomePageEdge = {
  __typename?: 'HomePageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: HomePage;
};

/** Identifies documents */
export type HomePageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomePageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_none?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_some?: InputMaybe<HomePageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  welcome?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  welcome_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  welcome_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  welcome_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  welcome_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  welcome_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  welcome_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  welcome_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  welcome_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  welcome_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum HomePageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WelcomeAsc = 'welcome_ASC',
  WelcomeDesc = 'welcome_DESC'
}

export type HomePageUpdateInput = {
  announcement?: InputMaybe<Array<Scalars['RichTextAST']['input']>>;
  slogan?: InputMaybe<Scalars['RichTextAST']['input']>;
  welcome?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageUpdateManyInlineInput = {
  /** Connect multiple existing HomePage documents */
  connect?: InputMaybe<Array<HomePageConnectInput>>;
  /** Create and connect multiple HomePage documents */
  create?: InputMaybe<Array<HomePageCreateInput>>;
  /** Delete multiple HomePage documents */
  delete?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Disconnect multiple HomePage documents */
  disconnect?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HomePage documents */
  set?: InputMaybe<Array<HomePageWhereUniqueInput>>;
  /** Update multiple HomePage documents */
  update?: InputMaybe<Array<HomePageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HomePage documents */
  upsert?: InputMaybe<Array<HomePageUpsertWithNestedWhereUniqueInput>>;
};

export type HomePageUpdateManyInput = {
  announcement?: InputMaybe<Array<Scalars['RichTextAST']['input']>>;
  slogan?: InputMaybe<Scalars['RichTextAST']['input']>;
  welcome?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HomePageUpdateManyInput;
  /** Document search */
  where: HomePageWhereInput;
};

export type HomePageUpdateOneInlineInput = {
  /** Connect existing HomePage document */
  connect?: InputMaybe<HomePageWhereUniqueInput>;
  /** Create and connect one HomePage document */
  create?: InputMaybe<HomePageCreateInput>;
  /** Delete currently connected HomePage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HomePage document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HomePage document */
  update?: InputMaybe<HomePageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HomePage document */
  upsert?: InputMaybe<HomePageUpsertWithNestedWhereUniqueInput>;
};

export type HomePageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HomePageUpdateInput;
  /** Unique document search */
  where: HomePageWhereUniqueInput;
};

export type HomePageUpsertInput = {
  /** Create document if it didn't exist */
  create: HomePageCreateInput;
  /** Update document if it exists */
  update: HomePageUpdateInput;
};

export type HomePageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HomePageUpsertInput;
  /** Unique document search */
  where: HomePageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type HomePageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type HomePageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomePageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomePageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_none?: InputMaybe<HomePageWhereStageInput>;
  documentInStages_some?: InputMaybe<HomePageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  welcome?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  welcome_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  welcome_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  welcome_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  welcome_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  welcome_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  welcome_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  welcome_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  welcome_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  welcome_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type HomePageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomePageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomePageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomePageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<HomePageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References HomePage record uniquely */
export type HomePageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type MarketItem = Entity & {
  __typename?: 'MarketItem';
  /** Optional description for any upcoming or past markets */
  description?: Maybe<RichText>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** It can be the name of the market or event. If it doesn't have a name for the market then put the street address here. Otherwise, put the street address in the next field. */
  location: Scalars['String']['output'];
  marketDate: Scalars['Date']['output'];
  /** For past markets, add photos if you have any */
  photos?: Maybe<Media>;
  /** System stage field */
  stage: Stage;
  streetAddress?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['String']['output']>;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MarketItemPhotosArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type MarketItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MarketItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type MarketItemConnection = {
  __typename?: 'MarketItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MarketItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MarketItemCreateInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  location: Scalars['String']['input'];
  marketDate: Scalars['Date']['input'];
  photos?: InputMaybe<MediaCreateOneInlineInput>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MarketItemCreateManyInlineInput = {
  /** Create and connect multiple existing MarketItem documents */
  create?: InputMaybe<Array<MarketItemCreateInput>>;
};

export type MarketItemCreateOneInlineInput = {
  /** Create and connect one MarketItem document */
  create?: InputMaybe<MarketItemCreateInput>;
};

export type MarketItemCreateWithPositionInput = {
  /** Document to create */
  data: MarketItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type MarketItemEdge = {
  __typename?: 'MarketItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MarketItem;
};

/** Identifies documents */
export type MarketItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MarketItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MarketItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MarketItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  marketDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  marketDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  marketDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  marketDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  marketDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  marketDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  marketDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  photos?: InputMaybe<MediaWhereInput>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  streetAddress_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  streetAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  streetAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  streetAddress_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  streetAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  streetAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  streetAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  streetAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  streetAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  time_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  time_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  time_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  time_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  time_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  time_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  time_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  time_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  time_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum MarketItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  MarketDateAsc = 'marketDate_ASC',
  MarketDateDesc = 'marketDate_DESC',
  StreetAddressAsc = 'streetAddress_ASC',
  StreetAddressDesc = 'streetAddress_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MarketItemParent = MarketList;

export type MarketItemParentConnectInput = {
  MarketList?: InputMaybe<MarketListConnectInput>;
};

export type MarketItemParentCreateInput = {
  MarketList?: InputMaybe<MarketListCreateInput>;
};

export type MarketItemParentCreateManyInlineInput = {
  /** Connect multiple existing MarketItemParent documents */
  connect?: InputMaybe<Array<MarketItemParentWhereUniqueInput>>;
  /** Create and connect multiple existing MarketItemParent documents */
  create?: InputMaybe<Array<MarketItemParentCreateInput>>;
};

export type MarketItemParentCreateOneInlineInput = {
  /** Connect one existing MarketItemParent document */
  connect?: InputMaybe<MarketItemParentWhereUniqueInput>;
  /** Create and connect one MarketItemParent document */
  create?: InputMaybe<MarketItemParentCreateInput>;
};

export type MarketItemParentUpdateInput = {
  MarketList?: InputMaybe<MarketListUpdateInput>;
};

export type MarketItemParentUpdateManyInlineInput = {
  /** Connect multiple existing MarketItemParent documents */
  connect?: InputMaybe<Array<MarketItemParentConnectInput>>;
  /** Create and connect multiple MarketItemParent documents */
  create?: InputMaybe<Array<MarketItemParentCreateInput>>;
  /** Delete multiple MarketItemParent documents */
  delete?: InputMaybe<Array<MarketItemParentWhereUniqueInput>>;
  /** Disconnect multiple MarketItemParent documents */
  disconnect?: InputMaybe<Array<MarketItemParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing MarketItemParent documents */
  set?: InputMaybe<Array<MarketItemParentWhereUniqueInput>>;
  /** Update multiple MarketItemParent documents */
  update?: InputMaybe<Array<MarketItemParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MarketItemParent documents */
  upsert?: InputMaybe<Array<MarketItemParentUpsertWithNestedWhereUniqueInput>>;
};

export type MarketItemParentUpdateManyWithNestedWhereInput = {
  MarketList?: InputMaybe<MarketListUpdateManyWithNestedWhereInput>;
};

export type MarketItemParentUpdateOneInlineInput = {
  /** Connect existing MarketItemParent document */
  connect?: InputMaybe<MarketItemParentWhereUniqueInput>;
  /** Create and connect one MarketItemParent document */
  create?: InputMaybe<MarketItemParentCreateInput>;
  /** Delete currently connected MarketItemParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected MarketItemParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single MarketItemParent document */
  update?: InputMaybe<MarketItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MarketItemParent document */
  upsert?: InputMaybe<MarketItemParentUpsertWithNestedWhereUniqueInput>;
};

export type MarketItemParentUpdateWithNestedWhereUniqueInput = {
  MarketList?: InputMaybe<MarketListUpdateWithNestedWhereUniqueInput>;
};

export type MarketItemParentUpsertWithNestedWhereUniqueInput = {
  MarketList?: InputMaybe<MarketListUpsertWithNestedWhereUniqueInput>;
};

export type MarketItemParentWhereInput = {
  MarketList?: InputMaybe<MarketListWhereInput>;
};

export type MarketItemParentWhereUniqueInput = {
  MarketList?: InputMaybe<MarketListWhereUniqueInput>;
};

export type MarketItemUpdateInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  marketDate?: InputMaybe<Scalars['Date']['input']>;
  photos?: InputMaybe<MediaUpdateOneInlineInput>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
};

export type MarketItemUpdateManyInlineInput = {
  /** Create and connect multiple MarketItem component instances */
  create?: InputMaybe<Array<MarketItemCreateWithPositionInput>>;
  /** Delete multiple MarketItem documents */
  delete?: InputMaybe<Array<MarketItemWhereUniqueInput>>;
  /** Update multiple MarketItem component instances */
  update?: InputMaybe<Array<MarketItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple MarketItem component instances */
  upsert?: InputMaybe<Array<MarketItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type MarketItemUpdateManyInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  marketDate?: InputMaybe<Scalars['Date']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
};

export type MarketItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MarketItemUpdateManyInput;
  /** Document search */
  where: MarketItemWhereInput;
};

export type MarketItemUpdateOneInlineInput = {
  /** Create and connect one MarketItem document */
  create?: InputMaybe<MarketItemCreateInput>;
  /** Delete currently connected MarketItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single MarketItem document */
  update?: InputMaybe<MarketItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MarketItem document */
  upsert?: InputMaybe<MarketItemUpsertWithNestedWhereUniqueInput>;
};

export type MarketItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MarketItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MarketItemWhereUniqueInput;
};

export type MarketItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MarketItemUpdateInput;
  /** Unique document search */
  where: MarketItemWhereUniqueInput;
};

export type MarketItemUpsertInput = {
  /** Create document if it didn't exist */
  create: MarketItemCreateInput;
  /** Update document if it exists */
  update: MarketItemUpdateInput;
};

export type MarketItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MarketItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MarketItemWhereUniqueInput;
};

export type MarketItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MarketItemUpsertInput;
  /** Unique document search */
  where: MarketItemWhereUniqueInput;
};

/** Identifies documents */
export type MarketItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MarketItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MarketItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MarketItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  marketDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  marketDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  marketDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  marketDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  marketDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  marketDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  marketDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  marketDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  photos?: InputMaybe<MediaWhereInput>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  streetAddress_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  streetAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  streetAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  streetAddress_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  streetAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  streetAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  streetAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  streetAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  streetAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  time_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  time_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  time_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  time_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  time_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  time_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  time_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  time_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  time_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References MarketItem record uniquely */
export type MarketItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MarketList = Entity & Node & {
  __typename?: 'MarketList';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<MarketList>;
  /** List of MarketList versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  marketItem: Array<MarketItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type MarketListCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type MarketListDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type MarketListHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type MarketListMarketItemArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<MarketItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MarketItemWhereInput>;
};


export type MarketListPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type MarketListScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type MarketListUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type MarketListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MarketListWhereUniqueInput;
};

/** A connection to a list of items. */
export type MarketListConnection = {
  __typename?: 'MarketListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MarketListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MarketListCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  marketItem?: InputMaybe<MarketItemCreateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MarketListCreateManyInlineInput = {
  /** Connect multiple existing MarketList documents */
  connect?: InputMaybe<Array<MarketListWhereUniqueInput>>;
  /** Create and connect multiple existing MarketList documents */
  create?: InputMaybe<Array<MarketListCreateInput>>;
};

export type MarketListCreateOneInlineInput = {
  /** Connect one existing MarketList document */
  connect?: InputMaybe<MarketListWhereUniqueInput>;
  /** Create and connect one MarketList document */
  create?: InputMaybe<MarketListCreateInput>;
};

/** An edge in a connection. */
export type MarketListEdge = {
  __typename?: 'MarketListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MarketList;
};

/** Identifies documents */
export type MarketListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MarketListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MarketListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MarketListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<MarketListWhereStageInput>;
  documentInStages_none?: InputMaybe<MarketListWhereStageInput>;
  documentInStages_some?: InputMaybe<MarketListWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  marketItem_every?: InputMaybe<MarketItemWhereInput>;
  marketItem_none?: InputMaybe<MarketItemWhereInput>;
  marketItem_some?: InputMaybe<MarketItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum MarketListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MarketListUpdateInput = {
  marketItem?: InputMaybe<MarketItemUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MarketListUpdateManyInlineInput = {
  /** Connect multiple existing MarketList documents */
  connect?: InputMaybe<Array<MarketListConnectInput>>;
  /** Create and connect multiple MarketList documents */
  create?: InputMaybe<Array<MarketListCreateInput>>;
  /** Delete multiple MarketList documents */
  delete?: InputMaybe<Array<MarketListWhereUniqueInput>>;
  /** Disconnect multiple MarketList documents */
  disconnect?: InputMaybe<Array<MarketListWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing MarketList documents */
  set?: InputMaybe<Array<MarketListWhereUniqueInput>>;
  /** Update multiple MarketList documents */
  update?: InputMaybe<Array<MarketListUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MarketList documents */
  upsert?: InputMaybe<Array<MarketListUpsertWithNestedWhereUniqueInput>>;
};

export type MarketListUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MarketListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MarketListUpdateManyInput;
  /** Document search */
  where: MarketListWhereInput;
};

export type MarketListUpdateOneInlineInput = {
  /** Connect existing MarketList document */
  connect?: InputMaybe<MarketListWhereUniqueInput>;
  /** Create and connect one MarketList document */
  create?: InputMaybe<MarketListCreateInput>;
  /** Delete currently connected MarketList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected MarketList document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single MarketList document */
  update?: InputMaybe<MarketListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MarketList document */
  upsert?: InputMaybe<MarketListUpsertWithNestedWhereUniqueInput>;
};

export type MarketListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MarketListUpdateInput;
  /** Unique document search */
  where: MarketListWhereUniqueInput;
};

export type MarketListUpsertInput = {
  /** Create document if it didn't exist */
  create: MarketListCreateInput;
  /** Update document if it exists */
  update: MarketListUpdateInput;
};

export type MarketListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MarketListUpsertInput;
  /** Unique document search */
  where: MarketListWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type MarketListWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type MarketListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MarketListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MarketListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MarketListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<MarketListWhereStageInput>;
  documentInStages_none?: InputMaybe<MarketListWhereStageInput>;
  documentInStages_some?: InputMaybe<MarketListWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  marketItem_every?: InputMaybe<MarketItemWhereInput>;
  marketItem_none?: InputMaybe<MarketItemWhereInput>;
  marketItem_some?: InputMaybe<MarketItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type MarketListWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MarketListWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MarketListWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MarketListWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<MarketListWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References MarketList record uniquely */
export type MarketListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Media = Entity & {
  __typename?: 'Media';
  captionAltText?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Scalars['Json']['output'];
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MediaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MediaWhereUniqueInput;
};

/** A connection to a list of items. */
export type MediaConnection = {
  __typename?: 'MediaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MediaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MediaCreateInput = {
  captionAltText?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['Json']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MediaCreateManyInlineInput = {
  /** Create and connect multiple existing Media documents */
  create?: InputMaybe<Array<MediaCreateInput>>;
};

export type MediaCreateOneInlineInput = {
  /** Create and connect one Media document */
  create?: InputMaybe<MediaCreateInput>;
};

export type MediaCreateWithPositionInput = {
  /** Document to create */
  data: MediaCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type MediaEdge = {
  __typename?: 'MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Media;
};

/** Identifies documents */
export type MediaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MediaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MediaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MediaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  captionAltText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  captionAltText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  captionAltText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  captionAltText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  captionAltText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  captionAltText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  captionAltText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  captionAltText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  captionAltText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  captionAltText_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  image_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  image_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum MediaOrderByInput {
  CaptionAltTextAsc = 'captionAltText_ASC',
  CaptionAltTextDesc = 'captionAltText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MediaParent = AboutItem | MarketItem;

export type MediaParentConnectInput = {
  AboutItem?: InputMaybe<AboutItemConnectInput>;
  MarketItem?: InputMaybe<MarketItemConnectInput>;
};

export type MediaParentCreateInput = {
  AboutItem?: InputMaybe<AboutItemCreateInput>;
  MarketItem?: InputMaybe<MarketItemCreateInput>;
};

export type MediaParentCreateManyInlineInput = {
  /** Create and connect multiple existing MediaParent documents */
  create?: InputMaybe<Array<MediaParentCreateInput>>;
};

export type MediaParentCreateOneInlineInput = {
  /** Create and connect one MediaParent document */
  create?: InputMaybe<MediaParentCreateInput>;
};

export type MediaParentCreateWithPositionInput = {
  AboutItem?: InputMaybe<AboutItemCreateWithPositionInput>;
  MarketItem?: InputMaybe<MarketItemCreateWithPositionInput>;
};

export type MediaParentUpdateInput = {
  AboutItem?: InputMaybe<AboutItemUpdateInput>;
  MarketItem?: InputMaybe<MarketItemUpdateInput>;
};

export type MediaParentUpdateManyInlineInput = {
  /** Create and connect multiple MediaParent component instances */
  create?: InputMaybe<Array<MediaParentCreateWithPositionInput>>;
  /** Delete multiple MediaParent documents */
  delete?: InputMaybe<Array<MediaParentWhereUniqueInput>>;
  /** Update multiple MediaParent component instances */
  update?: InputMaybe<Array<MediaParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple MediaParent component instances */
  upsert?: InputMaybe<Array<MediaParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type MediaParentUpdateManyWithNestedWhereInput = {
  AboutItem?: InputMaybe<AboutItemUpdateManyWithNestedWhereInput>;
  MarketItem?: InputMaybe<MarketItemUpdateManyWithNestedWhereInput>;
};

export type MediaParentUpdateOneInlineInput = {
  /** Create and connect one MediaParent document */
  create?: InputMaybe<MediaParentCreateInput>;
  /** Delete currently connected MediaParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single MediaParent document */
  update?: InputMaybe<MediaParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MediaParent document */
  upsert?: InputMaybe<MediaParentUpsertWithNestedWhereUniqueInput>;
};

export type MediaParentUpdateWithNestedWhereUniqueAndPositionInput = {
  AboutItem?: InputMaybe<AboutItemUpdateWithNestedWhereUniqueAndPositionInput>;
  MarketItem?: InputMaybe<MarketItemUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type MediaParentUpdateWithNestedWhereUniqueInput = {
  AboutItem?: InputMaybe<AboutItemUpdateWithNestedWhereUniqueInput>;
  MarketItem?: InputMaybe<MarketItemUpdateWithNestedWhereUniqueInput>;
};

export type MediaParentUpsertWithNestedWhereUniqueAndPositionInput = {
  AboutItem?: InputMaybe<AboutItemUpsertWithNestedWhereUniqueAndPositionInput>;
  MarketItem?: InputMaybe<MarketItemUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type MediaParentUpsertWithNestedWhereUniqueInput = {
  AboutItem?: InputMaybe<AboutItemUpsertWithNestedWhereUniqueInput>;
  MarketItem?: InputMaybe<MarketItemUpsertWithNestedWhereUniqueInput>;
};

export type MediaParentWhereInput = {
  AboutItem?: InputMaybe<AboutItemWhereInput>;
  MarketItem?: InputMaybe<MarketItemWhereInput>;
};

export type MediaParentWhereUniqueInput = {
  AboutItem?: InputMaybe<AboutItemWhereUniqueInput>;
  MarketItem?: InputMaybe<MarketItemWhereUniqueInput>;
};

export type MediaUpdateInput = {
  captionAltText?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
};

export type MediaUpdateManyInlineInput = {
  /** Create and connect multiple Media component instances */
  create?: InputMaybe<Array<MediaCreateWithPositionInput>>;
  /** Delete multiple Media documents */
  delete?: InputMaybe<Array<MediaWhereUniqueInput>>;
  /** Update multiple Media component instances */
  update?: InputMaybe<Array<MediaUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Media component instances */
  upsert?: InputMaybe<Array<MediaUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type MediaUpdateManyInput = {
  captionAltText?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
};

export type MediaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MediaUpdateManyInput;
  /** Document search */
  where: MediaWhereInput;
};

export type MediaUpdateOneInlineInput = {
  /** Create and connect one Media document */
  create?: InputMaybe<MediaCreateInput>;
  /** Delete currently connected Media document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Media document */
  update?: InputMaybe<MediaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Media document */
  upsert?: InputMaybe<MediaUpsertWithNestedWhereUniqueInput>;
};

export type MediaUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MediaUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MediaWhereUniqueInput;
};

export type MediaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MediaUpdateInput;
  /** Unique document search */
  where: MediaWhereUniqueInput;
};

export type MediaUpsertInput = {
  /** Create document if it didn't exist */
  create: MediaCreateInput;
  /** Update document if it exists */
  update: MediaUpdateInput;
};

export type MediaUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MediaUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MediaWhereUniqueInput;
};

export type MediaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MediaUpsertInput;
  /** Unique document search */
  where: MediaWhereUniqueInput;
};

/** Identifies documents */
export type MediaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MediaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MediaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MediaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  captionAltText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  captionAltText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  captionAltText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  captionAltText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  captionAltText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  captionAltText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  captionAltText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  captionAltText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  captionAltText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  captionAltText_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  image_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  image_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References Media record uniquely */
export type MediaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one aboutUs */
  createAboutUs?: Maybe<AboutUs>;
  /** Create one achievementList */
  createAchievementList?: Maybe<AchievementList>;
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>;
  /** Create one collectionsPage */
  createCollectionsPage?: Maybe<CollectionsPage>;
  /** Create one contactInfo */
  createContactInfo?: Maybe<ContactInfo>;
  /** Create one featuredList */
  createFeaturedList?: Maybe<FeaturedList>;
  /** Create one homePage */
  createHomePage?: Maybe<HomePage>;
  /** Create one marketList */
  createMarketList?: Maybe<MarketList>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one seasonalDrop */
  createSeasonalDrop?: Maybe<SeasonalDrop>;
  /** Delete one aboutUs from _all_ existing stages. Returns deleted document. */
  deleteAboutUs?: Maybe<AboutUs>;
  /** Delete one achievementList from _all_ existing stages. Returns deleted document. */
  deleteAchievementList?: Maybe<AchievementList>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one collectionsPage from _all_ existing stages. Returns deleted document. */
  deleteCollectionsPage?: Maybe<CollectionsPage>;
  /** Delete one contactInfo from _all_ existing stages. Returns deleted document. */
  deleteContactInfo?: Maybe<ContactInfo>;
  /** Delete one featuredList from _all_ existing stages. Returns deleted document. */
  deleteFeaturedList?: Maybe<FeaturedList>;
  /** Delete one homePage from _all_ existing stages. Returns deleted document. */
  deleteHomePage?: Maybe<HomePage>;
  /**
   * Delete many AboutUs documents
   * @deprecated Please use the new paginated many mutation (deleteManyAboutUsesConnection)
   */
  deleteManyAboutUses: BatchPayload;
  /** Delete many AboutUs documents, return deleted documents */
  deleteManyAboutUsesConnection: AboutUsConnection;
  /**
   * Delete many AchievementList documents
   * @deprecated Please use the new paginated many mutation (deleteManyAchievementListsConnection)
   */
  deleteManyAchievementLists: BatchPayload;
  /** Delete many AchievementList documents, return deleted documents */
  deleteManyAchievementListsConnection: AchievementListConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many CollectionsPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyCollectionsPagesConnection)
   */
  deleteManyCollectionsPages: BatchPayload;
  /** Delete many CollectionsPage documents, return deleted documents */
  deleteManyCollectionsPagesConnection: CollectionsPageConnection;
  /**
   * Delete many ContactInfo documents
   * @deprecated Please use the new paginated many mutation (deleteManyContactInfosConnection)
   */
  deleteManyContactInfos: BatchPayload;
  /** Delete many ContactInfo documents, return deleted documents */
  deleteManyContactInfosConnection: ContactInfoConnection;
  /**
   * Delete many FeaturedList documents
   * @deprecated Please use the new paginated many mutation (deleteManyFeaturedListsConnection)
   */
  deleteManyFeaturedLists: BatchPayload;
  /** Delete many FeaturedList documents, return deleted documents */
  deleteManyFeaturedListsConnection: FeaturedListConnection;
  /**
   * Delete many HomePage documents
   * @deprecated Please use the new paginated many mutation (deleteManyHomePagesConnection)
   */
  deleteManyHomePages: BatchPayload;
  /** Delete many HomePage documents, return deleted documents */
  deleteManyHomePagesConnection: HomePageConnection;
  /**
   * Delete many MarketList documents
   * @deprecated Please use the new paginated many mutation (deleteManyMarketListsConnection)
   */
  deleteManyMarketLists: BatchPayload;
  /** Delete many MarketList documents, return deleted documents */
  deleteManyMarketListsConnection: MarketListConnection;
  /**
   * Delete many SeasonalDrop documents
   * @deprecated Please use the new paginated many mutation (deleteManySeasonalDropsConnection)
   */
  deleteManySeasonalDrops: BatchPayload;
  /** Delete many SeasonalDrop documents, return deleted documents */
  deleteManySeasonalDropsConnection: SeasonalDropConnection;
  /** Delete one marketList from _all_ existing stages. Returns deleted document. */
  deleteMarketList?: Maybe<MarketList>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one seasonalDrop from _all_ existing stages. Returns deleted document. */
  deleteSeasonalDrop?: Maybe<SeasonalDrop>;
  /** Publish one aboutUs */
  publishAboutUs?: Maybe<AboutUs>;
  /** Publish one achievementList */
  publishAchievementList?: Maybe<AchievementList>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one collectionsPage */
  publishCollectionsPage?: Maybe<CollectionsPage>;
  /** Publish one contactInfo */
  publishContactInfo?: Maybe<ContactInfo>;
  /** Publish one featuredList */
  publishFeaturedList?: Maybe<FeaturedList>;
  /** Publish one homePage */
  publishHomePage?: Maybe<HomePage>;
  /**
   * Publish many AboutUs documents
   * @deprecated Please use the new paginated many mutation (publishManyAboutUsesConnection)
   */
  publishManyAboutUses: BatchPayload;
  /** Publish many AboutUs documents */
  publishManyAboutUsesConnection: AboutUsConnection;
  /**
   * Publish many AchievementList documents
   * @deprecated Please use the new paginated many mutation (publishManyAchievementListsConnection)
   */
  publishManyAchievementLists: BatchPayload;
  /** Publish many AchievementList documents */
  publishManyAchievementListsConnection: AchievementListConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many CollectionsPage documents
   * @deprecated Please use the new paginated many mutation (publishManyCollectionsPagesConnection)
   */
  publishManyCollectionsPages: BatchPayload;
  /** Publish many CollectionsPage documents */
  publishManyCollectionsPagesConnection: CollectionsPageConnection;
  /**
   * Publish many ContactInfo documents
   * @deprecated Please use the new paginated many mutation (publishManyContactInfosConnection)
   */
  publishManyContactInfos: BatchPayload;
  /** Publish many ContactInfo documents */
  publishManyContactInfosConnection: ContactInfoConnection;
  /**
   * Publish many FeaturedList documents
   * @deprecated Please use the new paginated many mutation (publishManyFeaturedListsConnection)
   */
  publishManyFeaturedLists: BatchPayload;
  /** Publish many FeaturedList documents */
  publishManyFeaturedListsConnection: FeaturedListConnection;
  /**
   * Publish many HomePage documents
   * @deprecated Please use the new paginated many mutation (publishManyHomePagesConnection)
   */
  publishManyHomePages: BatchPayload;
  /** Publish many HomePage documents */
  publishManyHomePagesConnection: HomePageConnection;
  /**
   * Publish many MarketList documents
   * @deprecated Please use the new paginated many mutation (publishManyMarketListsConnection)
   */
  publishManyMarketLists: BatchPayload;
  /** Publish many MarketList documents */
  publishManyMarketListsConnection: MarketListConnection;
  /**
   * Publish many SeasonalDrop documents
   * @deprecated Please use the new paginated many mutation (publishManySeasonalDropsConnection)
   */
  publishManySeasonalDrops: BatchPayload;
  /** Publish many SeasonalDrop documents */
  publishManySeasonalDropsConnection: SeasonalDropConnection;
  /** Publish one marketList */
  publishMarketList?: Maybe<MarketList>;
  /** Publish one seasonalDrop */
  publishSeasonalDrop?: Maybe<SeasonalDrop>;
  /** Schedule to publish one aboutUs */
  schedulePublishAboutUs?: Maybe<AboutUs>;
  /** Schedule to publish one achievementList */
  schedulePublishAchievementList?: Maybe<AchievementList>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one collectionsPage */
  schedulePublishCollectionsPage?: Maybe<CollectionsPage>;
  /** Schedule to publish one contactInfo */
  schedulePublishContactInfo?: Maybe<ContactInfo>;
  /** Schedule to publish one featuredList */
  schedulePublishFeaturedList?: Maybe<FeaturedList>;
  /** Schedule to publish one homePage */
  schedulePublishHomePage?: Maybe<HomePage>;
  /** Schedule to publish one marketList */
  schedulePublishMarketList?: Maybe<MarketList>;
  /** Schedule to publish one seasonalDrop */
  schedulePublishSeasonalDrop?: Maybe<SeasonalDrop>;
  /** Unpublish one aboutUs from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAboutUs?: Maybe<AboutUs>;
  /** Unpublish one achievementList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAchievementList?: Maybe<AchievementList>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one collectionsPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCollectionsPage?: Maybe<CollectionsPage>;
  /** Unpublish one contactInfo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishContactInfo?: Maybe<ContactInfo>;
  /** Unpublish one featuredList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFeaturedList?: Maybe<FeaturedList>;
  /** Unpublish one homePage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHomePage?: Maybe<HomePage>;
  /** Unpublish one marketList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishMarketList?: Maybe<MarketList>;
  /** Unpublish one seasonalDrop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSeasonalDrop?: Maybe<SeasonalDrop>;
  /** Unpublish one aboutUs from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAboutUs?: Maybe<AboutUs>;
  /** Unpublish one achievementList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAchievementList?: Maybe<AchievementList>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one collectionsPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCollectionsPage?: Maybe<CollectionsPage>;
  /** Unpublish one contactInfo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishContactInfo?: Maybe<ContactInfo>;
  /** Unpublish one featuredList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFeaturedList?: Maybe<FeaturedList>;
  /** Unpublish one homePage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHomePage?: Maybe<HomePage>;
  /**
   * Unpublish many AboutUs documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAboutUsesConnection)
   */
  unpublishManyAboutUses: BatchPayload;
  /** Find many AboutUs documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAboutUsesConnection: AboutUsConnection;
  /**
   * Unpublish many AchievementList documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAchievementListsConnection)
   */
  unpublishManyAchievementLists: BatchPayload;
  /** Find many AchievementList documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAchievementListsConnection: AchievementListConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many CollectionsPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCollectionsPagesConnection)
   */
  unpublishManyCollectionsPages: BatchPayload;
  /** Find many CollectionsPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCollectionsPagesConnection: CollectionsPageConnection;
  /**
   * Unpublish many ContactInfo documents
   * @deprecated Please use the new paginated many mutation (unpublishManyContactInfosConnection)
   */
  unpublishManyContactInfos: BatchPayload;
  /** Find many ContactInfo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyContactInfosConnection: ContactInfoConnection;
  /**
   * Unpublish many FeaturedList documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFeaturedListsConnection)
   */
  unpublishManyFeaturedLists: BatchPayload;
  /** Find many FeaturedList documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFeaturedListsConnection: FeaturedListConnection;
  /**
   * Unpublish many HomePage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHomePagesConnection)
   */
  unpublishManyHomePages: BatchPayload;
  /** Find many HomePage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHomePagesConnection: HomePageConnection;
  /**
   * Unpublish many MarketList documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMarketListsConnection)
   */
  unpublishManyMarketLists: BatchPayload;
  /** Find many MarketList documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMarketListsConnection: MarketListConnection;
  /**
   * Unpublish many SeasonalDrop documents
   * @deprecated Please use the new paginated many mutation (unpublishManySeasonalDropsConnection)
   */
  unpublishManySeasonalDrops: BatchPayload;
  /** Find many SeasonalDrop documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySeasonalDropsConnection: SeasonalDropConnection;
  /** Unpublish one marketList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMarketList?: Maybe<MarketList>;
  /** Unpublish one seasonalDrop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSeasonalDrop?: Maybe<SeasonalDrop>;
  /** Update one aboutUs */
  updateAboutUs?: Maybe<AboutUs>;
  /** Update one achievementList */
  updateAchievementList?: Maybe<AchievementList>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one collectionsPage */
  updateCollectionsPage?: Maybe<CollectionsPage>;
  /** Update one contactInfo */
  updateContactInfo?: Maybe<ContactInfo>;
  /** Update one featuredList */
  updateFeaturedList?: Maybe<FeaturedList>;
  /** Update one homePage */
  updateHomePage?: Maybe<HomePage>;
  /**
   * Update many aboutUses
   * @deprecated Please use the new paginated many mutation (updateManyAboutUsesConnection)
   */
  updateManyAboutUses: BatchPayload;
  /** Update many AboutUs documents */
  updateManyAboutUsesConnection: AboutUsConnection;
  /**
   * Update many achievementLists
   * @deprecated Please use the new paginated many mutation (updateManyAchievementListsConnection)
   */
  updateManyAchievementLists: BatchPayload;
  /** Update many AchievementList documents */
  updateManyAchievementListsConnection: AchievementListConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many collectionsPages
   * @deprecated Please use the new paginated many mutation (updateManyCollectionsPagesConnection)
   */
  updateManyCollectionsPages: BatchPayload;
  /** Update many CollectionsPage documents */
  updateManyCollectionsPagesConnection: CollectionsPageConnection;
  /**
   * Update many contactInfos
   * @deprecated Please use the new paginated many mutation (updateManyContactInfosConnection)
   */
  updateManyContactInfos: BatchPayload;
  /** Update many ContactInfo documents */
  updateManyContactInfosConnection: ContactInfoConnection;
  /**
   * Update many featuredLists
   * @deprecated Please use the new paginated many mutation (updateManyFeaturedListsConnection)
   */
  updateManyFeaturedLists: BatchPayload;
  /** Update many FeaturedList documents */
  updateManyFeaturedListsConnection: FeaturedListConnection;
  /**
   * Update many homePages
   * @deprecated Please use the new paginated many mutation (updateManyHomePagesConnection)
   */
  updateManyHomePages: BatchPayload;
  /** Update many HomePage documents */
  updateManyHomePagesConnection: HomePageConnection;
  /**
   * Update many marketLists
   * @deprecated Please use the new paginated many mutation (updateManyMarketListsConnection)
   */
  updateManyMarketLists: BatchPayload;
  /** Update many MarketList documents */
  updateManyMarketListsConnection: MarketListConnection;
  /**
   * Update many seasonalDrops
   * @deprecated Please use the new paginated many mutation (updateManySeasonalDropsConnection)
   */
  updateManySeasonalDrops: BatchPayload;
  /** Update many SeasonalDrop documents */
  updateManySeasonalDropsConnection: SeasonalDropConnection;
  /** Update one marketList */
  updateMarketList?: Maybe<MarketList>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one seasonalDrop */
  updateSeasonalDrop?: Maybe<SeasonalDrop>;
  /** Upsert one aboutUs */
  upsertAboutUs?: Maybe<AboutUs>;
  /** Upsert one achievementList */
  upsertAchievementList?: Maybe<AchievementList>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one collectionsPage */
  upsertCollectionsPage?: Maybe<CollectionsPage>;
  /** Upsert one contactInfo */
  upsertContactInfo?: Maybe<ContactInfo>;
  /** Upsert one featuredList */
  upsertFeaturedList?: Maybe<FeaturedList>;
  /** Upsert one homePage */
  upsertHomePage?: Maybe<HomePage>;
  /** Upsert one marketList */
  upsertMarketList?: Maybe<MarketList>;
  /** Upsert one seasonalDrop */
  upsertSeasonalDrop?: Maybe<SeasonalDrop>;
};


export type MutationCreateAboutUsArgs = {
  data: AboutUsCreateInput;
};


export type MutationCreateAchievementListArgs = {
  data: AchievementListCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCollectionsPageArgs = {
  data: CollectionsPageCreateInput;
};


export type MutationCreateContactInfoArgs = {
  data: ContactInfoCreateInput;
};


export type MutationCreateFeaturedListArgs = {
  data: FeaturedListCreateInput;
};


export type MutationCreateHomePageArgs = {
  data: HomePageCreateInput;
};


export type MutationCreateMarketListArgs = {
  data: MarketListCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSeasonalDropArgs = {
  data: SeasonalDropCreateInput;
};


export type MutationDeleteAboutUsArgs = {
  where: AboutUsWhereUniqueInput;
};


export type MutationDeleteAchievementListArgs = {
  where: AchievementListWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCollectionsPageArgs = {
  where: CollectionsPageWhereUniqueInput;
};


export type MutationDeleteContactInfoArgs = {
  where: ContactInfoWhereUniqueInput;
};


export type MutationDeleteFeaturedListArgs = {
  where: FeaturedListWhereUniqueInput;
};


export type MutationDeleteHomePageArgs = {
  where: HomePageWhereUniqueInput;
};


export type MutationDeleteManyAboutUsesArgs = {
  where?: InputMaybe<AboutUsManyWhereInput>;
};


export type MutationDeleteManyAboutUsesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AboutUsManyWhereInput>;
};


export type MutationDeleteManyAchievementListsArgs = {
  where?: InputMaybe<AchievementListManyWhereInput>;
};


export type MutationDeleteManyAchievementListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AchievementListManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCollectionsPagesArgs = {
  where?: InputMaybe<CollectionsPageManyWhereInput>;
};


export type MutationDeleteManyCollectionsPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CollectionsPageManyWhereInput>;
};


export type MutationDeleteManyContactInfosArgs = {
  where?: InputMaybe<ContactInfoManyWhereInput>;
};


export type MutationDeleteManyContactInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactInfoManyWhereInput>;
};


export type MutationDeleteManyFeaturedListsArgs = {
  where?: InputMaybe<FeaturedListManyWhereInput>;
};


export type MutationDeleteManyFeaturedListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeaturedListManyWhereInput>;
};


export type MutationDeleteManyHomePagesArgs = {
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationDeleteManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationDeleteManyMarketListsArgs = {
  where?: InputMaybe<MarketListManyWhereInput>;
};


export type MutationDeleteManyMarketListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MarketListManyWhereInput>;
};


export type MutationDeleteManySeasonalDropsArgs = {
  where?: InputMaybe<SeasonalDropManyWhereInput>;
};


export type MutationDeleteManySeasonalDropsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeasonalDropManyWhereInput>;
};


export type MutationDeleteMarketListArgs = {
  where: MarketListWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSeasonalDropArgs = {
  where: SeasonalDropWhereUniqueInput;
};


export type MutationPublishAboutUsArgs = {
  to?: Array<Stage>;
  where: AboutUsWhereUniqueInput;
};


export type MutationPublishAchievementListArgs = {
  to?: Array<Stage>;
  where: AchievementListWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishCollectionsPageArgs = {
  to?: Array<Stage>;
  where: CollectionsPageWhereUniqueInput;
};


export type MutationPublishContactInfoArgs = {
  to?: Array<Stage>;
  where: ContactInfoWhereUniqueInput;
};


export type MutationPublishFeaturedListArgs = {
  to?: Array<Stage>;
  where: FeaturedListWhereUniqueInput;
};


export type MutationPublishHomePageArgs = {
  to?: Array<Stage>;
  where: HomePageWhereUniqueInput;
};


export type MutationPublishManyAboutUsesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AboutUsManyWhereInput>;
};


export type MutationPublishManyAboutUsesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AboutUsManyWhereInput>;
};


export type MutationPublishManyAchievementListsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AchievementListManyWhereInput>;
};


export type MutationPublishManyAchievementListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AchievementListManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyCollectionsPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CollectionsPageManyWhereInput>;
};


export type MutationPublishManyCollectionsPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CollectionsPageManyWhereInput>;
};


export type MutationPublishManyContactInfosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ContactInfoManyWhereInput>;
};


export type MutationPublishManyContactInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ContactInfoManyWhereInput>;
};


export type MutationPublishManyFeaturedListsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<FeaturedListManyWhereInput>;
};


export type MutationPublishManyFeaturedListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<FeaturedListManyWhereInput>;
};


export type MutationPublishManyHomePagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationPublishManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationPublishManyMarketListsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<MarketListManyWhereInput>;
};


export type MutationPublishManyMarketListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<MarketListManyWhereInput>;
};


export type MutationPublishManySeasonalDropsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SeasonalDropManyWhereInput>;
};


export type MutationPublishManySeasonalDropsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SeasonalDropManyWhereInput>;
};


export type MutationPublishMarketListArgs = {
  to?: Array<Stage>;
  where: MarketListWhereUniqueInput;
};


export type MutationPublishSeasonalDropArgs = {
  to?: Array<Stage>;
  where: SeasonalDropWhereUniqueInput;
};


export type MutationSchedulePublishAboutUsArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AboutUsWhereUniqueInput;
};


export type MutationSchedulePublishAchievementListArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AchievementListWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishCollectionsPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CollectionsPageWhereUniqueInput;
};


export type MutationSchedulePublishContactInfoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ContactInfoWhereUniqueInput;
};


export type MutationSchedulePublishFeaturedListArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: FeaturedListWhereUniqueInput;
};


export type MutationSchedulePublishHomePageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: HomePageWhereUniqueInput;
};


export type MutationSchedulePublishMarketListArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: MarketListWhereUniqueInput;
};


export type MutationSchedulePublishSeasonalDropArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: SeasonalDropWhereUniqueInput;
};


export type MutationScheduleUnpublishAboutUsArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: AboutUsWhereUniqueInput;
};


export type MutationScheduleUnpublishAchievementListArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: AchievementListWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCollectionsPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CollectionsPageWhereUniqueInput;
};


export type MutationScheduleUnpublishContactInfoArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ContactInfoWhereUniqueInput;
};


export type MutationScheduleUnpublishFeaturedListArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: FeaturedListWhereUniqueInput;
};


export type MutationScheduleUnpublishHomePageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: HomePageWhereUniqueInput;
};


export type MutationScheduleUnpublishMarketListArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: MarketListWhereUniqueInput;
};


export type MutationScheduleUnpublishSeasonalDropArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: SeasonalDropWhereUniqueInput;
};


export type MutationUnpublishAboutUsArgs = {
  from?: Array<Stage>;
  where: AboutUsWhereUniqueInput;
};


export type MutationUnpublishAchievementListArgs = {
  from?: Array<Stage>;
  where: AchievementListWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCollectionsPageArgs = {
  from?: Array<Stage>;
  where: CollectionsPageWhereUniqueInput;
};


export type MutationUnpublishContactInfoArgs = {
  from?: Array<Stage>;
  where: ContactInfoWhereUniqueInput;
};


export type MutationUnpublishFeaturedListArgs = {
  from?: Array<Stage>;
  where: FeaturedListWhereUniqueInput;
};


export type MutationUnpublishHomePageArgs = {
  from?: Array<Stage>;
  where: HomePageWhereUniqueInput;
};


export type MutationUnpublishManyAboutUsesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AboutUsManyWhereInput>;
};


export type MutationUnpublishManyAboutUsesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AboutUsManyWhereInput>;
};


export type MutationUnpublishManyAchievementListsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AchievementListManyWhereInput>;
};


export type MutationUnpublishManyAchievementListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AchievementListManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCollectionsPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CollectionsPageManyWhereInput>;
};


export type MutationUnpublishManyCollectionsPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CollectionsPageManyWhereInput>;
};


export type MutationUnpublishManyContactInfosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ContactInfoManyWhereInput>;
};


export type MutationUnpublishManyContactInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ContactInfoManyWhereInput>;
};


export type MutationUnpublishManyFeaturedListsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<FeaturedListManyWhereInput>;
};


export type MutationUnpublishManyFeaturedListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<FeaturedListManyWhereInput>;
};


export type MutationUnpublishManyHomePagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUnpublishManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUnpublishManyMarketListsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<MarketListManyWhereInput>;
};


export type MutationUnpublishManyMarketListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<MarketListManyWhereInput>;
};


export type MutationUnpublishManySeasonalDropsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SeasonalDropManyWhereInput>;
};


export type MutationUnpublishManySeasonalDropsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SeasonalDropManyWhereInput>;
};


export type MutationUnpublishMarketListArgs = {
  from?: Array<Stage>;
  where: MarketListWhereUniqueInput;
};


export type MutationUnpublishSeasonalDropArgs = {
  from?: Array<Stage>;
  where: SeasonalDropWhereUniqueInput;
};


export type MutationUpdateAboutUsArgs = {
  data: AboutUsUpdateInput;
  where: AboutUsWhereUniqueInput;
};


export type MutationUpdateAchievementListArgs = {
  data: AchievementListUpdateInput;
  where: AchievementListWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCollectionsPageArgs = {
  data: CollectionsPageUpdateInput;
  where: CollectionsPageWhereUniqueInput;
};


export type MutationUpdateContactInfoArgs = {
  data: ContactInfoUpdateInput;
  where: ContactInfoWhereUniqueInput;
};


export type MutationUpdateFeaturedListArgs = {
  data: FeaturedListUpdateInput;
  where: FeaturedListWhereUniqueInput;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageUpdateInput;
  where: HomePageWhereUniqueInput;
};


export type MutationUpdateManyAboutUsesArgs = {
  data: AboutUsUpdateManyInput;
  where?: InputMaybe<AboutUsManyWhereInput>;
};


export type MutationUpdateManyAboutUsesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AboutUsUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AboutUsManyWhereInput>;
};


export type MutationUpdateManyAchievementListsArgs = {
  data: AchievementListUpdateManyInput;
  where?: InputMaybe<AchievementListManyWhereInput>;
};


export type MutationUpdateManyAchievementListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AchievementListUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AchievementListManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCollectionsPagesArgs = {
  data: CollectionsPageUpdateManyInput;
  where?: InputMaybe<CollectionsPageManyWhereInput>;
};


export type MutationUpdateManyCollectionsPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CollectionsPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CollectionsPageManyWhereInput>;
};


export type MutationUpdateManyContactInfosArgs = {
  data: ContactInfoUpdateManyInput;
  where?: InputMaybe<ContactInfoManyWhereInput>;
};


export type MutationUpdateManyContactInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ContactInfoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactInfoManyWhereInput>;
};


export type MutationUpdateManyFeaturedListsArgs = {
  data: FeaturedListUpdateManyInput;
  where?: InputMaybe<FeaturedListManyWhereInput>;
};


export type MutationUpdateManyFeaturedListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: FeaturedListUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeaturedListManyWhereInput>;
};


export type MutationUpdateManyHomePagesArgs = {
  data: HomePageUpdateManyInput;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUpdateManyHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: HomePageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomePageManyWhereInput>;
};


export type MutationUpdateManyMarketListsArgs = {
  data: MarketListUpdateManyInput;
  where?: InputMaybe<MarketListManyWhereInput>;
};


export type MutationUpdateManyMarketListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: MarketListUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MarketListManyWhereInput>;
};


export type MutationUpdateManySeasonalDropsArgs = {
  data: SeasonalDropUpdateManyInput;
  where?: InputMaybe<SeasonalDropManyWhereInput>;
};


export type MutationUpdateManySeasonalDropsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: SeasonalDropUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeasonalDropManyWhereInput>;
};


export type MutationUpdateMarketListArgs = {
  data: MarketListUpdateInput;
  where: MarketListWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSeasonalDropArgs = {
  data: SeasonalDropUpdateInput;
  where: SeasonalDropWhereUniqueInput;
};


export type MutationUpsertAboutUsArgs = {
  upsert: AboutUsUpsertInput;
  where: AboutUsWhereUniqueInput;
};


export type MutationUpsertAchievementListArgs = {
  upsert: AchievementListUpsertInput;
  where: AchievementListWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCollectionsPageArgs = {
  upsert: CollectionsPageUpsertInput;
  where: CollectionsPageWhereUniqueInput;
};


export type MutationUpsertContactInfoArgs = {
  upsert: ContactInfoUpsertInput;
  where: ContactInfoWhereUniqueInput;
};


export type MutationUpsertFeaturedListArgs = {
  upsert: FeaturedListUpsertInput;
  where: FeaturedListWhereUniqueInput;
};


export type MutationUpsertHomePageArgs = {
  upsert: HomePageUpsertInput;
  where: HomePageWhereUniqueInput;
};


export type MutationUpsertMarketListArgs = {
  upsert: MarketListUpsertInput;
  where: MarketListWhereUniqueInput;
};


export type MutationUpsertSeasonalDropArgs = {
  upsert: SeasonalDropUpsertInput;
  where: SeasonalDropWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = Entity & {
  __typename?: 'Product';
  dietary: Array<DietaryRestriction>;
  flavour: Array<Flavour>;
  /**
   * A full description of the item. Could include the complete list of ingredients, the story behind inspiration etc. This is optional. If there is no full description, it will adapt the short description instead.
   *
   * If you wish to section the description, use Heading 1 for huge heading, Heading 2 for medium heading and Heading 3 for small heading that's only slightly bigger than the normal text.
   */
  fullDescription?: Maybe<RichText>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The name of the item */
  name: Scalars['String']['output'];
  /** Is this product still on the menu? If not, select true in this */
  pastProduct: Scalars['Boolean']['output'];
  /** Price of the item */
  price?: Maybe<RichText>;
  productPhoto: Array<Scalars['Json']['output']>;
  /** A short description of the item that includes only the main ingredients. A full description will be included later. */
  shortDescription: RichText;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductFlavourArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FlavourOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FlavourWhereInput>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  dietary?: InputMaybe<Array<DietaryRestriction>>;
  flavour?: InputMaybe<FlavourCreateManyInlineInput>;
  fullDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  name: Scalars['String']['input'];
  pastProduct: Scalars['Boolean']['input'];
  price?: InputMaybe<Scalars['RichTextAST']['input']>;
  productPhoto?: InputMaybe<Array<Scalars['Json']['input']>>;
  shortDescription: Scalars['RichTextAST']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyInlineInput = {
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
};

export type ProductCreateWithPositionInput = {
  /** Document to create */
  data: ProductCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  dietary?: InputMaybe<Array<DietaryRestriction>>;
  /** Matches if the field array contains *all* items provided to the filter */
  dietary_contains_all?: InputMaybe<Array<DietaryRestriction>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  dietary_contains_none?: InputMaybe<Array<DietaryRestriction>>;
  /** Matches if the field array contains at least one item provided to the filter */
  dietary_contains_some?: InputMaybe<Array<DietaryRestriction>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  dietary_not?: InputMaybe<Array<DietaryRestriction>>;
  flavour_every?: InputMaybe<FlavourWhereInput>;
  flavour_none?: InputMaybe<FlavourWhereInput>;
  flavour_some?: InputMaybe<FlavourWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  pastProduct?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  pastProduct_not?: InputMaybe<Scalars['Boolean']['input']>;
  /** All values containing the given json path. */
  productPhoto_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  productPhoto_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum ProductOrderByInput {
  DietaryAsc = 'dietary_ASC',
  DietaryDesc = 'dietary_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PastProductAsc = 'pastProduct_ASC',
  PastProductDesc = 'pastProduct_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProductParent = FeaturedList | SeasonalDrop;

export type ProductParentConnectInput = {
  FeaturedList?: InputMaybe<FeaturedListConnectInput>;
  SeasonalDrop?: InputMaybe<SeasonalDropConnectInput>;
};

export type ProductParentCreateInput = {
  FeaturedList?: InputMaybe<FeaturedListCreateInput>;
  SeasonalDrop?: InputMaybe<SeasonalDropCreateInput>;
};

export type ProductParentCreateManyInlineInput = {
  /** Connect multiple existing ProductParent documents */
  connect?: InputMaybe<Array<ProductParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProductParent documents */
  create?: InputMaybe<Array<ProductParentCreateInput>>;
};

export type ProductParentCreateOneInlineInput = {
  /** Connect one existing ProductParent document */
  connect?: InputMaybe<ProductParentWhereUniqueInput>;
  /** Create and connect one ProductParent document */
  create?: InputMaybe<ProductParentCreateInput>;
};

export type ProductParentUpdateInput = {
  FeaturedList?: InputMaybe<FeaturedListUpdateInput>;
  SeasonalDrop?: InputMaybe<SeasonalDropUpdateInput>;
};

export type ProductParentUpdateManyInlineInput = {
  /** Connect multiple existing ProductParent documents */
  connect?: InputMaybe<Array<ProductParentConnectInput>>;
  /** Create and connect multiple ProductParent documents */
  create?: InputMaybe<Array<ProductParentCreateInput>>;
  /** Delete multiple ProductParent documents */
  delete?: InputMaybe<Array<ProductParentWhereUniqueInput>>;
  /** Disconnect multiple ProductParent documents */
  disconnect?: InputMaybe<Array<ProductParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductParent documents */
  set?: InputMaybe<Array<ProductParentWhereUniqueInput>>;
  /** Update multiple ProductParent documents */
  update?: InputMaybe<Array<ProductParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductParent documents */
  upsert?: InputMaybe<Array<ProductParentUpsertWithNestedWhereUniqueInput>>;
};

export type ProductParentUpdateManyWithNestedWhereInput = {
  FeaturedList?: InputMaybe<FeaturedListUpdateManyWithNestedWhereInput>;
  SeasonalDrop?: InputMaybe<SeasonalDropUpdateManyWithNestedWhereInput>;
};

export type ProductParentUpdateOneInlineInput = {
  /** Connect existing ProductParent document */
  connect?: InputMaybe<ProductParentWhereUniqueInput>;
  /** Create and connect one ProductParent document */
  create?: InputMaybe<ProductParentCreateInput>;
  /** Delete currently connected ProductParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProductParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductParent document */
  update?: InputMaybe<ProductParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductParent document */
  upsert?: InputMaybe<ProductParentUpsertWithNestedWhereUniqueInput>;
};

export type ProductParentUpdateWithNestedWhereUniqueInput = {
  FeaturedList?: InputMaybe<FeaturedListUpdateWithNestedWhereUniqueInput>;
  SeasonalDrop?: InputMaybe<SeasonalDropUpdateWithNestedWhereUniqueInput>;
};

export type ProductParentUpsertWithNestedWhereUniqueInput = {
  FeaturedList?: InputMaybe<FeaturedListUpsertWithNestedWhereUniqueInput>;
  SeasonalDrop?: InputMaybe<SeasonalDropUpsertWithNestedWhereUniqueInput>;
};

export type ProductParentWhereInput = {
  FeaturedList?: InputMaybe<FeaturedListWhereInput>;
  SeasonalDrop?: InputMaybe<SeasonalDropWhereInput>;
};

export type ProductParentWhereUniqueInput = {
  FeaturedList?: InputMaybe<FeaturedListWhereUniqueInput>;
  SeasonalDrop?: InputMaybe<SeasonalDropWhereUniqueInput>;
};

export type ProductUpdateInput = {
  dietary?: InputMaybe<Array<DietaryRestriction>>;
  flavour?: InputMaybe<FlavourUpdateManyInlineInput>;
  fullDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pastProduct?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['RichTextAST']['input']>;
  productPhoto?: InputMaybe<Array<Scalars['Json']['input']>>;
  shortDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type ProductUpdateManyInlineInput = {
  /** Create and connect multiple Product component instances */
  create?: InputMaybe<Array<ProductCreateWithPositionInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product component instances */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Product component instances */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductUpdateManyInput = {
  dietary?: InputMaybe<Array<DietaryRestriction>>;
  fullDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pastProduct?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['RichTextAST']['input']>;
  productPhoto?: InputMaybe<Array<Scalars['Json']['input']>>;
  shortDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProductUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProductUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  dietary?: InputMaybe<Array<DietaryRestriction>>;
  /** Matches if the field array contains *all* items provided to the filter */
  dietary_contains_all?: InputMaybe<Array<DietaryRestriction>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  dietary_contains_none?: InputMaybe<Array<DietaryRestriction>>;
  /** Matches if the field array contains at least one item provided to the filter */
  dietary_contains_some?: InputMaybe<Array<DietaryRestriction>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  dietary_not?: InputMaybe<Array<DietaryRestriction>>;
  flavour_every?: InputMaybe<FlavourWhereInput>;
  flavour_none?: InputMaybe<FlavourWhereInput>;
  flavour_some?: InputMaybe<FlavourWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  pastProduct?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  pastProduct_not?: InputMaybe<Scalars['Boolean']['input']>;
  /** All values containing the given json path. */
  productPhoto_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  productPhoto_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single aboutUs */
  aboutUs?: Maybe<AboutUs>;
  /** Retrieve document version */
  aboutUsVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple aboutUses */
  aboutUses: Array<AboutUs>;
  /** Retrieve multiple aboutUses using the Relay connection interface */
  aboutUsesConnection: AboutUsConnection;
  /** Retrieve a single achievementList */
  achievementList?: Maybe<AchievementList>;
  /** Retrieve document version */
  achievementListVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple achievementLists */
  achievementLists: Array<AchievementList>;
  /** Retrieve multiple achievementLists using the Relay connection interface */
  achievementListsConnection: AchievementListConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single collectionsPage */
  collectionsPage?: Maybe<CollectionsPage>;
  /** Retrieve document version */
  collectionsPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple collectionsPages */
  collectionsPages: Array<CollectionsPage>;
  /** Retrieve multiple collectionsPages using the Relay connection interface */
  collectionsPagesConnection: CollectionsPageConnection;
  /** Retrieve a single contactInfo */
  contactInfo?: Maybe<ContactInfo>;
  /** Retrieve document version */
  contactInfoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple contactInfos */
  contactInfos: Array<ContactInfo>;
  /** Retrieve multiple contactInfos using the Relay connection interface */
  contactInfosConnection: ContactInfoConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single featuredList */
  featuredList?: Maybe<FeaturedList>;
  /** Retrieve document version */
  featuredListVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple featuredLists */
  featuredLists: Array<FeaturedList>;
  /** Retrieve multiple featuredLists using the Relay connection interface */
  featuredListsConnection: FeaturedListConnection;
  /** Retrieve a single homePage */
  homePage?: Maybe<HomePage>;
  /** Retrieve document version */
  homePageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple homePages */
  homePages: Array<HomePage>;
  /** Retrieve multiple homePages using the Relay connection interface */
  homePagesConnection: HomePageConnection;
  /** Retrieve a single marketList */
  marketList?: Maybe<MarketList>;
  /** Retrieve document version */
  marketListVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple marketLists */
  marketLists: Array<MarketList>;
  /** Retrieve multiple marketLists using the Relay connection interface */
  marketListsConnection: MarketListConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single seasonalDrop */
  seasonalDrop?: Maybe<SeasonalDrop>;
  /** Retrieve document version */
  seasonalDropVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple seasonalDrops */
  seasonalDrops: Array<SeasonalDrop>;
  /** Retrieve multiple seasonalDrops using the Relay connection interface */
  seasonalDropsConnection: SeasonalDropConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAboutUsArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AboutUsWhereUniqueInput;
};


export type QueryAboutUsVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAboutUsesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AboutUsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AboutUsWhereInput>;
};


export type QueryAboutUsesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AboutUsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AboutUsWhereInput>;
};


export type QueryAchievementListArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AchievementListWhereUniqueInput;
};


export type QueryAchievementListVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAchievementListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AchievementListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AchievementListWhereInput>;
};


export type QueryAchievementListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AchievementListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AchievementListWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCollectionsPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CollectionsPageWhereUniqueInput;
};


export type QueryCollectionsPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCollectionsPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CollectionsPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CollectionsPageWhereInput>;
};


export type QueryCollectionsPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CollectionsPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CollectionsPageWhereInput>;
};


export type QueryContactInfoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ContactInfoWhereUniqueInput;
};


export type QueryContactInfoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryContactInfosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ContactInfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ContactInfoWhereInput>;
};


export type QueryContactInfosConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ContactInfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ContactInfoWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryFeaturedListArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FeaturedListWhereUniqueInput;
};


export type QueryFeaturedListVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFeaturedListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FeaturedListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FeaturedListWhereInput>;
};


export type QueryFeaturedListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FeaturedListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FeaturedListWhereInput>;
};


export type QueryHomePageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HomePageWhereUniqueInput;
};


export type QueryHomePageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHomePagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomePageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<HomePageWhereInput>;
};


export type QueryHomePagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomePageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<HomePageWhereInput>;
};


export type QueryMarketListArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: MarketListWhereUniqueInput;
};


export type QueryMarketListVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMarketListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MarketListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<MarketListWhereInput>;
};


export type QueryMarketListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MarketListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<MarketListWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySeasonalDropArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SeasonalDropWhereUniqueInput;
};


export type QuerySeasonalDropVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySeasonalDropsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SeasonalDropOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SeasonalDropWhereInput>;
};


export type QuerySeasonalDropsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SeasonalDropOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SeasonalDropWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = AboutUs | AchievementList | Asset | CollectionsPage | ContactInfo | FeaturedList | HomePage | MarketList | SeasonalDrop;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Seasonal collections that updates frequently */
export type SeasonalDrop = Entity & Node & {
  __typename?: 'SeasonalDrop';
  /** A short description to introduce this collection */
  collectionDescription: RichText;
  collectionName: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<SeasonalDrop>;
  /** List of SeasonalDrop versions */
  history: Array<Version>;
  /** Select [True] if you want this collection to be showcased on the home page */
  homepageDisplay?: Maybe<Scalars['Boolean']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** When this collection is no longer active, it goes to the [Past Collection] section on the website. Select [True] you want to archive this collection to [Past Collection] */
  pastCollection?: Maybe<Scalars['Boolean']['output']>;
  productList: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Seasonal collections that updates frequently */
export type SeasonalDropCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Seasonal collections that updates frequently */
export type SeasonalDropDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Seasonal collections that updates frequently */
export type SeasonalDropHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Seasonal collections that updates frequently */
export type SeasonalDropProductListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Seasonal collections that updates frequently */
export type SeasonalDropPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Seasonal collections that updates frequently */
export type SeasonalDropScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Seasonal collections that updates frequently */
export type SeasonalDropUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SeasonalDropConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SeasonalDropWhereUniqueInput;
};

/** A connection to a list of items. */
export type SeasonalDropConnection = {
  __typename?: 'SeasonalDropConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SeasonalDropEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SeasonalDropCreateInput = {
  collectionDescription: Scalars['RichTextAST']['input'];
  collectionName: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  homepageDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  pastCollection?: InputMaybe<Scalars['Boolean']['input']>;
  productList?: InputMaybe<ProductCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SeasonalDropCreateManyInlineInput = {
  /** Connect multiple existing SeasonalDrop documents */
  connect?: InputMaybe<Array<SeasonalDropWhereUniqueInput>>;
  /** Create and connect multiple existing SeasonalDrop documents */
  create?: InputMaybe<Array<SeasonalDropCreateInput>>;
};

export type SeasonalDropCreateOneInlineInput = {
  /** Connect one existing SeasonalDrop document */
  connect?: InputMaybe<SeasonalDropWhereUniqueInput>;
  /** Create and connect one SeasonalDrop document */
  create?: InputMaybe<SeasonalDropCreateInput>;
};

/** An edge in a connection. */
export type SeasonalDropEdge = {
  __typename?: 'SeasonalDropEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SeasonalDrop;
};

/** Identifies documents */
export type SeasonalDropManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeasonalDropWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeasonalDropWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeasonalDropWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  collectionName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  collectionName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  collectionName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  collectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  collectionName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  collectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  collectionName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  collectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  collectionName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  collectionName_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SeasonalDropWhereStageInput>;
  documentInStages_none?: InputMaybe<SeasonalDropWhereStageInput>;
  documentInStages_some?: InputMaybe<SeasonalDropWhereStageInput>;
  homepageDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  homepageDisplay_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pastCollection?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  pastCollection_not?: InputMaybe<Scalars['Boolean']['input']>;
  productList_every?: InputMaybe<ProductWhereInput>;
  productList_none?: InputMaybe<ProductWhereInput>;
  productList_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SeasonalDropOrderByInput {
  CollectionNameAsc = 'collectionName_ASC',
  CollectionNameDesc = 'collectionName_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HomepageDisplayAsc = 'homepageDisplay_ASC',
  HomepageDisplayDesc = 'homepageDisplay_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PastCollectionAsc = 'pastCollection_ASC',
  PastCollectionDesc = 'pastCollection_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SeasonalDropUpdateInput = {
  collectionDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  collectionName?: InputMaybe<Scalars['String']['input']>;
  homepageDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  pastCollection?: InputMaybe<Scalars['Boolean']['input']>;
  productList?: InputMaybe<ProductUpdateManyInlineInput>;
};

export type SeasonalDropUpdateManyInlineInput = {
  /** Connect multiple existing SeasonalDrop documents */
  connect?: InputMaybe<Array<SeasonalDropConnectInput>>;
  /** Create and connect multiple SeasonalDrop documents */
  create?: InputMaybe<Array<SeasonalDropCreateInput>>;
  /** Delete multiple SeasonalDrop documents */
  delete?: InputMaybe<Array<SeasonalDropWhereUniqueInput>>;
  /** Disconnect multiple SeasonalDrop documents */
  disconnect?: InputMaybe<Array<SeasonalDropWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SeasonalDrop documents */
  set?: InputMaybe<Array<SeasonalDropWhereUniqueInput>>;
  /** Update multiple SeasonalDrop documents */
  update?: InputMaybe<Array<SeasonalDropUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SeasonalDrop documents */
  upsert?: InputMaybe<Array<SeasonalDropUpsertWithNestedWhereUniqueInput>>;
};

export type SeasonalDropUpdateManyInput = {
  collectionDescription?: InputMaybe<Scalars['RichTextAST']['input']>;
  collectionName?: InputMaybe<Scalars['String']['input']>;
  homepageDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  pastCollection?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeasonalDropUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SeasonalDropUpdateManyInput;
  /** Document search */
  where: SeasonalDropWhereInput;
};

export type SeasonalDropUpdateOneInlineInput = {
  /** Connect existing SeasonalDrop document */
  connect?: InputMaybe<SeasonalDropWhereUniqueInput>;
  /** Create and connect one SeasonalDrop document */
  create?: InputMaybe<SeasonalDropCreateInput>;
  /** Delete currently connected SeasonalDrop document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SeasonalDrop document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SeasonalDrop document */
  update?: InputMaybe<SeasonalDropUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeasonalDrop document */
  upsert?: InputMaybe<SeasonalDropUpsertWithNestedWhereUniqueInput>;
};

export type SeasonalDropUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SeasonalDropUpdateInput;
  /** Unique document search */
  where: SeasonalDropWhereUniqueInput;
};

export type SeasonalDropUpsertInput = {
  /** Create document if it didn't exist */
  create: SeasonalDropCreateInput;
  /** Update document if it exists */
  update: SeasonalDropUpdateInput;
};

export type SeasonalDropUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SeasonalDropUpsertInput;
  /** Unique document search */
  where: SeasonalDropWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SeasonalDropWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type SeasonalDropWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeasonalDropWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeasonalDropWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeasonalDropWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  collectionName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  collectionName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  collectionName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  collectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  collectionName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  collectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  collectionName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  collectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  collectionName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  collectionName_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SeasonalDropWhereStageInput>;
  documentInStages_none?: InputMaybe<SeasonalDropWhereStageInput>;
  documentInStages_some?: InputMaybe<SeasonalDropWhereStageInput>;
  homepageDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  homepageDisplay_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pastCollection?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  pastCollection_not?: InputMaybe<Scalars['Boolean']['input']>;
  productList_every?: InputMaybe<ProductWhereInput>;
  productList_none?: InputMaybe<ProductWhereInput>;
  productList_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SeasonalDropWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SeasonalDropWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SeasonalDropWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SeasonalDropWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SeasonalDropWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References SeasonalDrop record uniquely */
export type SeasonalDropWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  DescendantsOf = 'descendants_of',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type AboutDataQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutDataQuery = { __typename?: 'Query', aboutUses: Array<{ __typename?: 'AboutUs', title?: string | null, aboutList: Array<{ __typename?: 'AboutItem', title: string, description: { __typename?: 'RichText', raw: any }, photo?: { __typename?: 'Media', image: any, captionAltText?: string | null } | null }> }> };

export type AchievementDataQueryVariables = Exact<{ [key: string]: never; }>;


export type AchievementDataQuery = { __typename?: 'Query', achievementLists: Array<{ __typename?: 'AchievementList', title?: string | null, achievementItem: Array<{ __typename?: 'AchievementItem', date: string, name: string, image: Array<any>, description: { __typename?: 'RichText', raw: any } }> }> };

export type CollectionDataQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionDataQuery = { __typename?: 'Query', collectionsPages: Array<{ __typename?: 'CollectionsPage', title: string, description?: { __typename?: 'RichText', raw: any } | null }> };

export type FooterDataQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterDataQuery = { __typename?: 'Query', contactInfos: Array<{ __typename?: 'ContactInfo', instagram?: string | null, email?: string | null, bio?: { __typename?: 'RichText', raw: any } | null, location?: { __typename?: 'RichText', raw: any } | null }> };

export type FeaturedDataQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedDataQuery = { __typename?: 'Query', featuredLists: Array<{ __typename?: 'FeaturedList', collectionName: string, collectionDescription?: { __typename?: 'RichText', raw: any } | null, productList: Array<{ __typename?: 'Product', pastProduct: boolean, productPhoto: Array<any>, name: string, dietary: Array<DietaryRestriction>, price?: { __typename?: 'RichText', raw: any } | null, flavour: Array<{ __typename?: 'Flavour', flavourName: string, dietary?: DietaryRestriction | null, flavourPrice?: { __typename?: 'RichText', raw: any } | null, flavourDescription?: { __typename?: 'RichText', raw: any } | null }>, shortDescription: { __typename?: 'RichText', raw: any }, fullDescription?: { __typename?: 'RichText', raw: any } | null }> }> };

export type HomeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeDataQuery = { __typename?: 'Query', homePages: Array<{ __typename?: 'HomePage', welcome: string, slogan: { __typename?: 'RichText', raw: any }, announcement: Array<{ __typename?: 'RichText', raw: any }> }> };

export type MarketDataQueryVariables = Exact<{ [key: string]: never; }>;


export type MarketDataQuery = { __typename?: 'Query', marketLists: Array<{ __typename?: 'MarketList', title?: string | null, marketItem: Array<{ __typename?: 'MarketItem', marketDate: any, location: string, streetAddress?: string | null, time?: string | null, description?: { __typename?: 'RichText', raw: any } | null, photos?: { __typename?: 'Media', image: any, captionAltText?: string | null } | null }> }> };

export type SeasonalDataQueryVariables = Exact<{ [key: string]: never; }>;


export type SeasonalDataQuery = { __typename?: 'Query', seasonalDrops: Array<{ __typename?: 'SeasonalDrop', collectionName: string, pastCollection?: boolean | null, homepageDisplay?: boolean | null, collectionDescription: { __typename?: 'RichText', raw: any }, productList: Array<{ __typename?: 'Product', pastProduct: boolean, productPhoto: Array<any>, name: string, dietary: Array<DietaryRestriction>, price?: { __typename?: 'RichText', raw: any } | null, flavour: Array<{ __typename?: 'Flavour', flavourName: string, dietary?: DietaryRestriction | null, flavourPrice?: { __typename?: 'RichText', raw: any } | null, flavourDescription?: { __typename?: 'RichText', raw: any } | null }>, shortDescription: { __typename?: 'RichText', raw: any }, fullDescription?: { __typename?: 'RichText', raw: any } | null }> }> };


export const AboutDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutUses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"aboutList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"captionAltText"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AboutDataQuery, AboutDataQueryVariables>;
export const AchievementDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AchievementData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"achievementLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"achievementItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<AchievementDataQuery, AchievementDataQueryVariables>;
export const CollectionDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionsPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]} as unknown as DocumentNode<CollectionDataQuery, CollectionDataQueryVariables>;
export const FooterDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FooterData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactInfos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<FooterDataQuery, FooterDataQueryVariables>;
export const FeaturedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FeaturedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionName"}},{"kind":"Field","name":{"kind":"Name","value":"collectionDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pastProduct"}},{"kind":"Field","name":{"kind":"Name","value":"productPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dietary"}},{"kind":"Field","name":{"kind":"Name","value":"flavour"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flavourName"}},{"kind":"Field","name":{"kind":"Name","value":"flavourPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dietary"}},{"kind":"Field","name":{"kind":"Name","value":"flavourDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fullDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FeaturedDataQuery, FeaturedDataQueryVariables>;
export const HomeDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomeData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"welcome"}},{"kind":"Field","name":{"kind":"Name","value":"slogan"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"announcement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]} as unknown as DocumentNode<HomeDataQuery, HomeDataQueryVariables>;
export const MarketDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MarketData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"marketItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketDate"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"streetAddress"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"captionAltText"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MarketDataQuery, MarketDataQueryVariables>;
export const SeasonalDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SeasonalData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"seasonalDrops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionName"}},{"kind":"Field","name":{"kind":"Name","value":"pastCollection"}},{"kind":"Field","name":{"kind":"Name","value":"homepageDisplay"}},{"kind":"Field","name":{"kind":"Name","value":"collectionDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pastProduct"}},{"kind":"Field","name":{"kind":"Name","value":"productPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dietary"}},{"kind":"Field","name":{"kind":"Name","value":"flavour"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flavourName"}},{"kind":"Field","name":{"kind":"Name","value":"flavourPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dietary"}},{"kind":"Field","name":{"kind":"Name","value":"flavourDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fullDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SeasonalDataQuery, SeasonalDataQueryVariables>;