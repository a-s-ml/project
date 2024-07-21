import { Module } from '@nestjs/common';
import { FindTypeService } from './find-type.service';
import { FindTypeController } from './find-type.controller';

@Module({
  providers: [FindTypeService],
  controllers: [FindTypeController],
	exports: [FindTypeService]
})
export class FindTypeModule {}
