import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { FilmModule } from './film/film.module';
import { GraphQlDateTime } from 'graphql-iso-date';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    typePaths: ['./**/*.graphql'],
    resolvers: { DateTime: GraphQlDateTime },
  }), FilmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
