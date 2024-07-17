import { InlineKeyboardMarkupInterface } from "../types/InlineKeyboardMarkup.interface"

export class EditMessageMediaMethod {
	chat_id?: bigint
	message_id?: number
	inline_message_id?: string
	media?: string
	reply_markup?: InlineKeyboardMarkupInterface
}