import { OmitType, PartialType } from "@nestjs/mapped-types";
import { CreateWorkspaceDto } from "./create-workspace.dto";
import { WorkspaceStatus } from "../enums/workspacwStatus.enum";
import { IsEnum, IsOptional } from "class-validator";

export class UpdateWorkspaceDto extends PartialType(
    OmitType(CreateWorkspaceDto, ['projectId'] as const)
) {
    @IsOptional()
    @IsEnum(WorkspaceStatus)
    status?: WorkspaceStatus
}