import { Module } from '@nestjs/common';
import { PrivateTypeController } from './private-type.controller';
import { PrivateTypeService } from './private-type.service';

@Module({
  providers: [PrivateTypeService],
  controllers: [PrivateTypeController],
	exports: [PrivateTypeService]
})
export class PrivateTypeModule {}
