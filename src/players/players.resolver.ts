import {
  Query,
  Resolver,
  Subscription,
  Mutation,
  Args,
  Info,
} from '@nestjs/graphql'
import { PrismaService } from '../prisma/prisma.service'
import { Player, BatchPayload } from '../prisma/prisma.binding'

@Resolver()
export class PlayersResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('players')
  async getPlayers(@Args() args, @Info() info): Promise<Player[]> {
    return await this.prisma.query.players(args, info)
  }

  @Query('player')
  async getPlayer(@Args() args, @Info() info): Promise<Player> {
    return await this.prisma.query.player(args, info)
  }

  @Mutation('createPlayer')
  async createPlayer(@Args() args, @Info() info): Promise<Player> {
    return await this.prisma.mutation.createPlayer(args, info)
  }

  @Mutation('updatePlayer')
  async updatePlayer(@Args() args, @Info() info): Promise<Player> {
    return await this.prisma.mutation.updatePlayer(args, info)
  }

  @Mutation('updateManyPlayers')
  async updateManyPlayers(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.updateManyPlayers(args, info)
  }

  @Mutation('deletePlayer')
  async deletePlayer(@Args() args, @Info() info): Promise<Player> {
    return await this.prisma.mutation.deletePlayer(args, info)
  }

  @Mutation('deleteManyPlayers')
  async deleteManyPlayers(@Args() args, @Info() info): Promise<BatchPayload> {
    return await this.prisma.mutation.deleteManyPlayers(args, info)
  }

  @Subscription('player')
  onPlayerMutation() {
    return {
      subscribe: (obj, args, ctx, info) => {
        return this.prisma.subscription.player(args, info)
      },
    }
  }
}
