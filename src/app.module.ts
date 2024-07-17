import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogAdminService } from './responses/logAdmin.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ChatModule } from './chat/chat.module';
import { DbModule } from './db/db.module';
import { ResponsesModule } from './responses/responses.module';
import { WebhookTgModule } from './webhook-tg/webhook-tg.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    DbModule,
    ResponsesModule,
    WebhookTgModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService, LogAdminService],
})
export class AppModule { }
