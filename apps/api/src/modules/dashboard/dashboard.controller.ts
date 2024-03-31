import { Controller, Get } from '@nestjs/common';
import { GithubService } from 'src/provider/github/github.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private githubService: GithubService) {}

  @Get()
  check() {
    const issueList = this.githubService.getIssues();
    return issueList;
  }
}
