import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './entity/comment.entity';
import { CardEntity } from 'src/card/entity/card.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CommentEntity,
      CardEntity
    ])
  ],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
