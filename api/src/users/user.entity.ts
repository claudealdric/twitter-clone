import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string
}
