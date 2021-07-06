import { IsNotEmpty } from 'class-validator';

export class CreateDrawDto {
  @IsNotEmpty()
  date: Date;
}
