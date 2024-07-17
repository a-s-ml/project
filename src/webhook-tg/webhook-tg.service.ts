import { Injectable } from '@nestjs/common';
import { CallbackQueryService } from './callbackQuery.service';
import { UpdateInterface } from 'src/interfaces/types/Update.dto';

@Injectable()
export class WebhookTgService {
  constructor(private callbackQueryService: CallbackQueryService) {}

  update(updateDto: UpdateInterface) {
    if (updateDto.callback_query) {
      return this.callbackQueryService.update(updateDto.callback_query);
    }
    if (updateDto.message?.text) {
      return this.callbackQueryService.message(updateDto.message);
    }
  }
}
