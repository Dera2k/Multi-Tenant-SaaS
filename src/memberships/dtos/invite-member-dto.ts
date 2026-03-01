import { IsDateString, IsEmail, IsEnum, IsOptional, IsString } from "class-validator";
import { Role } from "src/common/enums/role.enum";

export class InviteMemberDto {
    @IsEmail()
    @IsString()
    email!: string;

    @IsEnum(Role)
    role!: Role;

    @IsOptional()
    @IsDateString()
    expiresAt?: string;

}