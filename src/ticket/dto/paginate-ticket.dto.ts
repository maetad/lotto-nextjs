import { IsNumber, IsOptional } from 'class-validator';

export class PaginateTicketDto {
  @IsOptional()
  agentId = null;

  @IsNumber()
  @IsOptional()
  page = 1;

  @IsNumber()
  @IsOptional()
  limit = 10;
}
