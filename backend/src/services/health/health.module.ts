import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { DbModule } from '../db/db.module';

@Module({
  providers: [HealthService],
  imports: [DbModule],
})
export class HealthModule {}
