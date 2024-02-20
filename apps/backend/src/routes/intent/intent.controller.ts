import { Intent } from '@core/lib';
import { Body, Controller, Get, Headers, Patch } from '@nestjs/common';

import { IntentService } from './intent.service';

@Controller('intents')
export class IntentController {
  constructor(private readonly intentService: IntentService) {}

  @Get()
  getIntents() {
    return this.intentService.getIntents();
  }

  @Patch('one')
  updateIntent(@Body() intent: Partial<Intent> & Pick<Intent, 'assistantID' | 'id'>, @Headers('clientID') clientID: string) {
    return this.intentService.updateIntent(intent.assistantID, intent.id, intent, clientID);
  }
}
