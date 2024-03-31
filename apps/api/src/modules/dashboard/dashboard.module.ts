import { GithubService } from '@/provider/github/github.service';
import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';

@Module({
  controllers: [DashboardController],
  providers: [GithubService],
})
export class DashboardModule {}
