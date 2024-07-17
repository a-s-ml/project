import { LocationInterface } from "./Location.interface"
import { UserInterface } from "./User.interface"

export class ChosenInlineResultInterface {
	result_id: string
	from: UserInterface
	location?: LocationInterface
	inline_message_id?: string
	query: string
}
