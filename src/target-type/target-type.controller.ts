import { Controller, Get, Param, Post } from '@nestjs/common';
import { TargetTypeService } from './target-type.service';

@Controller('target-type')
export class TargetTypeController {
    constructor(
        private targetTypeService: TargetTypeService
      ) {}
  
      @Get()
      findAll() {
          return this.targetTypeService.findAll()
      }
  
      @Get(":id")
      findOne(@Param("id") id: string) {
          return this.targetTypeService.findOne(+id)
      }
}
