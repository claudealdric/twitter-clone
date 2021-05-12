import { BaseEntity, ObjectID } from 'typeorm';
export declare class User extends BaseEntity {
    id: ObjectID;
    fullName: string;
    handle: string;
    email: string;
    password: string;
}
