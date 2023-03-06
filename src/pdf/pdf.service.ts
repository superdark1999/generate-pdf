import { Injectable } from '@nestjs/common';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import * as fs from 'fs';
import * as PdfPrinter from 'pdfmake';

@Injectable()
export class PdfService {
  createPdf(data: any): Promise<Buffer> {
    // Define font files
    const fonts = {
      Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf',
      },
    };

    const printer = new PdfPrinter(fonts);

    const dd = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', '*', '*', '*'],

            body: [
              ['First', 'Second', 'Third', 'The last one'],
              ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
              [
                { text: 'Bold value', bold: true, fillColor: '#Ee2cf9' },
                'Val 2',
                'Val 3',
                'Val 4',
              ],
            ],
          },
        },
      ],
    };

    const pdfDoc = printer.createPdfKitDocument(dd, {});
    pdfDoc.pipe(fs.createWriteStream('document.pdf'));
    pdfDoc.end();
    return null;
  }
}
