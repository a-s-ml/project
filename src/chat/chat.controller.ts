import { Controller, Body, Patch, Param, Get, Header, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Prisma } from '@prisma/client';
import { ValidateService } from './validate.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('chat')
export class ChatController {
  constructor(
    private chatService: ChatService,
    private validateService: ValidateService,
  ) { }

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
  groupMemberCountById(@Param('chat') chat: string) {
    return this.chatService.groupMemberCountById(chat as unknown as bigint);
  }

  @Get('findByChatId/:chat')
  findByChatId(@Param('chat') chat: string) {
    return this.chatService.findByChatId(chat as unknown as bigint);
  }

  @Get('find/:chat/:age')
  findForm(
    @Param('chat') chat: string,
    @Param('age') age: string,
  ) {
    return this.chatService.findForm(chat as unknown as bigint, age);
  }

  @Get('tgGetFilePhoto/:unic_id')
  // @Header("Content-type", "image/jpeg;base64")
  async tgGetFilePhoto(@Param('unic_id') unic_id: string) {
    const response = await this.chatService.tgGetFilePhoto(unic_id);
    return response;
  }

  @Get('countChatByAge/:chat/:age')
  countChatByAge(
    @Param('chat') chat: string,
    @Param('age') age: string,
  ) {
    return this.chatService.countChatByAge(chat as unknown as bigint, age);
  }

  @Get('moderate/:chat/:mod')
  moderate(
    @Param('chat') chat: string,
    @Param('mod') mod: string,
  ) {
    return this.chatService.moderate(chat as unknown as bigint, +mod);
  }

  @Patch(':chat')
  update(
    @Param('chat') chat: string,
    @Body() updateChatDto: Prisma.chatUpdateInput,
  ) {
    return this.chatService.update(chat as unknown as bigint, updateChatDto);
  }

  @Post('upload/:chat/:id')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @Param('chat') chat: string,
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.chatService.uploadFile(chat as unknown as bigint, file, +id);
  }

  @Post('deleteFile/:chat/:id')
  @UseInterceptors(FileInterceptor('file'))
  deleteFile(
    @Param('chat') chat: string,
    @Param('id') id: string,
  ) {
    return this.chatService.deleteFile(chat as unknown as bigint, +id);
  }

  @Get('moderateOK/:chat')
  moderateOK(
    @Param('chat') chat: string,
  ) {
    return this.chatService.moderateOK(chat as unknown as bigint);
  }

  @Get('moderateBlock/:chat')
  moderateBlock(
    @Param('chat') chat: string,
  ) {
    return this.chatService.moderateBlock(chat as unknown as bigint);
  }
}

