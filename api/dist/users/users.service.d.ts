import { CreateUserDto } from './dtos';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private readonly repository;
    constructor(repository: UsersRepository);
    createUser(dto: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
}
