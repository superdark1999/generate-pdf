import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';

import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get()
  async generatePdf(@Res() res: Response): Promise<void> {
    const data = [
      ['Name', 'Age', 'Gender'],
      ['John Doe', '30', 'Male'],
      ['Jane Doe', '25', 'Female'],
      ['Jim Doe', '35', 'Male'],
    ];

    const buffer = await this.pdfService.createPdf(data);

    // fs.writeFileSync('test.pdf', buffer);
    // res.set({
    //   'Content-Type': 'application/pdf',
    //   'Content-Disposition': 'attachment; filename=example.pdf',
    //   'Content-Length': buffer.length,
    // });
    // res.send(buffer);
  }
}
