import "dotenv/config"
import axios from "axios"
import { Injectable } from "@nestjs/common"
import { OnEvent } from "@nestjs/event-emitter"
import { EventInterface } from "src/chat/models/events.interface"
import { InlineKeyboardMarkupInterface } from "src/interfaces/types/InlineKeyboardMarkup.interface"
import { ResponsesService } from "./responses.service"

@Injectable()
export class LogAdminService {
	constructor(
		private responsesService: ResponsesService,
	) { }

	@OnEvent("event")
	async eventAll(event: EventInterface) {
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${process.env.ADMINCHANNELID}
				&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) { }
	}

	@OnEvent("eventAuth")
	async eventAuth(event: EventInterface) {
		try {
			await axios.get(
				`${process.env.SEND_MESSAGE}chat_id=${process.env.ADMINCHANNELID}&message_thread_id=39&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}&disable_web_page_preview=true&parse_mode=HTML`
			)
		} catch (error) { }
	}

	@OnEvent("newUser")
	async newUser(event: EventInterface) {
		try {
			await axios.get(
				`${process.env.SEND_MESSAGE}chat_id=${process.env.ADMINCHANNELID}&message_thread_id=42&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}&disable_web_page_preview=true&parse_mode=HTML`
			)
		} catch (error) { }
	}

	@OnEvent("updateProfile")
	async profile(event: EventInterface) {
		console.log(`${process.env.SEND_MESSAGE}chat_id=${process.env.ADMINCHANNELID}&message_thread_id=44&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}&disable_web_page_preview=true&parse_mode=HTML`)
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${process.env.ADMINCHANNELID}
				&message_thread_id=44
				&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) { }
	}

}
