import 'dotenv/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  const port = parseInt(process.env.PORT, 10) || 8080
  await app.listen(port)
}
bootstrap()
