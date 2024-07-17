import { MessageInterface } from "./Message.interface"
import { UserInterface } from "./User.interface"

export class CallbackQueryInterface {
	id: string
	from: UserInterface
	message?: MessageInterface
	inline_message_id?: string
	chat_instance: string
	data?: string
	game_short_name?: string
}
