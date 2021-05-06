import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:30432/postgres`,
  // username: 'postgres',
  // password: process.env.POSTGRES_PASSWORD,
  // port: Number(process.env.POSTGRES_PORT),
  // host: '127.0.0.1',
  database: 'postgres',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};