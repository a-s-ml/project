import { InlineKeyboardMarkupInterface } from "../types/InlineKeyboardMarkup.interface"
import { MessageEntityInterface } from "../types/MessageEntity.dto"

export type SendMessageMethod = {
	chat_id: bigint
	message_thread_id?: number
	text: string
	parse_mode?: string
	entities?: Array<MessageEntityInterface>
	disable_web_page_preview?: boolean
	disable_notification?: boolean
	protect_content?: boolean
	reply_to_message_id?: number
	allow_sending_without_reply?: boolean
	reply_markup?: InlineKeyboardMarkupInterface
}
