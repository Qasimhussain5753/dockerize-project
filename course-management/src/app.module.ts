import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { CoursesModule } from './courses/courses.module';
import { StudentModule } from './student/student.module';
import { HttpErrors } from './shared/http.errors';
import { RegisterModule } from './register/register.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './authentication/authentication.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config),
    CoursesModule,
    StudentModule,
    RegisterModule,
    AuthenticationModule,
    UserModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrors,
      // useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
