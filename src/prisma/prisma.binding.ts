import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
  games: <T = Game[]>(
    args: {
      where?: GameWhereInput
      orderBy?: GameOrderByInput
      skip?: Int
      after?: String
      before?: String
      first?: Int
      last?: Int
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  players: <T = Player[]>(
    args: {
      where?: PlayerWhereInput
      orderBy?: PlayerOrderByInput
      skip?: Int
      after?: String
      before?: String
      first?: Int
      last?: Int
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  game: <T = Game | null>(
    args: { where: GameWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  player: <T = Player | null>(
    args: { where: PlayerWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  gamesConnection: <T = GameConnection>(
    args: {
      where?: GameWhereInput
      orderBy?: GameOrderByInput
      skip?: Int
      after?: String
      before?: String
      first?: Int
      last?: Int
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  playersConnection: <T = PlayerConnection>(
    args: {
      where?: PlayerWhereInput
      orderBy?: PlayerOrderByInput
      skip?: Int
      after?: String
      before?: String
      first?: Int
      last?: Int
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  node: <T = Node | null>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
}

export interface Mutation {
  createGame: <T = Game>(
    args: { data: GameCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  createPlayer: <T = Player>(
    args: { data: PlayerCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  updateGame: <T = Game | null>(
    args: { data: GameUpdateInput; where: GameWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  updatePlayer: <T = Player | null>(
    args: { data: PlayerUpdateInput; where: PlayerWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  deleteGame: <T = Game | null>(
    args: { where: GameWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  deletePlayer: <T = Player | null>(
    args: { where: PlayerWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  upsertGame: <T = Game>(
    args: {
      where: GameWhereUniqueInput
      create: GameCreateInput
      update: GameUpdateInput
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  upsertPlayer: <T = Player>(
    args: {
      where: PlayerWhereUniqueInput
      create: PlayerCreateInput
      update: PlayerUpdateInput
    },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  updateManyGames: <T = BatchPayload>(
    args: { data: GameUpdateInput; where?: GameWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  updateManyPlayers: <T = BatchPayload>(
    args: { data: PlayerUpdateInput; where?: PlayerWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  deleteManyGames: <T = BatchPayload>(
    args: { where?: GameWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
  deleteManyPlayers: <T = BatchPayload>(
    args: { where?: PlayerWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<T>
}

export interface Subscription {
  game: <T = GameSubscriptionPayload | null>(
    args: { where?: GameSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<AsyncIterator<T>>
  player: <T = PlayerSubscriptionPayload | null>(
    args: { where?: PlayerSubscriptionWhereInput },
    info?: GraphQLResolveInfo | string,
    options?: Options,
  ) => Promise<AsyncIterator<T>>
}

export interface Exists {
  Game: (where?: GameWhereInput) => Promise<boolean>
  Player: (where?: PlayerWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(
    query: string,
    variables?: { [key: string]: any },
  ) => Promise<T>
  delegate(
    operation: 'query' | 'mutation',
    fieldName: string,
    args: {
      [key: string]: any
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<any>
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options,
  ): Promise<AsyncIterator<any>>
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers
}

export interface BindingConstructor<T> {
  new (options: BasePrismaOptions): T
}
/**
 * Type Defs
 */

const typeDefs = `type AggregateGame {
  count: Int!
}

type AggregatePlayer {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Game implements Node {
  id: ID!
  createdAt: DateTime!
  targetScore: Int!
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player!]
  hasFinished: Boolean
}

"""A connection to a list of items."""
type GameConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  targetScore: Int!
  hasFinished: Boolean
  players: PlayerCreateManyWithoutGameInput
}

input GameCreateOneWithoutPlayersInput {
  create: GameCreateWithoutPlayersInput
  connect: GameWhereUniqueInput
}

input GameCreateWithoutPlayersInput {
  targetScore: Int!
  hasFinished: Boolean
}

"""An edge in a connection."""
type GameEdge {
  """The item at the end of the edge."""
  node: Game!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  targetScore_ASC
  targetScore_DESC
  hasFinished_ASC
  hasFinished_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GamePreviousValues {
  id: ID!
  createdAt: DateTime!
  targetScore: Int!
  hasFinished: Boolean
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GameSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GameWhereInput
}

input GameUpdateInput {
  targetScore: Int
  hasFinished: Boolean
  players: PlayerUpdateManyWithoutGameInput
}

input GameUpdateOneWithoutPlayersInput {
  create: GameCreateWithoutPlayersInput
  connect: GameWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GameUpdateWithoutPlayersDataInput
  upsert: GameUpsertWithoutPlayersInput
}

input GameUpdateWithoutPlayersDataInput {
  targetScore: Int
  hasFinished: Boolean
}

input GameUpsertWithoutPlayersInput {
  update: GameUpdateWithoutPlayersDataInput!
  create: GameCreateWithoutPlayersInput!
}

input GameWhereInput {
  """Logical AND on all given filters."""
  AND: [GameWhereInput!]

  """Logical OR on all given filters."""
  OR: [GameWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GameWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  targetScore: Int

  """All values that are not equal to given value."""
  targetScore_not: Int

  """All values that are contained in given list."""
  targetScore_in: [Int!]

  """All values that are not contained in given list."""
  targetScore_not_in: [Int!]

  """All values less than the given value."""
  targetScore_lt: Int

  """All values less than or equal the given value."""
  targetScore_lte: Int

  """All values greater than the given value."""
  targetScore_gt: Int

  """All values greater than or equal the given value."""
  targetScore_gte: Int
  hasFinished: Boolean

  """All values that are not equal to given value."""
  hasFinished_not: Boolean
  players_every: PlayerWhereInput
  players_some: PlayerWhereInput
  players_none: PlayerWhereInput
}

input GameWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createGame(data: GameCreateInput!): Game!
  createPlayer(data: PlayerCreateInput!): Player!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updatePlayer(data: PlayerUpdateInput!, where: PlayerWhereUniqueInput!): Player
  deleteGame(where: GameWhereUniqueInput!): Game
  deletePlayer(where: PlayerWhereUniqueInput!): Player
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  upsertPlayer(where: PlayerWhereUniqueInput!, create: PlayerCreateInput!, update: PlayerUpdateInput!): Player!
  updateManyGames(data: GameUpdateInput!, where: GameWhereInput): BatchPayload!
  updateManyPlayers(data: PlayerUpdateInput!, where: PlayerWhereInput): BatchPayload!
  deleteManyGames(where: GameWhereInput): BatchPayload!
  deleteManyPlayers(where: PlayerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Player implements Node {
  id: ID!
  game(where: GameWhereInput): Game
  createdAt: DateTime!
  name: String!
  score: Int
}

"""A connection to a list of items."""
type PlayerConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PlayerEdge]!
  aggregate: AggregatePlayer!
}

input PlayerCreateInput {
  name: String!
  score: Int
  game: GameCreateOneWithoutPlayersInput
}

input PlayerCreateManyWithoutGameInput {
  create: [PlayerCreateWithoutGameInput!]
  connect: [PlayerWhereUniqueInput!]
}

input PlayerCreateWithoutGameInput {
  name: String!
  score: Int
}

"""An edge in a connection."""
type PlayerEdge {
  """The item at the end of the edge."""
  node: Player!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PlayerOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  score_ASC
  score_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlayerPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  score: Int
}

type PlayerSubscriptionPayload {
  mutation: MutationType!
  node: Player
  updatedFields: [String!]
  previousValues: PlayerPreviousValues
}

input PlayerSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PlayerSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlayerSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlayerSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PlayerWhereInput
}

input PlayerUpdateInput {
  name: String
  score: Int
  game: GameUpdateOneWithoutPlayersInput
}

input PlayerUpdateManyWithoutGameInput {
  create: [PlayerCreateWithoutGameInput!]
  connect: [PlayerWhereUniqueInput!]
  disconnect: [PlayerWhereUniqueInput!]
  delete: [PlayerWhereUniqueInput!]
  update: [PlayerUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [PlayerUpsertWithWhereUniqueWithoutGameInput!]
}

input PlayerUpdateWithoutGameDataInput {
  name: String
  score: Int
}

input PlayerUpdateWithWhereUniqueWithoutGameInput {
  where: PlayerWhereUniqueInput!
  data: PlayerUpdateWithoutGameDataInput!
}

input PlayerUpsertWithWhereUniqueWithoutGameInput {
  where: PlayerWhereUniqueInput!
  update: PlayerUpdateWithoutGameDataInput!
  create: PlayerCreateWithoutGameInput!
}

input PlayerWhereInput {
  """Logical AND on all given filters."""
  AND: [PlayerWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlayerWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlayerWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  score: Int

  """All values that are not equal to given value."""
  score_not: Int

  """All values that are contained in given list."""
  score_in: [Int!]

  """All values that are not contained in given list."""
  score_not_in: [Int!]

  """All values less than the given value."""
  score_lt: Int

  """All values less than or equal the given value."""
  score_lte: Int

  """All values greater than the given value."""
  score_gt: Int

  """All values greater than or equal the given value."""
  score_gte: Int
  game: GameWhereInput
}

input PlayerWhereUniqueInput {
  id: ID
}

type Query {
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player]!
  game(where: GameWhereUniqueInput!): Game
  player(where: PlayerWhereUniqueInput!): Player
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  playersConnection(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlayerConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  player(where: PlayerSubscriptionWhereInput): PlayerSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({
  typeDefs,
})

/**
 * Types
 */

export type GameOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'targetScore_ASC'
  | 'targetScore_DESC'
  | 'hasFinished_ASC'
  | 'hasFinished_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type PlayerOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'score_ASC'
  | 'score_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export interface PlayerCreateManyWithoutGameInput {
  create?: PlayerCreateWithoutGameInput[] | PlayerCreateWithoutGameInput
  connect?: PlayerWhereUniqueInput[] | PlayerWhereUniqueInput
}

export interface GameWhereInput {
  AND?: GameWhereInput[] | GameWhereInput
  OR?: GameWhereInput[] | GameWhereInput
  NOT?: GameWhereInput[] | GameWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  targetScore?: Int
  targetScore_not?: Int
  targetScore_in?: Int[] | Int
  targetScore_not_in?: Int[] | Int
  targetScore_lt?: Int
  targetScore_lte?: Int
  targetScore_gt?: Int
  targetScore_gte?: Int
  hasFinished?: Boolean
  hasFinished_not?: Boolean
  players_every?: PlayerWhereInput
  players_some?: PlayerWhereInput
  players_none?: PlayerWhereInput
}

export interface GameCreateOneWithoutPlayersInput {
  create?: GameCreateWithoutPlayersInput
  connect?: GameWhereUniqueInput
}

export interface PlayerWhereInput {
  AND?: PlayerWhereInput[] | PlayerWhereInput
  OR?: PlayerWhereInput[] | PlayerWhereInput
  NOT?: PlayerWhereInput[] | PlayerWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  score?: Int
  score_not?: Int
  score_in?: Int[] | Int
  score_not_in?: Int[] | Int
  score_lt?: Int
  score_lte?: Int
  score_gt?: Int
  score_gte?: Int
  game?: GameWhereInput
}

export interface PlayerUpdateInput {
  name?: String
  score?: Int
  game?: GameUpdateOneWithoutPlayersInput
}

export interface GameUpdateInput {
  targetScore?: Int
  hasFinished?: Boolean
  players?: PlayerUpdateManyWithoutGameInput
}

export interface PlayerUpsertWithWhereUniqueWithoutGameInput {
  where: PlayerWhereUniqueInput
  update: PlayerUpdateWithoutGameDataInput
  create: PlayerCreateWithoutGameInput
}

export interface GameCreateWithoutPlayersInput {
  targetScore: Int
  hasFinished?: Boolean
}

export interface PlayerUpdateWithoutGameDataInput {
  name?: String
  score?: Int
}

export interface PlayerSubscriptionWhereInput {
  AND?: PlayerSubscriptionWhereInput[] | PlayerSubscriptionWhereInput
  OR?: PlayerSubscriptionWhereInput[] | PlayerSubscriptionWhereInput
  NOT?: PlayerSubscriptionWhereInput[] | PlayerSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PlayerWhereInput
}

export interface PlayerUpdateWithWhereUniqueWithoutGameInput {
  where: PlayerWhereUniqueInput
  data: PlayerUpdateWithoutGameDataInput
}

export interface GameWhereUniqueInput {
  id?: ID_Input
}

export interface GameUpsertWithoutPlayersInput {
  update: GameUpdateWithoutPlayersDataInput
  create: GameCreateWithoutPlayersInput
}

export interface PlayerCreateInput {
  name: String
  score?: Int
  game?: GameCreateOneWithoutPlayersInput
}

export interface PlayerCreateWithoutGameInput {
  name: String
  score?: Int
}

export interface PlayerUpdateManyWithoutGameInput {
  create?: PlayerCreateWithoutGameInput[] | PlayerCreateWithoutGameInput
  connect?: PlayerWhereUniqueInput[] | PlayerWhereUniqueInput
  disconnect?: PlayerWhereUniqueInput[] | PlayerWhereUniqueInput
  delete?: PlayerWhereUniqueInput[] | PlayerWhereUniqueInput
  update?:
    | PlayerUpdateWithWhereUniqueWithoutGameInput[]
    | PlayerUpdateWithWhereUniqueWithoutGameInput
  upsert?:
    | PlayerUpsertWithWhereUniqueWithoutGameInput[]
    | PlayerUpsertWithWhereUniqueWithoutGameInput
}

export interface GameCreateInput {
  targetScore: Int
  hasFinished?: Boolean
  players?: PlayerCreateManyWithoutGameInput
}

export interface GameUpdateWithoutPlayersDataInput {
  targetScore?: Int
  hasFinished?: Boolean
}

export interface PlayerWhereUniqueInput {
  id?: ID_Input
}

export interface GameSubscriptionWhereInput {
  AND?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput
  OR?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput
  NOT?: GameSubscriptionWhereInput[] | GameSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GameWhereInput
}

export interface GameUpdateOneWithoutPlayersInput {
  create?: GameCreateWithoutPlayersInput
  connect?: GameWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GameUpdateWithoutPlayersDataInput
  upsert?: GameUpsertWithoutPlayersInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface PlayerPreviousValues {
  id: ID_Output
  createdAt: DateTime
  name: String
  score?: Int
}

/*
 * A connection to a list of items.

 */
export interface GameConnection {
  pageInfo: PageInfo
  edges: GameEdge[]
  aggregate: AggregateGame
}

export interface Game extends Node {
  id: ID_Output
  createdAt: DateTime
  targetScore: Int
  players?: Player[]
  hasFinished?: Boolean
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface GameSubscriptionPayload {
  mutation: MutationType
  node?: Game
  updatedFields?: String[]
  previousValues?: GamePreviousValues
}

export interface BatchPayload {
  count: Long
}

export interface Player extends Node {
  id: ID_Output
  game?: Game
  createdAt: DateTime
  name: String
  score?: Int
}

export interface GamePreviousValues {
  id: ID_Output
  createdAt: DateTime
  targetScore: Int
  hasFinished?: Boolean
}

export interface AggregatePlayer {
  count: Int
}

export interface PlayerSubscriptionPayload {
  mutation: MutationType
  node?: Player
  updatedFields?: String[]
  previousValues?: PlayerPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PlayerEdge {
  node: Player
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface GameEdge {
  node: Game
  cursor: String
}

export interface AggregateGame {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface PlayerConnection {
  pageInfo: PageInfo
  edges: PlayerEdge[]
  aggregate: AggregatePlayer
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string
