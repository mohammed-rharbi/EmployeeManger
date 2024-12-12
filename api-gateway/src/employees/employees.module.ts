import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { ClientsModule , Transport } from '@nestjs/microservices';



@Module({
  imports: [ClientsModule.register([
    {
      name:'EMPLOYEE_SERVICE',
      transport: Transport.REDIS,
      options:{
        host:'localhost',
        port:6379
      }
    }
  ])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
 