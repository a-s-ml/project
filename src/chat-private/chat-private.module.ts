import { Module } from '@nestjs/common';
import { ChatPrivateController } from './chat-private.controller';
import { ChatPrivateService } from './chat-private.service';

@Module({
  providers: [ChatPrivateService],
  controllers: [ChatPrivateController],
	exports: [ChatPrivateService]
})
export class ChatPrivateModule {}
