import { Module } from '@nestjs/common';
import { TargetTypeController } from './target-type.controller';
import { TargetTypeService } from './target-type.service';

@Module({
  providers: [TargetTypeService],
  controllers: [TargetTypeController],
	exports: [TargetTypeService]
})
export class TargetTypeModule {}
