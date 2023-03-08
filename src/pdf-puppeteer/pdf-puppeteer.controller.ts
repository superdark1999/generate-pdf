import { Controller, Get, Res } from '@nestjs/common';
import { PdfPuppeteerService } from './pdf-puppeteer.service';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Controller('pdf-puppeteer')
export class PdfPuppeteerController {
  constructor(private readonly pdfPuppeteerService: PdfPuppeteerService) {}
  @Get('/')
  async generatePdf(@Res() res) {
    const pdf = await this.pdfPuppeteerService.generatePdf();
    fs.writeFileSync(`pdf-puppeteer/${uuidv4()}.pdf`, pdf);

    // res.set('Content-Type', 'application/pdf');
    // res.send(pdf);
    res.send({ name: 'puppeteer' });
  }
}
