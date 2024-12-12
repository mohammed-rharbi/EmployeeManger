import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [ 

    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT , 10) || 3306 ,
      username: process.env.DATABASE_USER || 'root',
      password: '',
      database: process.env.DATABASE_NAME || 'employee_service' ,
      autoLoadEntities: true ,
      synchronize: false 
    }),
    EmployeeModule,
    ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
