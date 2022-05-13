import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { QuestionsModule } from './questions/questions.module'

@Module({
  imports: [
    QuestionsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/questions'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
