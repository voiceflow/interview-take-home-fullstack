import { Module } from '@nestjs/common';

import { IntentController } from './intent.controller';
import { IntentService } from './intent.service';

@Module({
  controllers: [IntentController],
  providers: [IntentService],
})
export class IntentModule {}
