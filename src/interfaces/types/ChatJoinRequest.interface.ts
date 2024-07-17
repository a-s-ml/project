import { ChatInterface } from "./Chat.interface"
import { ChatInviteLinkInterface } from "./ChatInviteLink.interface"
import { UserInterface } from "./User.interface"

export class ChatJoinRequestInterface {
	chat: ChatInterface
	from: UserInterface
	user_chat_id: number
	date: number
	bio?: string
	invite_link?: ChatInviteLinkInterface
}
