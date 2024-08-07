import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ResponsesModule } from 'src/responses/responses.module';
import { ValidateService } from './validate.service';
import { ChatPrivateService } from 'src/chat-private/chat-private.service';
import { ChatInterestsService } from 'src/chat-interests/chat-interests.service';

@Module({
  imports: [ResponsesModule],
  controllers: [ChatController],
  providers: [ChatService, ValidateService, ChatPrivateService, ChatInterestsService],
  exports: [ChatService],
})
export class ChatModule { }
