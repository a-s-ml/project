import { Injectable } from '@nestjs/common';
import { ChatService } from 'src/chat/chat.service';
import { CallbackQueryInterface } from 'src/interfaces/types/CallbackQuery.interface';
import { MessageInterface } from 'src/interfaces/types/Message.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InlineKeyboardMarkupInterface } from 'src/interfaces/types/InlineKeyboardMarkup.interface';
import { ResponsesService } from 'src/responses/responses.service';
import { EventInterface } from 'src/chat/models/events.interface';
import { ChatMemberUpdatedInterface } from 'src/interfaces/types/ChatMemberUpdated.interface';

@Injectable()
export class CallbackQueryService {
  constructor(
    private eventEmitter: EventEmitter2,
    private chatService: ChatService,
    private responsesService: ResponsesService,
  ) {}

  async update(callbackQuery: CallbackQueryInterface) {
    console.log(callbackQuery.data)
    const data = callbackQuery.data.split('_');
    switch (data[0]) {
      case 'answer':
        return;
      default:
        break;
    }
  }

  async message(message: MessageInterface) {
    if (message.text === '/start') {
      console.log(message.text)
      const event = new EventInterface();
      event.name = 'messageToBot';
      event.description = `chat: #id${message.from.id}\n@${message.from.username}\ntext: #${String(message.text).slice(1)}`;
      this.eventEmitter.emit('event', event);
      await this.chatService.verificationExistence(message.from);
      const replyMarkup: InlineKeyboardMarkupInterface = {
        inline_keyboard: [
          [
            {
              text: '@datingcopybot',
              web_app: {
                url: `https://t.me/datingcopybot/app`,
              },
            },
          ],
        ],
      };
      const text = `<b>Здравствуйте!</b>\n\n@datingcopybot`;
      await this.responsesService.sendMessage({
        chat_id: message.from.id,
        text: encodeURI(text),
        reply_markup: replyMarkup,
      });
    }
  }

  async member(memberData: ChatMemberUpdatedInterface) {
		await this.chatService.verificationExistence(memberData.from)
		if (
			memberData.new_chat_member.status === "member" ||
			memberData.new_chat_member.status === "administrator"
		) {
			await fetch(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${memberData.chat.id}
				&text=${encodeURI("<b>Здравствуйте!</b>")}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
			const event = new EventInterface();
			event.name = "newChatMember";
			event.description = `status: #${memberData.new_chat_member.status}\ngroup: #id${-memberData.chat.id}\nchat: #id${memberData.from.id}\n@${memberData.from.username}`;
			this.eventEmitter.emit('event', event);
		}
	}
}
