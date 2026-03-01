import { IsOptional, IsString, IsUUID, MaxLength, Min, MinLength } from "class-validator";

export class CreateProjectDto {

    @IsString()
    @MinLength(2)
    @MaxLength(150)
    name!: string;

    @IsOptional()
    @IsString()
    @MaxLength(1000)
    description!: string;

    @IsUUID()
    unitId!: string;
}