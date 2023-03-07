import { Test, TestingModule } from '@nestjs/testing';
import { PdfPuppeteerController } from './pdf-puppeteer.controller';
import { PdfPuppeteerService } from './pdf-puppeteer.service';

describe('PdfPuppeteerController', () => {
  let controller: PdfPuppeteerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfPuppeteerController],
      providers: [PdfPuppeteerService],
    }).compile();

    controller = module.get<PdfPuppeteerController>(PdfPuppeteerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
