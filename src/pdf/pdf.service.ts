import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import * as fs from 'fs';
import * as PdfPrinter from 'pdfmake';

@Injectable()
export class PdfService {
  createPdf(data: any, callback: any): Promise<Buffer> {
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
        // {
        //   stack: [
        //     {
        //       image: 'logo.png',
        //       width: 150,
        //     },
        //     {
        //       text: 'Reefer IoT Sensor Report',
        //       style: 'header',
        //     },
        //   ],
        // },
        {
          text: 'Download Date: Mar 07, 2023 4:41 UTC',
          style: 'date',
        },
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', '*', '*', '*'],

            body: [
              [
                { text: 'first', bold: true, fillColor: '#F6E2EA' },
                { text: 'second', bold: true, fillColor: '#F6E2EA' },
                { text: 'third', bold: true, fillColor: '#F6E2EA' },
                { text: 'last column', bold: true, fillColor: '#F6E2EA' },
              ],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 30,
          bold: true,
        },
        date: {
          alignment: 'right',
        },
      },
    };

    const doc = printer.createPdfKitDocument(dd, {});

    doc.pipe(fs.createWriteStream(`pdf/document-${uuidv4()}.pdf`));
    doc.end();
    return null;
  }
}
