import { IsEmail, IsNumber, maxLength, MaxLength, MinLength } from "class-validator";


export class EmployeeDTO {
    @MaxLength(50)
    @MinLength(2)
    name: string;

    @IsEmail()
    email: string;

    @MaxLength(50)
    position: string;

    @IsNumber()
    salary: number;
}