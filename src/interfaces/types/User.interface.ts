export class UserInterface {
	id: bigint
	is_bot: boolean
	first_name: string
	last_name?: string
	username?: string
	language_code?: string
	is_premium?: boolean
	added_to_attachment_menut_name?: boolean
	can_join_groups?: boolean
	can_read_all_group_messages?: boolean
	supports_inline_queries?: boolean
}
