import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.DATABASE_URL,
  useUnifiedTopology: true,
  autoLoadEntities: true,
  synchronize: true,
}
