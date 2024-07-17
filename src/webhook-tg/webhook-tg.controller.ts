import { Body, Controller, Post } from "@nestjs/common"
import { WebhookTgService } from "./webhook-tg.service"
import { UpdateInterface } from "src/interfaces/types/Update.dto"

@Controller("webhook-tg")
export class WebhookTgController {
	constructor(private webhookTg: WebhookTgService) {}

	@Post()
	update(@Body() updateDto: UpdateInterface) {
		return this.webhookTg.update(updateDto)
	}
}
