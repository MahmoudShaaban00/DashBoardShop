import {Controller,Post,Get,Body,Query, UseGuards} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto, DailySalesDto } from './dto/sales.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('sales')
@UseGuards(AuthGuard)
export class SalesController {

  constructor(private readonly salesService: SalesService) {}

  // ✅ إنشاء عملية بيع
  @Post()
  async createSale(@Body() createSaleDto: CreateSaleDto) {
    return await this.salesService.sellProduct(createSaleDto.productId,createSaleDto.quantity);
  }

  // ✅ تقرير يومي (إجمالي)
  @Get('daily')
  async getDailySales(@Query('date') date: string): Promise<DailySalesDto> {

    const result = await this.salesService.getDailyTotal(date);

    return {date,totalSales: result.totalQuantity,totalRevenue: result.totalSales};}
}