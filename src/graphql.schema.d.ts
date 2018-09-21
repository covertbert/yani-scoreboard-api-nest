export enum GameOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    targetScore_ASC = "targetScore_ASC",
    targetScore_DESC = "targetScore_DESC",
    hasFinished_ASC = "hasFinished_ASC",
    hasFinished_DESC = "hasFinished_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum PlayerOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    score_ASC = "score_ASC",
    score_DESC = "score_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export class GameCreateInput {
    targetScore: number;
    hasFinished?: boolean;
    players?: PlayerCreateManyWithoutGameInput;
}

export class GameCreateOneWithoutPlayersInput {
    create?: GameCreateWithoutPlayersInput;
    connect?: GameWhereUniqueInput;
}

export class GameCreateWithoutPlayersInput {
    targetScore: number;
    hasFinished?: boolean;
}

export class GameSubscriptionWhereInput {
    AND: GameSubscriptionWhereInput[];
    OR: GameSubscriptionWhereInput[];
    NOT: GameSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: GameWhereInput;
}

export class GameUpdateInput {
    targetScore?: number;
    hasFinished?: boolean;
    players?: PlayerUpdateManyWithoutGameInput;
}

export class GameUpdateOneWithoutPlayersInput {
    create?: GameCreateWithoutPlayersInput;
    connect?: GameWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: GameUpdateWithoutPlayersDataInput;
    upsert?: GameUpsertWithoutPlayersInput;
}

export class GameUpdateWithoutPlayersDataInput {
    targetScore?: number;
    hasFinished?: boolean;
}

export class GameUpsertWithoutPlayersInput {
    update: GameUpdateWithoutPlayersDataInput;
    create: GameCreateWithoutPlayersInput;
}

export class GameWhereInput {
    AND: GameWhereInput[];
    OR: GameWhereInput[];
    NOT: GameWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    targetScore?: number;
    targetScore_not?: number;
    targetScore_in: number[];
    targetScore_not_in: number[];
    targetScore_lt?: number;
    targetScore_lte?: number;
    targetScore_gt?: number;
    targetScore_gte?: number;
    hasFinished?: boolean;
    hasFinished_not?: boolean;
    players_every?: PlayerWhereInput;
    players_some?: PlayerWhereInput;
    players_none?: PlayerWhereInput;
}

export class GameWhereUniqueInput {
    id?: string;
}

export class PlayerCreateInput {
    name: string;
    score?: number;
    game?: GameCreateOneWithoutPlayersInput;
}

export class PlayerCreateManyWithoutGameInput {
    create: PlayerCreateWithoutGameInput[];
    connect: PlayerWhereUniqueInput[];
}

export class PlayerCreateWithoutGameInput {
    name: string;
    score?: number;
}

export class PlayerSubscriptionWhereInput {
    AND: PlayerSubscriptionWhereInput[];
    OR: PlayerSubscriptionWhereInput[];
    NOT: PlayerSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: PlayerWhereInput;
}

export class PlayerUpdateInput {
    name?: string;
    score?: number;
    game?: GameUpdateOneWithoutPlayersInput;
}

export class PlayerUpdateManyWithoutGameInput {
    create: PlayerCreateWithoutGameInput[];
    connect: PlayerWhereUniqueInput[];
    disconnect: PlayerWhereUniqueInput[];
    delete: PlayerWhereUniqueInput[];
    update: PlayerUpdateWithWhereUniqueWithoutGameInput[];
    upsert: PlayerUpsertWithWhereUniqueWithoutGameInput[];
}

export class PlayerUpdateWithoutGameDataInput {
    name?: string;
    score?: number;
}

export class PlayerUpdateWithWhereUniqueWithoutGameInput {
    where: PlayerWhereUniqueInput;
    data: PlayerUpdateWithoutGameDataInput;
}

export class PlayerUpsertWithWhereUniqueWithoutGameInput {
    where: PlayerWhereUniqueInput;
    update: PlayerUpdateWithoutGameDataInput;
    create: PlayerCreateWithoutGameInput;
}

