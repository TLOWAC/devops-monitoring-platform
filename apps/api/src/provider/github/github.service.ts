import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit } from 'octokit';

@Injectable()
export class GithubService {
        octokit: Octokit;
        constructor(configService: ConfigService) {
                this.octokit = new Octokit({
                        auth: configService.get('GITHUB_TOKEN'),
                });
        }

        async getIssues(): Promise<any> {
                const query = `
                        query getIssues($owner: String!, $repo: String!) {
                                repository(owner: $owner, name: $repo) {
                                        issues(first: 100) {
                                                nodes {
                                                        title
                                                        body
                                                }
                                        }
                                }
                        }
                `;

                const data = await this.octokit.graphql(query, {
                        owner: 'tlowac-repo',
                        repo: 'tlowac-boilerplate',
                });

                return data;
        }
}
