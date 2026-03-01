import { IsEnum, IsInt, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";
import { ProjectStatus } from "../enums/projectStatus.enum";

export class QueryProjectDto {
    @IsOptional()
    @IsInt()
    @Min(1)
    page?: number = 1;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number = 20;

    @IsOptional()
    @IsEnum(ProjectStatus)
    status?: ProjectStatus;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    search?: string;
}