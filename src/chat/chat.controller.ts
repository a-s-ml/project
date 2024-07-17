import { Controller, Body, Patch, Param, Get, Header } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Prisma } from '@prisma/client';
import { ValidateService } from './validate.service';

@Controller('chat')
export class ChatController {
  constructor(
    private chatService: ChatService,
    private validateService: ValidateService,
  ) {}

  @Get('validateUser/:initData')
  initData(@Param('initData') initData: string) {
    return this.validateService.validateUser(initData);
  }

  @Get('findByReferal/:id')
  findByReferal(@Param('id') id: string) {
    return this.chatService.findByReferal(id);
  }

  @Get('groupInfoById/:chat')
  groupInfoById(@Param('chat') chat: bigint) {
    return this.chatService.groupInfoById(chat);
  }

  @Get('groupMemberCountById/:chat')
  groupMemberCountById(@Param('chat') chat: bigint) {
    return this.chatService.groupMemberCountById(chat);
  }

  @Get('findByChatId/:chat')
  findByChatId(@Param('chat') chat: bigint) {
    return this.chatService.findByChatId(chat);
  }

  @Get('tgGetFilePhoto/:unic_id')
  // @Header("Content-type", "image/jpeg;base64")
  async tgGetFilePhoto(@Param('unic_id') unic_id: string) {
    const response = await this.chatService.tgGetFilePhoto(unic_id);
    return response;
  }

  @Patch(':chat')
  update(
    @Param('chat') chat: string,
    @Body() updateChatDto: Prisma.chatUpdateInput,
  ) {
    return this.chatService.update(chat as unknown as bigint, updateChatDto);
  }
}
