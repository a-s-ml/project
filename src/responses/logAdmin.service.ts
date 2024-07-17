import "dotenv/config"
import axios from "axios"
import { Injectable } from "@nestjs/common"
import { OnEvent } from "@nestjs/event-emitter"
import { EventInterface } from "src/chat/models/events.interface"

@Injectable()
export class LogAdminService {
	@OnEvent("event")
	async handleOrderCreatedEvent(event: EventInterface) {
		let tokenBot: string;
		if (event.bot == "HAMSTER") {
			tokenBot = process.env.HAMSTER
		}
		if (event.bot == "MINESWEEPER") {
			tokenBot = process.env.MINESWEEPER
		}
		try {
			await axios.get(
				`
				https://api.telegram.org/bot${tokenBot}/sendMessage?
				chat_id=5949135498
				&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) { }
	}

	@OnEvent("eventPost")
	async eventPost(event: EventInterface) {
		try {
			await axios.get(
				`
				${process.env.SEND_MESSAGE}
				chat_id=5949135498
				&text=${encodeURIComponent(`#${event.name}\n${event.description}`)}
				&disable_web_page_preview=true
				&parse_mode=HTML
				`
			)
		} catch (error) { }
	}

}
