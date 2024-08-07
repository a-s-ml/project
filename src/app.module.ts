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
import { InterestsTypeModule } from './interests-type/interests-type.module';
import { InterestsModule } from './interests/interests.module';
import { PrivateModule } from './private/private.module';
import { PrivateTypeModule } from './private-type/private-type.module';
import { TargetTypeModule } from './target-type/target-type.module';
import { ChatInterestsModule } from './chat-interests/chat-interests.module';
import { ChatPrivateModule } from './chat-private/chat-private.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    DbModule,
    ResponsesModule,
    WebhookTgModule,
    ChatModule,
    ComplaintsModule,
    ComplaintsTypeModule,
    InterestsTypeModule,
    InterestsModule,
    GendersTypeModule,
    FindTypeModule,
    CitiesModule,
    PrivateModule,
    PrivateTypeModule,
    TargetTypeModule,
    ReactionModule, ChatPrivateModule, ChatInterestsModule
  ],
  controllers: [AppController],
  providers: [AppService, LogAdminService],
})
export class AppModule { }
