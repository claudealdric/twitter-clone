import { Param } from '@nestjs/common'
import { Body, Controller, Get, Post } from '@nestjs/common'

import { CreateUserDto } from './dtos'
import { User } from './user.entity'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  createUser(@Body() dto: CreateUserDto): Promise<User> {
    return this.service.createUser(dto)
  }

  @Get(':handle')
  getUser(@Param('handle') handle: string) {
    return this.service.getUser(handle)
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.service.getUsers()
  }
}
