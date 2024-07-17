import { Injectable } from '@nestjs/common';
import { ChatService } from 'src/chat/chat.service';
import { CallbackQueryInterface } from 'src/interfaces/types/CallbackQuery.interface';
import { MessageInterface } from 'src/interfaces/types/Message.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InlineKeyboardMarkupInterface } from 'src/interfaces/types/InlineKeyboardMarkup.interface';
import { ResponsesService } from 'src/responses/responses.service';
import { EventInterface } from 'src/chat/models/events.interface';

@Injectable()
export class CallbackQueryService {
  constructor(
    private eventEmitter: EventEmitter2,
    private chatService: ChatService,
    private responsesService: ResponsesService,
  ) {}

  async update(callbackQuery: CallbackQueryInterface) {
    const data = callbackQuery.data.split('_');
    switch (data[0]) {
      case 'answer':
        return;
      default:
        break;
    }
  }

  async message(message: MessageInterface) {
    if (message.text === '/account' || message.text === '/start') {
      const event = new EventInterface();
      event.name = 'messageToBot';
      event.description = `chat: #id${message.from.id}\n@${message.from.username}\ntext: #${String(message.text).slice(1)}`;
      this.eventEmitter.emit('event', event);
      await this.chatService.verificationExistence(message.from);
      const replyMarkup: InlineKeyboardMarkupInterface = {
        inline_keyboard: [
          [
            {
              text: 'Настройки ViktorinaOnlineBot',
              web_app: {
                url: `https://80q.ru/viktorinaonlinebot`,
              },
            },
          ],
        ],
      };
      const text = `
			<b>Здравствуйте!</b>\n\nСейчас проходит оптимизация и глобальное обновление бота.\nСвои пожелания по функционалу бота Вы можете отправить разработчику через приложение...
			`;
      await this.responsesService.sendMessage({
        chat_id: message.from.id,
        text: encodeURI(text),
        reply_markup: replyMarkup,
      });
    }
  }
}
