import { Module } from '@nestjs/common';
import { InterestsController } from './interests.controller';
import { InterestsService } from './interests.service';

@Module({
  providers: [InterestsService],
  controllers: [InterestsController],
	exports: [InterestsService]
})
export class InterestsModule {}
