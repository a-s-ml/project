import { Controller, Body, Patch, Param, Get, Header, Post, UploadedFile, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Prisma } from '@prisma/client';
import { ValidateService } from './validate.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ProfileChangeTypeRes } from './models/newModel';

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

  @Get('InfoByChatId/:chat')
  InfoByChatId(@Param('chat') chat: string) {
    return this.chatService.InfoByChatId(chat as unknown as bigint);
  }

  @Get('tgGetFilePhoto/:unic_id')
  // @Header("Content-type", "image/jpeg;base64")
  async tgGetFilePhoto(@Param('unic_id') unic_id: string) {
    const response = await this.chatService.tgGetFilePhoto(unic_id);
    return response;
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

  @Post('change/:chat')
  change(
    @Param('chat') chat: string,
    @Body() data: ProfileChangeTypeRes
  ) {
    console.log('chat', chat);
    console.log('data', data);
  }

  @Post('upload/:chat')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'img0', maxCount: 1 },
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
  ]))
  uploadFile(
    @Param('chat') chat: string,
    @UploadedFiles() images: { img0?: Express.Multer.File[], img1?: Express.Multer.File[], img2?: Express.Multer.File[] },
  ) {
    console.log('chat', chat);
    console.log('images', images);
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

