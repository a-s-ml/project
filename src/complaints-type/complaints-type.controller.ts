import { Controller, Get, Param, Post } from '@nestjs/common';
import { ComplaintsTypeService } from './complaints-type.service';

@Controller('complaints-type')
export class ComplaintsTypeController {
    constructor(
        private complaintsTypeService: ComplaintsTypeService
      ) {}
  
      @Get()
      findAll() {
          return this.complaintsTypeService.findAll()
      }
  
      @Get(":id")
      findOne(@Param("id") id: string) {
          return this.complaintsTypeService.findOne(+id)
      }
}
