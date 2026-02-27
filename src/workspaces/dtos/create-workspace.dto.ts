import { IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class CreateWorkspaceDto {
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name!: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    description?: string;

    @IsUUID()
    @IsOptional()
    projectId!: string;
}