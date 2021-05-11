import { IsNotEmpty } from 'class-validator'
export class LoginCredentialsDto {
  @IsNotEmpty()
  handle: string

  @IsNotEmpty()
  password: string
}
