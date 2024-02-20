import { Intent } from '@core/lib';
import { Injectable } from '@nestjs/common';
import { DB_SIZE } from 'config';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class IntentService {
  private getIntentPath() {
    return join(process.cwd(), `db-${DB_SIZE}`, 'intent.database.json');
  }

  getIntents(): Intent[] {
    const intents = fs.readFileSync(this.getIntentPath(), 'utf-8');

    return JSON.parse(intents);
  }

  updateIntent(assistantID: string, intentID: string, payload: Partial<Intent>) {
    const intents = this.getIntents();

    const intent = intents.find((intent) => intent.id === intentID && intent.assistantID === assistantID);

    Object.assign(intent, payload, { updatedAt: new Date().toISOString() });

    fs.writeFileSync(this.getIntentPath(), JSON.stringify(intents, null, 2));

    return intent;
  }
}
