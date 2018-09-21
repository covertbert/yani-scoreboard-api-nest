import { Module } from '@nestjs/common'
import { GamesResolver } from './games.resolver'
import { PrismaModule } from 'prisma/prisma.module'

@Module({
  providers: [GamesResolver],
  imports: [PrismaModule],
})
export class GamesModule {}
