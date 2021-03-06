import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

import { Enviroment } from 'src/common/enum';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const isDevelopmentEnv = config.get('NODE_ENV') !== Enviroment.Production;
    const dbConfig = {
      type: config.get('DB_TYPE'),
      host: config.get('DB_HOST'),
      port: Number(config.get('DB_PORT')),
      username: config.get('DB_USER'),
      password: config.get('DB_PASS'),
      database: config.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: isDevelopmentEnv,
      logging: config.get('DB_LOGGING'),
    } as ConnectionOptions;
    return dbConfig;
  },
});
