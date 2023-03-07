import { Module } from '@nestjs/common';
import { PdfPuppeteerService } from './pdf-puppeteer.service';
import { PdfPuppeteerController } from './pdf-puppeteer.controller';

@Module({
  controllers: [PdfPuppeteerController],
  providers: [PdfPuppeteerService]
})
export class PdfPuppeteerModule {}
