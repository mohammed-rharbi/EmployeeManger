import { Inject, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EmployeesService {

  constructor( @Inject('EMPLOYEE_SERVICE') private readonly employeeService: ClientProxy ){}


  async create(createEmployeeDto: CreateEmployeeDto) {

    console.log(createEmployeeDto);
    
    return await this.employeeService.send({cmd: 'createEmployee'}, createEmployeeDto);
  }

}
 