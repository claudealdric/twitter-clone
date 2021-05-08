import { EntityRepository, Repository } from 'typeorm'

import { CreateUserDto } from './dtos'
import { User } from './user.entity'

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(dto: CreateUserDto): Promise<User> {
    // Extract needed variables
    const { username, email, password } = dto

    // Create a new user
    const user = new User()
    user.name = username
    user.email = email
    user.password = password
    await user.save()

    return user
  }
}
