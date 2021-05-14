import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { hashSync } from 'bcrypt'

import { CreateUserDto } from './dtos'
import { User } from './user.entity'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly repository: UsersRepository
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    // Encrypt password
    dto.password = hashSync(dto.password, 10)

    return this.repository.createUser(dto)
  }

  async getUser(handle: string) {
    const user = await this.repository.findOne({ handle })
    return user
  }

  async getUsers(): Promise<User[]> {
    const users = await this.repository.find()
    return users
  }
}
