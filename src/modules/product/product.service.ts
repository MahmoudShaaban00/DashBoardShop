import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "../../core/schema/product.module";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  // Create product
  async createProduct(dto: CreateProductDto) {
    const product = await this.productModel.create(dto);
    return { message: "Product created successfully", data: product };
  }

  // Get all products
  async getAllProducts() {
    const products = await this.productModel.find({ isDeleted: false });
    return { message: "Products fetched successfully", data: products };
  }

  // Get product by ID
  async getProductById(id: string) {
    const product = await this.productModel.findOne({ _id: id, isDeleted: false });
    if (!product) throw new NotFoundException("Product not found");
    return { message: "Product fetched successfully", data: product };
  }

  // Update product
  async updateProduct(id: string, dto: UpdateProductDto) {
    const product = await this.productModel.findOneAndUpdate(
      { _id: id, isDeleted: false },
      dto,
      { new: true }
    );
    if (!product) throw new NotFoundException("Product not found");
    return { message: "Product updated successfully", data: product };
  }

  // Soft delete
  async deleteProduct(id: string) {
    const product = await this.productModel.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { isDeleted: true },
      { new: true }
    );
    if (!product) throw new NotFoundException("Product not found");
    return { message: "Product deleted successfully", data: product };
  }
}