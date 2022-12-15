import { Module } from '@nestjs/common';
import { DatabasesModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabasesModule],
})
export class AppModule {}
