import { Controller, Get, Param, Post } from '@nestjs/common';
import { PrivateTypeService } from './private-type.service';

@Controller('private-type')
export class PrivateTypeController {
    constructor(
        private privateTypeService: PrivateTypeService
      ) {}
  
      @Get()
      findAll() {
          return this.privateTypeService.findAll()
      }
  
      @Get(":id")
      findOne(@Param("id") id: string) {
          return this.privateTypeService.findOne(+id)
      }
}
