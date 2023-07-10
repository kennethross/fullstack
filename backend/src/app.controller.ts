import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthService } from './services/health/health.service';

@Controller()
export class AppController {
  constructor(
    private readonly healthService: HealthService,
    private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health') 
  getHealth(): Promise<string> {
    return this.healthService.checkHealth();
  }
}
