import "dotenv/config"
import axios from "axios"
import { Injectable } from "@nestjs/common"
import { OnEvent } from "@nestjs/event-emitter"
import { EventInterface } from "src/chat/models/events.interface"

@Injectable()
export class LogAdminService {
	@OnEvent("event")
	async eventAll(event: EventInterface) {
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${process.env.ADMINCHANNELID}
				&message_thread_id=11
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
				`
				${process.env.SEND_MESSAGE}
				chat_id=${process.env.ADMINCHANNELID}
				&message_thread_id=3
				&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) { }
	}

	@OnEvent("eventPrifile")
	async eventPrifile(event: EventInterface) {
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=${process.env.ADMINCHANNELID}
				&message_thread_id=5
				&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) { }
	}

}
