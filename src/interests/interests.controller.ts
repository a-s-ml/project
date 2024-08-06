import { Controller, Get, Param, Post } from '@nestjs/common';
import { InterestsService } from './interests.service';

@Controller('interests')
export class InterestsController {
    constructor(
        private interestsService: InterestsService
      ) {}
  
      @Get()
      findAll() {
          return this.interestsService.findAll()
      }
  
      @Get(":id")
      findOne(@Param("id") id: string) {
          return this.interestsService.findOne(+id)
      }

      @Get("findByType/:type")
      findByType(@Param("type") type: string) {
          return this.interestsService.findByType(+type)
      }
}
