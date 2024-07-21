import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { Prisma } from '@prisma/client';

@Controller('complaints')
export class ComplaintsController {
    constructor(
        private complaintsService: ComplaintsService
    ) { }

	@Post()
	create(@Body() createComplaintsDto: Prisma.complaintsCreateInput) {
		return this.complaintsService.create(createComplaintsDto)
	}
    
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.complaintsService.findOne(+id)
    }
}
