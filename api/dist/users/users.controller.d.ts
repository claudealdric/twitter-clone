import { CreateUserDto } from './dtos';
import { User } from './user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    createUser(dto: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
}
