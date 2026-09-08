import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
 .setTitle('User API')
 .setDescription('API para gestión de usuarios')
 .setVersion('1.0')
 .build();