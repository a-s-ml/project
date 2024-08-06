import { Module } from '@nestjs/common';
import { PrivateService } from './private.service';
import { PrivateController } from './private.controller';

@Module({
  providers: [PrivateService],
  controllers: [PrivateController],
	exports: [PrivateService]
})
export class PrivateModule {}
