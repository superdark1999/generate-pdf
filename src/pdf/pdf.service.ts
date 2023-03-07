import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import * as fs from 'fs';
import * as PdfPrinter from 'pdfmake';
import createDocDefinition from './pdf.utils';

@Injectable()
export class PdfService {
  async createPdf(data: any, callback: any) {
    // Define font files
    const fonts = {
      Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf',
      },
    };
    const dd = createDocDefinition();

    const printer = new PdfPrinter(fonts);

    const doc = printer.createPdfKitDocument(dd, {});

    // doc.pipe(callback);
    doc.pipe(fs.createWriteStream(`pdf/document-${uuidv4()}.pdf`));
    doc.end();
  }
}
