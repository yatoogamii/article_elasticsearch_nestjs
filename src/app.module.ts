import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './modules/product/product.module';
import { SearchModule } from './modules/search/search.module';

@Module({
  imports: [ConfigModule.forRoot(), SearchModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
