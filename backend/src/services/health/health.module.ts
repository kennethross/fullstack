import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { DbModule } from '../db/db.module';

@Module({
  providers: [HealthService],
  imports: [DbModule],
  exports: [HealthService],
})
export class HealthModule {}