export class PlayerWhereInput {
    AND: PlayerWhereInput[];
    OR: PlayerWhereInput[];
    NOT: PlayerWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    name?: string;
    name_not?: string;
    name_in: string[];
    name_not_in: string[];
    name_lt?: string;
    name_lte?: string;
    name_gt?: string;
    name_gte?: string;
    name_contains?: string;
    name_not_contains?: string;
    name_starts_with?: string;
    name_not_starts_with?: string;
    name_ends_with?: string;
    name_not_ends_with?: string;
    score?: number;
    score_not?: number;
    score_in: number[];
    score_not_in: number[];
    score_lt?: number;
    score_lte?: number;
    score_gt?: number;
    score_gte?: number;
    game?: GameWhereInput;
}

export class PlayerWhereUniqueInput {
    id?: string;
}

export interface Node {
    id: string;
}

export class AggregateGame {
    count: number;
}

export class AggregatePlayer {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export class Game {
    id: string;
    createdAt: DateTime;
    targetScore: number;
    players: Player[];
    hasFinished?: boolean;
}

export class GameConnection {
    pageInfo: PageInfo;
    edges?: GameEdge[];
    aggregate: AggregateGame;
}

export class GameEdge {
    node: Game;
    cursor: string;
}

export class GamePreviousValues {
    id: string;
    createdAt: DateTime;
    targetScore: number;
    hasFinished?: boolean;
}

export class GameSubscriptionPayload {
    mutation: MutationType;
    node?: Game;
    updatedFields: string[];
    previousValues?: GamePreviousValues;
}

export abstract class IMutation {
    abstract createGame(data: GameCreateInput): Game | Promise<Game>;
    abstract createPlayer(data: PlayerCreateInput): Player | Promise<Player>;
    abstract updateGame(data: GameUpdateInput, where: GameWhereUniqueInput): Game | Promise<Game>;
    abstract updatePlayer(data: PlayerUpdateInput, where: PlayerWhereUniqueInput): Player | Promise<Player>;
    abstract deleteGame(where: GameWhereUniqueInput): Game | Promise<Game>;
    abstract deletePlayer(where: PlayerWhereUniqueInput): Player | Promise<Player>;
    abstract upsertGame(where: GameWhereUniqueInput, create: GameCreateInput, update: GameUpdateInput): Game | Promise<Game>;
    abstract upsertPlayer(where: PlayerWhereUniqueInput, create: PlayerCreateInput, update: PlayerUpdateInput): Player | Promise<Player>;
    abstract updateManyGames(data: GameUpdateInput, where?: GameWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyPlayers(data: PlayerUpdateInput, where?: PlayerWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyGames(where?: GameWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyPlayers(where?: PlayerWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export class Player {
    id: string;
    game?: Game;
    createdAt: DateTime;
    name: string;
    score?: number;
}

export class PlayerConnection {
    pageInfo: PageInfo;
    edges?: PlayerEdge[];
    aggregate: AggregatePlayer;
}

export class PlayerEdge {
    node: Player;
    cursor: string;
}

export class PlayerPreviousValues {
    id: string;
    createdAt: DateTime;
    name: string;
    score?: number;
}

export class PlayerSubscriptionPayload {
    mutation: MutationType;
    node?: Player;
    updatedFields: string[];
    previousValues?: PlayerPreviousValues;
}

export abstract class IQuery {
    abstract games(where?: GameWhereInput, orderBy?: GameOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Game[] | Promise<Game[]>;
    abstract players(where?: PlayerWhereInput, orderBy?: PlayerOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Player[] | Promise<Player[]>;
    abstract game(where: GameWhereUniqueInput): Game | Promise<Game>;
    abstract player(where: PlayerWhereUniqueInput): Player | Promise<Player>;
    abstract gamesConnection(where?: GameWhereInput, orderBy?: GameOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): GameConnection | Promise<GameConnection>;
    abstract playersConnection(where?: PlayerWhereInput, orderBy?: PlayerOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): PlayerConnection | Promise<PlayerConnection>;
    abstract node(id: string): Node | Promise<Node>;
    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract game(where?: GameSubscriptionWhereInput): GameSubscriptionPayload | Promise<GameSubscriptionPayload>;
    abstract player(where?: PlayerSubscriptionWhereInput): PlayerSubscriptionPayload | Promise<PlayerSubscriptionPayload>;
}

export class User {
    id: string;
    name: string;
}

export type DateTime = any;
export type Long = any;
