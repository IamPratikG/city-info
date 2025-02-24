import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname + '/../..', 'client', 'dist'),
    }),
    CitiesModule,
  ],
})
export class AppModule {}
