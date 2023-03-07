import { Controller, Get, Res } from '@nestjs/common';
import { PdfPuppeteerService } from './pdf-puppeteer.service';

@Controller('pdf-puppeteer')
export class PdfPuppeteerController {
  constructor(private readonly pdfPuppeteerService: PdfPuppeteerService) {}
  @Get('/')
  async asyncgeneratePdf(@Res() res) {
    const pdf = await this.pdfPuppeteerService.generatePdf();
    res.set('Content-Type', 'application/pdf');
    res.send(pdf);
  }
}
