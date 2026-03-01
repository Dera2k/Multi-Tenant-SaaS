import { IsEnum, IsInt, IsOptional, IsString, IsUUID, Max, MaxLength, Min } from "class-validator";
import { MembershipStatus } from "../enums/membershipStatus.enum";
import { Role } from "src/common/enums/role.enum";

export class QueryUserDto {
    @IsOptional()
    @Min(1)
    @IsInt()
    page?: number = 1;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number = 20;

    @IsOptional()
    @IsEnum(MembershipStatus)
    status?: MembershipStatus;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    search?: string;

    @IsOptional()
    @IsEnum(Role)
    role?: Role;

    @IsOptional()
    @IsUUID()
    unitId?: string
}