import { Controller, Get, Param, Post } from '@nestjs/common';
import { PrivateService } from './private.service';

@Controller('private')
export class PrivateController {
    constructor(
        private privateService: PrivateService
      ) {}
  
      @Get()
      findAll() {
          return this.privateService.findAll()
      }
  
      @Get(":id")
      findOne(@Param("id") id: string) {
          return this.privateService.findOne(+id)
      }

      @Get("findByType/:type")
      findByType(@Param("type") type: string) {
          return this.privateService.findByType(+type)
      }
}
