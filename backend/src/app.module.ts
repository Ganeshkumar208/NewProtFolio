// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { WhatsappModule } from './whatsapp/whatsapp.module';

// @Module({
//   imports: [WhatsappModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}





import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsappModule } from './whatsapp/whatsapp.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/.env',
    }),
    WhatsappModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
