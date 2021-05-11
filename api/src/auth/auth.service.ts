import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { LoginCredentialsDto } from './dto/login-credentials.dto'
import { UsersRepository } from 'users/users.repository'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly repository: UsersRepository
  ) {}

  login(dto: LoginCredentialsDto) {
    return this.repository.find()
  }
}
