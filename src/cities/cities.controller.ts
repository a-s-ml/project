import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { Prisma } from '@prisma/client';

@Controller('cities')
export class CitiesController {
    constructor(
        private citiesService: CitiesService
    ) { }

	@Post()
	create(@Body() createCitiesDto: Prisma.citiesCreateInput) {
		return this.citiesService.create(createCitiesDto)
	}

    @Get('search/:string')
    search(@Param("string") string: string) {
        return this.citiesService.search(string)
    }

    @Get()
    findAll() {
        return this.citiesService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.citiesService.findOne(+id)
    }
}
