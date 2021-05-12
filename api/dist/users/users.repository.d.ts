import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos';
import { User } from './user.entity';
export declare class UsersRepository extends Repository<User> {
    createUser(dto: CreateUserDto): Promise<User>;
}
