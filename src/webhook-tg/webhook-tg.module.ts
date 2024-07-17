import { Module } from '@nestjs/common';
import { ChatModule } from 'src/chat/chat.module';
import { WebhookTgController } from './webhook-tg.controller';
import { WebhookTgService } from './webhook-tg.service';
import { CallbackQueryService } from './callbackQuery.service';
import { CallbackAnswerModule } from './callbackQuery/callbackAnswer.module';

@Module({
  imports: [ChatModule, CallbackAnswerModule],
  controllers: [WebhookTgController],
  providers: [WebhookTgService, CallbackQueryService],
  exports: [WebhookTgService],
})
export class WebhookTgModule {}
