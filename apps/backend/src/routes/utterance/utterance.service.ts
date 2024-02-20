import { Utterance } from '@core/lib';
import { Injectable } from '@nestjs/common';
import { DB_SIZE } from 'config';
import { randomUUID } from 'crypto';
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

  updateUtterance(assistantID: string, utteranceID: string, payload: Partial<Utterance>, clientID: string) {
    const utterances = this.getUtterances();

    const utterance = utterances.find((utterance) => utterance.id === utteranceID && utterance.assistantID === assistantID);

    Object.assign(utterance, payload, { updatedAt: new Date().toISOString(), updatedBy: clientID });

    fs.writeFileSync(this.getUtterancePath(), JSON.stringify(utterances, null, 2));

    return utterance;
  }

  deleteUtterance(assistantID: string, utteranceID: string) {
    const utterances = this.getUtterances();

    const newUtterances = utterances.filter((utterance) => utterance.id !== utteranceID && utterance.assistantID !== assistantID);

    fs.writeFileSync(this.getUtterancePath(), JSON.stringify(newUtterances, null, 2));

    return newUtterances;
  }

  addUtterance(assistantID: string, intentID: string, utterance: Pick<Utterance, 'text'>, clientID: string) {
    const utterances = this.getUtterances();

    const newUtterance = {
      ...utterance,
      assistantID,
      intentID,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: clientID,
      updatedBy: clientID,
    };

    utterances.push(newUtterance);

    fs.writeFileSync(this.getUtterancePath(), JSON.stringify(utterances, null, 2));

    return newUtterance;
  }
}
