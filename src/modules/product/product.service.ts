import { Injectable } from '@nestjs/common';
import { SearchService } from '../search/feature-oriented/search.service';

@Injectable()
export class ProductService {
  constructor(private readonly searchService: SearchService) {
    console.log(searchService);
  }
}
