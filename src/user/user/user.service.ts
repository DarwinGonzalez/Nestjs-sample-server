import { ModelType } from 'typegoose';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/base.service';
import { User } from '../models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { MapperService } from 'src/shared/mapper/mapper/mapper.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectModel(User.modelName) private readonly _userModel: ModelType<User>,
    private readonly _mapperService: MapperService,
  ) {
      super();
      this._model = _userModel;
      this._mapper = _mapperService.mapper;
  }
}
