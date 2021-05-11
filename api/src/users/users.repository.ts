import { EntityRepository, Repository } from 'typeorm'

import { CreateUserDto } from './dtos'
import { User } from './user.entity'

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(dto: CreateUserDto): Promise<User> {
    const user = new User()
    Object.assign(user, dto)
    await user.save()

    return user
  }
}
