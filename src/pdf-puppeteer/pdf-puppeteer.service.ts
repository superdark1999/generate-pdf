import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import Handlebars from 'handlebars';
import * as fs from 'fs';

@Injectable()
export class PdfPuppeteerService {
  async generatePdf(): Promise<Buffer> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // read css file
    const css = fs.readFileSync('assets/styles.scss', 'utf-8');

    const template = Handlebars.compile(
      fs.readFileSync('assets/template.hbs', 'utf8'),
    );

    // Generate HTML from template and data
    const data = {
      title: 'Reefer IoT Sensor Report ',
      date: 'Mar 07, 2023 4:41 UTC',
      info: [
        {
          label: 'Container',
          value: 'CAIU5674764',
        },
        {
          label: 'Bill of Lading : ',
          value: 'LEHC44353900',
        },
        {
          label: 'Commodity:',
          value: '',
        },
        {
          label: 'Period:',
          value: 'Dec 14, 2022 3:21 UTC to Jan 04, 2023 5:09 UTC',
        },
      ],
      nameOfColumn: [
        'Time',
        'Supply Air\n(C°)',
        'return air\n(C°)',
        'ambient temp\n(C°)',
      ],
      data: [
        ...Array(100)
          .fill(0)
          .map((_) => {
            return [new Date().toLocaleDateString(), 1.5, 1.5, 2.5];
          }),
      ],
    };

    const html = template(data);

    await page.setContent(`<style>${css}</style>${html}`, {
      waitUntil: 'domcontentloaded',
    });

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    });
    await browser.close();
    return pdf;
  }
}
