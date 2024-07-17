import { InlineKeyboardMarkupInterface } from "../types/InlineKeyboardMarkup.interface"
import { MessageEntityInterface } from "../types/MessageEntity.dto"

export class EditMessageTextMethod {
	chat_id?: bigint
	message_id?: number
	inline_message_id?: string
	text: string
	parse_mode?: string
	entities?: Array<MessageEntityInterface>
	disable_web_page_preview?: boolean
	reply_markup?: InlineKeyboardMarkupInterface
}
