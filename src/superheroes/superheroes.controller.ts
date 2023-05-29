/* eslint-disable no-useless-constructor */
import { Controller, Post } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private superheroesService: SuperheroesService) {}

  @Post('creat')
  findAll(): string {
    return this.superheroesService.creat();
  }
}
