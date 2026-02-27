import { Body, Controller, Post, Get, Param, Put, Delete, UseGuards } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto, UpdateProductDto, ParamsIdDto } from "./dto/product.dto";
import { AuthGuard } from "src/core/guards/auth.guard";

@Controller("products")
@UseGuards(AuthGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(":id")
  getProduct(@Param() params: ParamsIdDto) {
    return this.productService.getProductById(params.id);
  }

  @Put(":id")
  updateProduct(@Param() params: ParamsIdDto, @Body() dto: UpdateProductDto) {
    return this.productService.updateProduct(params.id, dto);
  }

  @Delete(":id")
  deleteProduct(@Param() params: ParamsIdDto) {
    return this.productService.deleteProduct(params.id);
  }
}