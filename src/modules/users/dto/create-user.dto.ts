import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly lastName: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly username: string;
  @IsString()
  readonly email: string;
  readonly actions?: string[];
  readonly createAt?: Date;
  readonly updatedAt?: Date;
}
