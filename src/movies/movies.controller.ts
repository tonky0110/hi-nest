import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies.';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): string {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(): string {
    return 'This will create movie.';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string): string {
    return `This will delete a movie with the movieId: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string): string {
    return `This will patch a movie with the movieId: ${movieId}`;
  }
}
