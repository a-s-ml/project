import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ResponsesModule } from 'src/responses/responses.module';
import { ValidateService } from './validate.service';

@Module({
  imports: [ResponsesModule],
  controllers: [ChatController],
  providers: [ChatService, ValidateService],
  exports: [ChatService],
})
export class ChatModule {}
