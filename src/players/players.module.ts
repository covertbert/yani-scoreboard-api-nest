import { Module } from '@nestjs/common';
import { PlayersResolver } from './players.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  providers: [PlayersResolver],
  imports: [PrismaModule],
})
export class PlayersModule {}
