import { LoginUrlInterface } from "./LoginUrl.interface"
import { SwitchInlineQueryChosenChatInterface } from "./SwitchInlineQueryChosenChat.interface"
import { WebAppInfoInterface } from "./WebAppInfo.interface"

export type  InlineKeyboardButtonInterface = {
	text: string
	url?: string
	callback_data?: string
	web_app?: WebAppInfoInterface
	login_url?: LoginUrlInterface
	switch_inline_query?: string
	switch_inline_query_current_chat?: string
	switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChatInterface
	callback_game?: string
	pay?: boolean
}
