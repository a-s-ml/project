import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true })
	app.setGlobalPrefix('dating');
	app.use(json({ limit: '50mb' }));
	app.use(urlencoded({ extended: true, limit: '50mb' }));
	await app.listen(3000)
}
bootstrap()
