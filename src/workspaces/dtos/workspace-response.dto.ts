import { WorkspaceStatus } from "../enums/workspacwStatus.enum";

export class WorkspaceResponseDto {
  id!: string;
  name!: string;
  description?: string;
  status!: WorkspaceStatus;
  projectId!: string;
  createdAt!: Date;
  updatedAt!: Date;
}