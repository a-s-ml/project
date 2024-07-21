import { Controller, Get, Param, Post } from '@nestjs/common';
import { GendersTypeService } from './genders-type.service';

@Controller('genders-type')
export class GendersTypeController {
    constructor(
        private gendersTypeService: GendersTypeService
      ) {}
  
      @Get()
      findAll() {
          return this.gendersTypeService.findAll()
      }
  
      @Get(":id")
      findOne(@Param("id") id: string) {
          return this.gendersTypeService.findOne(+id)
      }
}
