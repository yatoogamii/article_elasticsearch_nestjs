import { Module } from '@nestjs/common';
import { SearchModule } from '../search/search.module';
import { ProductService } from './product.service';

@Module({
  imports: [SearchModule],
  providers: [ProductService],
})
export class ProductModule {}
