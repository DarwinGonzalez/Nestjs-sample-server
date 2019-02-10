import { User } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [MongooseModule.forFeature([{name: User.modelName, schema: User.model.schema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
