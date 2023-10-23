import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const configMysql = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get<string>('MYSQL_HOST'),
    port: parseInt(configService.get<string>('MYSQL_PORT')),
    username: configService.get<string>('MYSQL_USER'),
    password: configService.get<string>('MYSQL_PASS'),
    database: configService.get<string>('MYSQL_DDBB'),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  }),
  inject: [ConfigService],
});
