import { Body, Controller, Post } from '@nestjs/common'

import { AuthService } from './auth.service'
import { LoginCredentialsDto } from './dto/login-credentials.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginCredentialsDto) {
    return this.service.login(dto)
  }
}
