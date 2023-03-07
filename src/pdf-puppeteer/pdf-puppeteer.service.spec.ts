import { Test, TestingModule } from '@nestjs/testing';
import { PdfPuppeteerService } from './pdf-puppeteer.service';

describe('PdfPuppeteerService', () => {
  let service: PdfPuppeteerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfPuppeteerService],
    }).compile();

    service = module.get<PdfPuppeteerService>(PdfPuppeteerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
