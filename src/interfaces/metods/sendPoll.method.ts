import { InlineKeyboardMarkupInterface } from "../types/InlineKeyboardMarkup.interface"
import { MessageEntityInterface } from "../types/MessageEntity.dto"
import { PollTypeInterface } from "../types/PollType.interface"

export class SendPollMethod {
	chat_id: bigint
	message_thread_id?: number
	question: string
	options: Array<string>
	is_anonymous?: boolean
	type?: string //PollTypeInterface
	allows_multiple_answers?: boolean
	correct_option_id?: number
	explanation?: string
	explanation_parse_mode?: string
	explanation_entities?: Array<MessageEntityInterface>
	open_period?: number
	close_date?: number
	is_closed?: boolean
	disable_notification?: boolean
	protect_content?: boolean
	reply_to_message_id?: number
	allow_sending_without_reply?: boolean
	reply_markup?: InlineKeyboardMarkupInterface
}
