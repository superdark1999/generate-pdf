import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfModule } from './pdf/pdf.module';
import { PdfPuppeteerModule } from './pdf-puppeteer/pdf-puppeteer.module';
import { join } from 'path';

@Module({
  imports: [
    PdfModule,
    PdfPuppeteerModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
