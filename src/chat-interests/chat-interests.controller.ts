import { Controller, Get, Param, Post } from '@nestjs/common';
import { ChatInterestsService } from './chat-interests.service';

@Controller('chat-interests')
export class ChatInterestsController {
    constructor(
        private chatInterestsService: ChatInterestsService
      ) {}
  
      @Get(":id")
      findOne(@Param("id") id: string) {
          return this.chatInterestsService.findOne(+id)
      }

      @Get('findByChatId/:chat')
      findByChatId(@Param('chat') chat: string) {
        return this.chatInterestsService.findByChatId(chat as unknown as bigint);
      }
}
