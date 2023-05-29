import { Module } from '@nestjs/common';
import { SuperheroesModule } from './superheroes/superheroes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SuperheroesModule, PrismaModule],
})
export class AppModule {}
