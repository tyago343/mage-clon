import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { AdminActionModule } from './modules/admin-action/admin-action.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AdminActionModule,
    DatabaseModule,
    AuthModule,
  ],
  providers: [AuthService],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = Number(this.configService.get('PORT')) || 4000;
  }
}
