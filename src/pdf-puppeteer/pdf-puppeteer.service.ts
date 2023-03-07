import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import * as fs from 'fs';

@Injectable()
export class PdfPuppeteerService {
  async generatePdf(): Promise<Buffer> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const html = fs.readFileSync('sample.html', 'utf-8');
    const css = fs.readFileSync('styles.css', 'utf-8');
    // await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await page.setContent(`<style>${css}</style>${html}`, {
      waitUntil: 'domcontentloaded',
    });
    // await page.goto(url, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf();
    await browser.close();
    return pdf;
  }
}
