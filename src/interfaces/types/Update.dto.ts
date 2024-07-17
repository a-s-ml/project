import { CallbackQueryInterface } from "./CallbackQuery.interface"
import { ChatJoinRequestInterface } from "./ChatJoinRequest.interface"
import { ChatMemberInterface } from "./ChatMember.interface"
import { ChatMemberUpdatedInterface } from "./ChatMemberUpdated.interface"
import { ChosenInlineResultInterface } from "./ChosenInlineResult.interface"
import { InlineQueryInterface } from "./InlineQuery.interface"
import { MessageInterface } from "./Message.interface"
import { PollInterface } from "./Poll.interface"
import { PreCheckoutQueryInterface } from "./PreCheckoutQuery.interface"
import { ShippingQueryInterface } from "./ShippingQuery.interface"
import { PollAnswerInterface } from "./pollAnswer.interface"

export class UpdateInterface {
	update_id: number
	message?: MessageInterface
	edited_message?: MessageInterface
	channel_post?: MessageInterface
	edited_channel_post?: MessageInterface
	inline_query?: InlineQueryInterface
	chosen_inline_result?: ChosenInlineResultInterface
	callback_query?: CallbackQueryInterface
	shipping_query?: ShippingQueryInterface
	pre_checkout_query?: PreCheckoutQueryInterface
	poll?: PollInterface
	poll_answer?: PollAnswerInterface
	my_chat_member?: ChatMemberUpdatedInterface
	chat_member?: ChatMemberInterface
	chat_join_request?: ChatJoinRequestInterface
}
