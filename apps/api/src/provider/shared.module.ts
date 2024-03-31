import type { Provider as ProviderType } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';
import { GithubService } from './github/github.service';

const providers: ProviderType[] = [GithubService];

const modules: any = [];

@Global()
@Module({
        imports: [...modules],
        providers,
        exports: [...providers],
})
export class SharedServiceModule {}
