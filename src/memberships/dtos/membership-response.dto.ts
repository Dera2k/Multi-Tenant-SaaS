import { Role } from "src/common/enums/role.enum";
import { MembershipStatus } from "../enums/membershipStatus.enum";

export class MembershipResponseDto {
  id!: string;
  userId!: string;
  orgId!: string;
  role!: Role;
  status!: MembershipStatus;
  joinedAt!: Date;
  inviterId?: string;
}