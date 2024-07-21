import { Module } from '@nestjs/common';
import { ComplaintsTypeService } from './complaints-type.service';
import { ComplaintsTypeController } from './complaints-type.controller';

@Module({
  providers: [ComplaintsTypeService],
  controllers: [ComplaintsTypeController],
	exports: [ComplaintsTypeService]
})
export class ComplaintsTypeModule {}
