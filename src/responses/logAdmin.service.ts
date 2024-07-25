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
		console.log(`${process.env.SEND_MESSAGE}chat_id=${process.env.ADMINCHANNELID}&message_thread_id=3&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}&disable_web_page_preview=true&parse_mode=HTML`)
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

	@OnEvent("profile")
	async profile(event: EventInterface) {
		try {
			await axios.get(`${event.description}`)
		} catch (error) { }
	}

	@OnEvent("moderate")
	async moderate(event: EventInterface) {
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

	@OnEvent("reactions")
	async reactions(event: EventInterface) {
		try {
			await axios.get(`${process.env.SEND_MESSAGE}chat_id=${process.env.ADMINCHANNELID}&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}&disable_web_page_preview=true&parse_mode=HTML`)
		} catch (error) { }
	}

	@OnEvent("complaints")
	async complaints(event: EventInterface) {
		try {
			await axios.get(`${process.env.SEND_MESSAGE}chat_id=${process.env.ADMINCHANNELID}&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}&disable_web_page_preview=true&parse_mode=HTML`)
		} catch (error) { }
	}

}
