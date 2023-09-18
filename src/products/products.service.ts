import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  private products = [];

  getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  getById(id: string): Promise<Product[]> {
    return this.productModel.findById(id);
  }

  async create(product: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async update(id: string, product: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, product);
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id).exec();
  }
}
