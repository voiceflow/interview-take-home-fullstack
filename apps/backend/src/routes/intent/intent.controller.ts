import { Controller, Get } from '@nestjs/common';

import { IntentService } from './intent.service';

@Controller('intents')
export class IntentController {
  constructor(private readonly intentService: IntentService) {}

  @Get()
  getIntents() {
    return this.intentService.getIntents();
  }
}
