import { ProjectStatus } from "../enums/projectStatus.enum";

export class ProjectResponseDto {
  id!: string;
  name!: string;
  description?: string;
  status!: ProjectStatus;
  orgId!: string;
  createdAt!: Date;
  updatedAt!: Date;
}