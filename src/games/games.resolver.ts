import {
  Query,
  Resolver,
  Subscription,
  Mutation,
  Args,
  Info,
} from '@nestjs/graphql'
import { PrismaService } from '../prisma/prisma.service'
import { BatchPayload, Game } from '../prisma/prisma.binding'

@Resolver()
export class GamesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('games')
  async getGames(@Args() args, @Info() info): Promise<Game[]> {
    return await this.prisma.query.games(args, info)
  }

  @Query('game')
  async getGame(@Args() args, @Info() info): Promise<Game> {
    return await this.prisma.query.game(args, info)
  }

  @Mutation('createGame')
  async createGame(@Args() args, @Info() info): Promise<Game> {
    return await this.prisma.mutation.createGame(args, info)
  }

  @Mutation('updateGame')
  async updateGame(@Args() args, @Info() info): Promise<Game> {
    return await this.prisma.mutation.updateGame(args, info)
  }

  @Mutation('updateManyGames')
  async updateManyGames(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.updateManyGames(args, info)
  }

  @Mutation('deleteGame')
  async deleteGame(@Args() args, @Info() info): Promise<Game> {
    return await this.prisma.mutation.deleteGame(args, info)
  }

  @Mutation('deleteManyGames')
  async deleteManyGames(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyGames(args, info)
  }

  @Subscription('game')
  onGameMutation() {
    return {
      subscribe: (obj, args, ctx, info) => {
        return this.prisma.subscription.game(args, info)
      },
    }
  }
}
