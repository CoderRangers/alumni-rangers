import { Module } from '@nestjs/common';
import { PoeController } from './poe.controller';
import { PoeService } from './poe.service';
/* import { TypeOrmModule } from '@nestjs/typeorm';
import { PoeEntity } from './models/poe-entity'; */

@Module({
  controllers: [PoeController],
  providers: [PoeService],
  //imports: [TypeOrmModule.forFeature([PoeEntity])],
})
export class PoeModule {}
