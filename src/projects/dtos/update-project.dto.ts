import { OmitType, PartialType } from "@nestjs/mapped-types";
import { CreateProjectDto } from "./create-project.dto";
import { ProjectStatus } from "../enums/projectStatus.enum";
import { IsEnum, IsOptional } from "class-validator";

export class UpdateProjectDto extends PartialType(
    OmitType(CreateProjectDto, ['unitId'])) {

        @IsOptional()
        @IsEnum(ProjectStatus)
        status?: ProjectStatus;
    }