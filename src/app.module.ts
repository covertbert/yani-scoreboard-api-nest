import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PrismaModule } from './prisma/prisma.module'
import { PlayersModule } from './players/players.module'
import { GraphqlOptions } from 'graphql.options'

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    PrismaModule,
    PlayersModule,
  ],
})
export class ApplicationModule {}
