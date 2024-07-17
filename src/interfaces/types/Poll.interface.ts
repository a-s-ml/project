import { MessageEntityInterface } from "./MessageEntity.dto"
import { PollTypeInterface } from "./PollType.interface"
import { PoolOptionsInterface } from "./pollOptions.interface"

export class PollInterface {
	id: string
	question: string
	options: PoolOptionsInterface[]
	total_voter_count: number
	is_closed: boolean
	is_anonymous: boolean
	type: PollTypeInterface
	allows_multiple_answers: boolean
	correct_option_id?: number
	explanation?: string
	explanation_entities?: MessageEntityInterface
	open_period?: number
	close_date?: number
}
