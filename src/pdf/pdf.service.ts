import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import * as fs from 'fs';
import * as PdfPrinter from 'pdfmake';

@Injectable()
export class PdfService {
  createPdf(data: any, callback: any): Promise<Buffer> {
    const columnNumber = 5;
    const nameOfColumn = [
      'Time',
      'Supply Air\n(C°)',
      'Supply Air\n(C°)',
      'Supply Air\n(C°)',
      'Supply Air\n(C°)',
    ];

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
        //   image: 'assets/logo.png',
        //   style: 'logo',
        // },
        {
          text: 'Reefer IoT Sensor Report\n\n',
          style: ['header', 'centerDiv'],
        },
        {
          text: 'Download Date: Mar 07, 2023 4:41 UTC',
          style: 'date',
        },
        {
          layout: 'noBorders',
          table: {
            body: [
              [{ text: 'Container' }, { text: 'CAIU5674764', bold: true }],
              [{ text: 'Bill of lading' }, { text: 'CAIU5674764', bold: true }],
              [{ text: 'Commodity' }, ''],
              [{ text: 'Period' }, 'LEHC44353900'],
            ],
          },
        },
        { text: '\n' },
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: Array(columnNumber)
              .fill(0)
              .map((_) => '*'),
            body: [
              nameOfColumn.map((p) => {
                return { text: p, style: ['tableHeader', 'centerDiv'] };
              }),
            ],
          },
        },
      ],
      styles: {
        logo: {
          width: 15,
          // pageBreak: 'before',
        },
        centerDiv: {
          alignment: 'center',
        },
        header: {
          fontSize: 30,
          bold: true,
        },
        tableHeader: {
          bold: true,
          fillColor: '#F6E2EA',
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
