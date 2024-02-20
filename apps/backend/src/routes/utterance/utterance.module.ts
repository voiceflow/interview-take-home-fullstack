import { Module } from '@nestjs/common';

import { UtteranceController } from './utterance.controller';
import { UtteranceService } from './utterance.service';

@Module({
  controllers: [UtteranceController],
  providers: [UtteranceService],
})
export class UtteranceModule {}
