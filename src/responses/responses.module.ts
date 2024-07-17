import { Global, Module } from "@nestjs/common"
import { ResponsesService } from "./responses.service"
import { ResponsesController } from "./responses.controller"
import { GetTgService } from "./getTgAPI.service"
import { HttpModule } from "@nestjs/axios"

@Global()
@Module({
	imports: [HttpModule],
	controllers: [ResponsesController],
	providers: [ResponsesService, GetTgService],
	exports: [ResponsesService, GetTgService]
})
export class ResponsesModule {}
