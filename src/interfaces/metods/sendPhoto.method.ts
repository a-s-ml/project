import { InlineKeyboardMarkupInterface } from "../types/InlineKeyboardMarkup.interface"
import { MessageEntityInterface } from "../types/MessageEntity.dto"

export class SendPhotoMethod {
	chat_id: bigint
	message_thread_id?: number
	photo: string
	caption?: string
	parse_mode?: string
	caption_entities?: Array<MessageEntityInterface>
	has_spoiler?: boolean
	disable_notification?: boolean
	protect_content?: boolean
	reply_to_message_id?: number
	allow_sending_without_reply?: boolean
	reply_markup?: InlineKeyboardMarkupInterface
}
