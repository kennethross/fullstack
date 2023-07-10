import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class HealthService {
  constructor(
    private readonly dbService: DbService,
  ) {}
  async checkHealth(): Promise<string> {
    await this.dbService.$connect();
    return 'OK';
  }

}
