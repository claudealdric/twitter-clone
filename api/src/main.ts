import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://localhost:3000',
        'https://twitter-clone-nu-five.vercel.app/',
        'https://twitter-clone-ragyj3114-claudealdric.vercel.app/',
      ],
    },
  });
  await app.listen(8080);
}
bootstrap();
