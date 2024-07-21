import { Module } from '@nestjs/common';
import { ReactionService } from './reaction.service';
import { ReactionController } from './reaction.controller';

@Module({
  providers: [ReactionService],
  controllers: [ReactionController],
	exports: [ReactionService]
})
export class ReactionModule {}
