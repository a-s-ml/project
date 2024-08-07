import { Module } from '@nestjs/common';
import { ChatInterestsController } from './chat-interests.controller';
import { ChatInterestsService } from './chat-interests.service';

@Module({
  providers: [ChatInterestsService],
  controllers: [ChatInterestsController],
	exports: [ChatInterestsService]
})
export class ChatInterestsModule {}
