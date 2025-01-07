import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ProductSearchService } from './domain-oriented/product-search.service';
import { SearchService } from './feature-oriented/search.service';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        node: configService.get('ELASTICSEARCH_NODE'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    // Feature oriented
    SearchService,

    // Domain oriented
    ProductSearchService,
  ],
  exports: [SearchService, ProductSearchService],
})
export class SearchModule {}
