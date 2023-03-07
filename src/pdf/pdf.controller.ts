import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';

import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get()
  async generatePdf(@Res() res: Response): Promise<void> {
    const data = Array(4)
      .fill(0)
      .map((p) => ['Val 1', 'Val 2', 'Val 3', 'Val 4']);

    const buffer = await this.pdfService.createPdf(data, (buffer) => {
      console.log('response here');
      console.log(buffer);
    });

    // res.set({
    //   'Content-Type': 'application/pdf',
    //   'Content-Disposition': 'attachment; filename=example.pdf',
    //   'Content-Length': buffer.length,
    // });
    // res.send(buffer);
    res.send({ name: 'long' });
  }
}
