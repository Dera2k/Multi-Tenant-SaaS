import { IsEnum } from "class-validator";
import { Role } from "src/common/enums/role.enum";

export class UpdateMembershipDto{
    @IsEnum(Role)
    role!: Role;
}