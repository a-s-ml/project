import { ChatInterface } from "./Chat.interface"
import { UserInterface } from "./User.interface"

export class PollAnswerInterface {
	poll_id: string
	voter_chat?: ChatInterface
	user?: UserInterface
	option_ids?: number[]
}
