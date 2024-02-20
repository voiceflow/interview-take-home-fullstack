import { Utterance } from '@core/lib';
import { Injectable } from '@nestjs/common';
import { DB_SIZE } from 'config';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class UtteranceService {
  private getUtterancePath() {
    return join(process.cwd(), `db-${DB_SIZE}`, 'utterance.database.json');
  }

  getUtterances(): Utterance[] {
    const utterances = fs.readFileSync(this.getUtterancePath(), 'utf-8');

    return JSON.parse(utterances);
  }

  updateUtterance(assistantID: string, utteranceID: string, payload: Partial<Utterance>) {
    const utterances = this.getUtterances();

    const utterance = utterances.find((utterance) => utterance.id === utteranceID && utterance.assistantID === assistantID);

    Object.assign(utterance, payload, { updatedAt: new Date().toISOString() });

    fs.writeFileSync(this.getUtterancePath(), JSON.stringify(utterances, null, 2));

    return utterance;
  }
}
