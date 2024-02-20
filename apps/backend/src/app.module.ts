import { Module } from '@nestjs/common';

import { IntentModule, UtteranceModule } from './routes';

@Module({
  imports: [IntentModule, UtteranceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
