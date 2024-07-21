import { Module } from '@nestjs/common';
import { GendersTypeService } from './genders-type.service';
import { GendersTypeController } from './genders-type.controller';

@Module({
  providers: [GendersTypeService],
  controllers: [GendersTypeController],
	exports: [GendersTypeService]
})
export class GendersTypeModule {}
