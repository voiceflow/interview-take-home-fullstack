import { Utterance } from '@core/lib';
import { Body, Controller, Delete, Get, Headers, Patch, Post } from '@nestjs/common';

import { UtteranceService } from './utterance.service';

@Controller('utterances')
export class UtteranceController {
  constructor(private readonly utteranceService: UtteranceService) {}

  @Get()
  getUtterances() {
    return this.utteranceService.getUtterances();
  }

  @Patch('one')
  updateUtterance(@Body() utterance: Partial<Utterance> & Pick<Utterance, 'assistantID' | 'id'>, @Headers('clientID') clientID: string) {
    return this.utteranceService.updateUtterance(utterance.assistantID, utterance.id, utterance, clientID);
  }

  @Delete('one')
  deleteUtterance(@Body() utterance: Pick<Utterance, 'assistantID' | 'id'>) {
    return this.utteranceService.deleteUtterance(utterance.assistantID, utterance.id);
  }

  @Post()
  addUtterance(@Body() utterance: Pick<Utterance, 'text' | 'assistantID' | 'intentID'>, @Headers('clientID') clientID) {
    return this.utteranceService.addUtterance(utterance.assistantID, utterance.intentID, utterance, clientID);
  }
}
