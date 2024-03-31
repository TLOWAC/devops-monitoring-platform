import { DashboardModule } from '@/modules/dashboard/dashboard.module';
import { HealthController } from '@/modules/health/health.controller';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
        imports: [
                TerminusModule,
                HttpModule,
                DashboardModule,
                // TODO: ConfigModule > provider/EnvModule 로 리팩토링 및 검증 로직 추가
                ConfigModule.forRoot({ isGlobal: true }),
        ],
        controllers: [AppController, HealthController],
        providers: [AppService],
})
export class AppModule {}
