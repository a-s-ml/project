import { InlineKeyboardMarkupInterface } from "../types/InlineKeyboardMarkup.interface"

export class editMessageReplyMarkupMethod {
	chat_id?: bigint
	message_id?: number
	inline_message_id?: string
	reply_markup?: InlineKeyboardMarkupInterface
}
