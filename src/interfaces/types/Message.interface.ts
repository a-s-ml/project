import { AnimationInterface } from "./Animation.interface"
import { AudioInterface } from "./Audio.interface"
import { ChatInterface } from "./Chat.interface"
import { DocumentInterface } from "./Document.interface"
import { InlineKeyboardMarkupInterface } from "./InlineKeyboardMarkup.interface"
import { LocationInterface } from "./Location.interface"
import { MessageEntityInterface } from "./MessageEntity.dto"
import { PhotoSizeInterface } from "./PhotoSize.interface"
import { PollInterface } from "./Poll.interface"
import { WebAppInfoInterface } from "./WebAppInfo.interface"
import { WriteAccessAllowedInterface } from "./WriteAccessAllowed.interface"
import { UserInterface } from "./User.interface"

export class MessageInterface {
	message_id: number
	message_thread_id?: number
	from?: UserInterface
	sender_chat?: ChatInterface
	date: number
	chat: ChatInterface
	forward_from?: UserInterface
	forward_from_chat?: ChatInterface
	forward_from_message_id?: number
	forward_signature?: string
	forward_sender_name?: string
	forward_date?: number
	is_topic_message?: boolean
	is_automatic_forward?: boolean
	reply_to_message?: MessageInterface
	via_bot?: UserInterface
	edit_date?: number
	has_protected_content?: boolean
	media_group_id?: string
	author_signature?: string
	text?: string
	entities?: Array<MessageEntityInterface>
	animation?: AnimationInterface
	audio?: AudioInterface
	document?: DocumentInterface
	photo?: Array<PhotoSizeInterface>
	sticker?: object
	story?: object
	video?: object
	video_note?: object
	voice?: object
	caption?: string
	caption_entities?: Array<MessageEntityInterface>
	has_media_spoiler?: boolean
	contact?: object
	dice?: object
	game?: object
	poll?: PollInterface
	venue?: object
	location?: LocationInterface
	new_chat_members?: Array<UserInterface>
	left_chat_member?: UserInterface
	new_chat_title?: string
	new_chat_photo?: Array<PhotoSizeInterface>
	delete_chat_photo?: boolean
	group_chat_created?: boolean
	supergroup_chat_created?: boolean
	channel_chat_created?: boolean
	message_auto_delete_timer_changed?: object
	migrate_to_chat_id?: number
	migrate_from_chat_id?: number
	pinned_message?: MessageInterface
	invoice?: object
	successful_payment?: object
	user_shared?: object
	chat_shared?: object
	connected_website?: string
	write_access_allowed?: WriteAccessAllowedInterface
	passport_data?: object
	proximity_alert_triggered?: object
	forum_topic_created?: object
	forum_topic_edited?: object
	forum_topic_closed?: object
	forum_topic_reopened?: object
	general_forum_topic_hidden?: object
	general_forum_topic_unhidden?: object
	video_chat_scheduled?: object
	video_chat_started?: object
	video_chat_ended?: object
	video_chat_participants_invited?: object
	web_app_data?: WebAppInfoInterface
	reply_markup?: InlineKeyboardMarkupInterface
}
