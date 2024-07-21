import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReactionService } from './reaction.service';
import { Prisma } from '@prisma/client';

@Controller('reaction')
export class ReactionController {
    constructor(
        private reactionService: ReactionService
    ) { }

	@Post()
	create(@Body() createComplaintsDto: Prisma.complaintsCreateInput) {
		return this.reactionService.create(createComplaintsDto)
	}
    
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.reactionService.findOne(+id)
    }
}
