import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies.';
  }

  @Get('search')
  search(
    @Query('year') searchingYear: string,
    // @Query('director') director: string,
  ) {
    // return `We are searching for mvoies made after year: ${searchingYear}, director: ${director}`;
    return `We are searching for mvoies made after year: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): string {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData): string {
    // console.log(movieData);

    return 'This will create movie.';
  }

  @Delete(':id')
  remove(@Param('id') movieId: string): string {
    return `This will delete a movie with the movieId: ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData): string {
    console.log(updateData);
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
