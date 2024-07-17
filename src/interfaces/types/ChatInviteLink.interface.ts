import { UserInterface } from "./User.interface"

export class ChatInviteLinkInterface {
	invite_link: string
	creator: UserInterface
	creates_join_request: boolean
	is_primary: boolean
	is_revoked: boolean
	name?: string
	expire_date?: number
	member_limit?: number
	pending_join_request_count?: number
}
