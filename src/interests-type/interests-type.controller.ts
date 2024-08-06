import { Controller, Get, Param, Post } from '@nestjs/common';
import { InterestsTypeService } from './interests-type.service';

@Controller('interests-type')
export class InterestsTypeController {
    constructor(
        private interestsTypeService: InterestsTypeService
      ) {}
  
      @Get()
      findAll() {
          return this.interestsTypeService.findAll()
      }
  
      @Get(":id")
      findOne(@Param("id") id: string) {
          return this.interestsTypeService.findOne(+id)
      }
}
