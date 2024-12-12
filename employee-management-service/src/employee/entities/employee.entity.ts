import { Entity , PrimaryGeneratedColumn , Column } from "typeorm";


@Entity('employees')
export class Employee {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length:50})
    name : string

    @Column()
    position: string

    @Column('decimal', { precision: 10, scale: 2 })
    salary: string

    @Column({default:true})
    isActive: boolean


}
