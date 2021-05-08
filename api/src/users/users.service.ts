import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

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
    return this.repository.createUser(dto)
  }

  async getUsers(): Promise<User[]> {
    const users = await this.repository.find()
    return users
  }
}
