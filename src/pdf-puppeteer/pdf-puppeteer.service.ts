import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import Handlebars from 'handlebars';
import * as fs from 'fs';
import { dummyData, formatDataForPdfGeneration } from './utils';

@Injectable()
export class PdfPuppeteerService {
  async generatePdf(): Promise<Buffer> {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // read css file
    const css = fs.readFileSync('assets/styles.scss', 'utf-8');

    const template = Handlebars.compile(
      fs.readFileSync('assets/template.hbs', 'utf8'),
    );

    // Generate HTML from template and data
    const data = formatDataForPdfGeneration(
      'CAIU5674764',
      'LEHC44353900',
      'Dec 14, 2022 3:21 UTC to Jan 04, 2023 5:09 UTC',
      dummyData,
    );

    const html = template(data);

    await page.setViewport({
      width: 297 * 2,
      height: 210 * 2,
      deviceScaleFactor: 2,
      isLandscape: true,
    });

    await page.setContent(`<style>${css}</style>${html}`, {
      waitUntil: 'domcontentloaded',
    });

    // add page number in footer
    const footerTemplate = `
      <div style="border-top: solid 1px #bbb; width: 100%; font-size: 9px;
       padding: 5px 5px 0; color: #bbb; position: relative;">
      <div style="position: absolute; right: 5px; top: 5px;"><span class="pageNumber"></span>/<span class="totalPages"></span></div>
      </div>`;

    const pdf = await page.pdf({
      format: 'A4',
      // printBackground: true,
      // landscape: true,
      // displayHeaderFooter: true,
      // footerTemplate: footerTemplate,
      // margin: {
      //   top: 10,
      //   bottom: 30,
      //   left: 10,
      //   right: 10,
      // },
    });

    // await browser.close();

    // return pdf;
    return null;
  }
}
