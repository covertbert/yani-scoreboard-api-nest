import {
  Query,
  Resolver,
  Subscription,
  Mutation,
  Args,
  Info,
} from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { BatchPayload } from '../prisma/prisma.binding';
import { Game } from '../graphql.schema';

@Resolver()
export class GamesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('games')
  async getGames(@Args() args, @Info() info): Promise<Game[]> {
    return await this.prisma.query.games(args, info);
  }

  // @Query('post')
  // async getPost(@Args() args, @Info() info): Promise<Post> {
  //   return await this.prisma.query.post(args, info);
  // }

  // @Mutation('createPost')
  // async createPost(@Args() args, @Info() info): Promise<Post> {
  //   return await this.prisma.mutation.createPost(args, info);
  // }

  // @Mutation('updatePost')
  // async updatePost(@Args() args, @Info() info): Promise<Post> {
  //   return await this.prisma.mutation.updatePost(args, info);
  // }

  // @Mutation('updateManyPosts')
  // async updateManyPosts(@Args() args, @Info() info): Promise<BatchPayload> {
  //   return await this.prisma.mutation.updateManyPosts(args, info);
  // }

  // @Mutation('deletePost')
  // async deletePost(@Args() args, @Info() info): Promise<Post> {
  //   return await this.prisma.mutation.deletePost(args, info);
  // }

  // @Mutation('deleteManyPosts')
  // async deleteManyPosts(@Args() args, @Info() info): Promise<BatchPayload> {
  //   return await this.prisma.mutation.deleteManyPosts(args, info);
  // }

  // @Subscription('player')
  // onUserMutation() {
  //   return {
  //     subscribe: (obj, args, ctx, info) => {
  //       return this.prisma.subscription.players(args, info);
  //     },
  //   };
  // }
}
