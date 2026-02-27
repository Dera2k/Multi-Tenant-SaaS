import { IsEnum, IsInt, IsOptional, IsString, IsUUID, Max, MaxLength, Min } from "class-validator";
import { WorkspaceStatus } from "../enums/workspacwStatus.enum";

export class QueryWorkspaceDto {
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
    @IsEnum(WorkspaceStatus)
    status?: WorkspaceStatus;

    @IsOptional()
    @MaxLength(100)
    @IsString()
    search?: string;

    @IsUUID()
    @IsOptional()
    projectId?: string;
}