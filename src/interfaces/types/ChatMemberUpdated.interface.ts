import { ChatInterface } from "./Chat.interface"
import { ChatInviteLinkInterface } from "./ChatInviteLink.interface"
import { ChatMemberInterface } from "./ChatMember.interface"
import { UserInterface } from "./User.interface"

export class ChatMemberUpdatedInterface {
	chat: ChatInterface
	from: UserInterface
	date: number
	old_chat_member: ChatMemberInterface
	new_chat_member: ChatMemberInterface
	invite_link?: ChatInviteLinkInterface
	via_chat_folder_invite_link?: boolean
}
