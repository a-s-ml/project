import { Controller, Get, Param, Post } from '@nestjs/common';
import { FindTypeService } from './find-type.service';

@Controller('find-type')
export class FindTypeController {
    constructor(
        private findTypeService: FindTypeService
    ) { }

    @Get()
    findAll() {
        return this.findTypeService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.findTypeService.findOne(+id)
    }
}
