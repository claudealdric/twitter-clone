import { Body, Controller, Post, ValidationPipe } from '@nestjs/common'

import { AuthService } from './auth.service'
import { LoginCredentialsDto } from './dto/login-credentials.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  login(@Body(ValidationPipe) dto: LoginCredentialsDto) {
    return this.service.login(dto)
  }
}
