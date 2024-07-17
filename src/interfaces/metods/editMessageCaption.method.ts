import { InlineKeyboardMarkupInterface } from "../types/InlineKeyboardMarkup.interface"
import { MessageEntityInterface } from "../types/MessageEntity.dto"

export class EditMessageCaptionMethod {
	chat_id?: bigint
	message_id?: number
	inline_message_id?: string
	caption?: string
	parse_mode?: string
	caption_entities?: Array<MessageEntityInterface>
	reply_markup?: InlineKeyboardMarkupInterface
}