import { Controller, Get } from '@nestjs/common';

import { UtteranceService } from './utterance.service';

@Controller('utterances')
export class UtteranceController {
  constructor(private readonly utteranceService: UtteranceService) {}

  @Get()
  getUtterances() {
    return this.utteranceService.getUtterances();
  }
}
