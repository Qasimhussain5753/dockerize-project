import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  // url: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:30432/postgres`,
  url: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/postgres`,
  // username: 'postgres',
  // password: process.env.POSTGRES_PASSWORD,
  // port: Number(process.env.POSTGRES_PORT),
  // host: '127.0.0.1',
  database: 'postgres',
  synchronize: true,
  autoLoadEntities: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  // entities: ["build/src/entity/**/*.js"],
  // entities: ['src/entity/*.ts', './build/src/entity/*.js'], // <- Here!
  // migrations: ['src/migration/**/*.ts'],
  // subscribers: ['src/subscriber/**/*.ts'],
};
