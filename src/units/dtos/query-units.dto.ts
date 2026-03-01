import { IsOptional, IsInt, Min, Max, IsString, MaxLength, IsUUID } from "class-validator";

export class QueryUnitsDto {
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
  @IsString()
  @MaxLength(100)
  search?: string;

  @IsOptional()
  @IsUUID()
  ownerId?: string; 
}