import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogAdminService } from './responses/logAdmin.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ChatModule } from './chat/chat.module';
import { DbModule } from './db/db.module';
import { ResponsesModule } from './responses/responses.module';
import { WebhookTgModule } from './webhook-tg/webhook-tg.module';
import { ComplaintsModule } from './complaints/complaints.module';
import { ComplaintsTypeModule } from './complaints-type/complaints-type.module';
import { GendersTypeModule } from './genders-type/genders-type.module';
import { FindTypeModule } from './find-type/find-type.module';
import { CitiesModule } from './cities/cities.module';
import { ReactionModule } from './reaction/reaction.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    DbModule,
    ResponsesModule,
    WebhookTgModule,
    ChatModule,
    ComplaintsModule,
    ComplaintsTypeModule,
    GendersTypeModule,
    FindTypeModule,
    CitiesModule,
    ReactionModule
  ],
  controllers: [AppController],
  providers: [AppService, LogAdminService],
})
export class AppModule { }
