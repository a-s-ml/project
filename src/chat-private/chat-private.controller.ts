import { Controller, Get, Param, Post } from '@nestjs/common';
import { ChatPrivateService } from './chat-private.service';

@Controller('chat-private')
export class ChatPrivateController {
    constructor(
        private chatPrivateService: ChatPrivateService
      ) {}
  
      @Get(":id")
      findOne(@Param("id") id: string) {
          return this.chatPrivateService.findOne(+id)
      }

      @Get('findByChatId/:chat')
      findByChatId(@Param('chat') chat: string) {
        return this.chatPrivateService.findByChatId(chat as unknown as bigint);
      }
}
