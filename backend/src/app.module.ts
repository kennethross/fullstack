import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './services/db/db.module';
import { HealthModule } from './services/health/health.module';

@Module({
  imports: [HealthModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
