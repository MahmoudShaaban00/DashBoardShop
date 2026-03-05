import { IsEmail, IsStrongPassword } from "class-validator";

export class CreateManagerDto {
    @IsEmail()
    email: string;
    @IsStrongPassword()
    password: string;
}

export class SigninDto {
    @IsEmail()
    email: string;
    @IsStrongPassword()
    password: string;
}