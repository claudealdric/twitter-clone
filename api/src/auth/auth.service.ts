import { InjectRepository } from '@nestjs/typeorm'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcrypt'

import { LoginCredentialsDto } from './dto'
import { UsersRepository } from 'users/users.repository'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,

    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository
  ) {}

  async login(dto: LoginCredentialsDto): Promise<{ token: string }> {
    // Destructure needed variables
    const { handle, password } = dto

    // Check if user exists
    const user = await this.usersRepository.findOne({ handle })

    // If user does not exist, throw error
    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }

    // If password is invalid, throw error
    const passwordIsValid = await compare(password, user.password)
    if (!passwordIsValid) {
      throw new UnauthorizedException('Invalid credentials')
    }

    // Create JWT
    const payload = { handle: user.handle, fullName: user.fullName }
    const token = this.jwtService.sign(payload)

    return { token }
  }
}
