import { Controller , Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Controller()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  
  @MessagePattern('findAllEmployee')
  findAll() {
    
    return this.employeeService.findAll();
  }


  @MessagePattern({cmd: 'createEmployee'})
  
  create(@Payload() createEmployeeDto: Partial<Employee>) {

    return this.employeeService.create(createEmployeeDto);
  }

 

  
}
