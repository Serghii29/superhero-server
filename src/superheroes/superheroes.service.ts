/* eslint-disable no-useless-constructor */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SuperheroDto } from './dto';

@Injectable()
export class SuperheroesService {
  constructor(private prisma: PrismaService) {}

  async superhero(id: number) {
    const oneSuperhero = await this.prisma.superhero.findUnique({
      where: {
        id: id,
      },
    });

    return oneSuperhero;
  }

  async superheroes() {
    const allSuperheroes = await this.prisma.superhero.findMany();

    return allSuperheroes;
  }

  async update(id: number, dto: SuperheroDto) {
    return this.prisma.superhero.update({
      data: dto,
      where: { id },
    });
  }

  async create(dto: SuperheroDto) {
    const superhero = await this.prisma.superhero.create({
      data: {
        nickname: dto.nickname,
        real_name: dto.real_name,
        origin_description: dto.origin_description,
        superpowers: dto.superpowers,
        catch_phrase: dto.catch_phrase,
        images: dto.images,
      },
    });

    return superhero;
  }

  async delete(id: number) {
    const deletedSuperhero = await this.prisma.superhero.delete({
      where: { id },
    });

    return deletedSuperhero;
  }
}
