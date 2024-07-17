import { Injectable } from '@nestjs/common';
import { ChatService } from './chat.service';
import { createHmac } from 'crypto';
import { responseUserDataInterface } from './models/responseUserData.interface';
import { responseValidateInterface } from './models/responseValidate.interface';
import { EventInterface } from './models/events.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config';

@Injectable()
export class ValidateService {
  constructor(
    private chatService: ChatService,
    private eventEmitter: EventEmitter2,
  ) { }

  async validateUser(initData: string) {
    const urlParams = new URLSearchParams(initData);
    const setbot = urlParams.get('setbot');
    const hash = urlParams.get('hash');
    urlParams.delete('hash');
    urlParams.sort();

    const UserData: responseUserDataInterface = {
      query_id: urlParams.get('query_id'),
      user: JSON.parse(urlParams.get('user')),
      auth_date: urlParams.get('auth_date'),
    };

    let dataCheckString = '';
    for (const [key, value] of urlParams.entries()) {
      dataCheckString += `${key}=${value}\n`;
    }
    dataCheckString = dataCheckString.slice(0, -1);

    let tokenBot: string;

    if (setbot == "HAMSTER") {
      tokenBot = process.env.HAMSTER
    }
    if (setbot == "MINESWEEPER") {
      tokenBot = process.env.MINESWEEPER
    }

    const secret = createHmac('sha256', 'WebAppData').update(
      tokenBot ?? '',
    );

    const calculatedHash = createHmac('sha256', secret.digest())
      .update(dataCheckString)
      .digest('hex');

    const validate = calculatedHash === hash;

    let response: responseValidateInterface;

    if (validate) {
      return await this.chatService.createChat({
        bot: 0,
        chat: UserData.user.id,
        type: '',
        ref: UserData.query_id,
        id_str: uuidv4().replace("-", ""),
        dateUnix: Math.floor(new Date().getTime() / 1000)
      });
    }

    const event = new EventInterface();
    event.name = 'webAppValidate';
    event.bot = setbot;
    event.description = `BOT: ${setbot}\nchat: #id${UserData.user.id}\nvalidate: #${String(
      validate,
    )}\nusername: @${UserData.user.username}\nfirst_name: ${UserData.user.first_name}\nlast_name: ${UserData.user.last_name}\nlanguage_code: #${UserData.user.language_code}`;
    this.eventEmitter.emit('event', event);

    return (response = { validate, UserData });
  }
}
