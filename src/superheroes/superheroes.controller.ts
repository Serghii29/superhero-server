/* eslint-disable no-useless-constructor */
import {
  // eslint-disable-next-line no-shadow
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Superhero } from '@prisma/client';
import { SuperheroDto } from './dto';
import { SuperheroesService } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Superhero | null> {
    return this.superheroesService.superhero(+id);
  }

  @Get('')
  async getAll() {
    return this.superheroesService.superheroes();
  }

  @Post('create')
  async newCard(@Body() dto: SuperheroDto) {
    return this.superheroesService.create(dto);
  }

  @Put(':id')
  async changeSuperhero(
    @Param('id') id: string,
    @Body() dto: SuperheroDto,
  ): Promise<Superhero> {
    return this.superheroesService.update(+id, dto);
  }

  @Delete(':id')
  async deleteSuperhero(@Param('id') id: string) {
    return this.superheroesService.delete(+id);
  }
}
