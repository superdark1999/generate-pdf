import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfModule } from './pdf/pdf.module';
import { PdfPuppeteerModule } from './pdf-puppeteer/pdf-puppeteer.module';

@Module({
  imports: [PdfModule, PdfPuppeteerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
