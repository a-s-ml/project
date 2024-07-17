import { LocationInterface } from "./Location.interface"
import { UserInterface } from "./User.interface"

export class InlineQueryInterface {
	id: string
	from: UserInterface
	query: string
	offset: string
	chat_type?: string
	location?: LocationInterface
}
