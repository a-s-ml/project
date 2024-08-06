import { Module } from '@nestjs/common';
import { InterestsTypeController } from './interests-type.controller';
import { InterestsTypeService } from './interests-type.service';

@Module({
  providers: [InterestsTypeService],
  controllers: [InterestsTypeController],
	exports: [InterestsTypeService]
})
export class InterestsTypeModule {}
