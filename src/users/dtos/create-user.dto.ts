import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, Matches } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(96)
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(96)
    lastName!: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(96)
    email!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(96)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: 'Minimum eight characters, at least one letter, one number, and one special character'
    })
    password!: string;
}