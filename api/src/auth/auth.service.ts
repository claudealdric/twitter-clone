import { Injectable } from '@nestjs/common'
import { LoginCredentialsDto } from './dto/login-credentials.dto'

@Injectable()
export class AuthService {
  login(dto: LoginCredentialsDto) {
    return dto
  }
}
