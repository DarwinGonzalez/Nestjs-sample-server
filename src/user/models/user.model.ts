import { UserRole } from './../user-role.enum';
import { BaseModel } from './../../shared/base.model';
import { prop, ModelType } from 'typegoose';

export class User extends BaseModel {
  @prop({
    required: [true, 'Username is required'],
    minlength: [6, 'Must be 6 characters or longer'],
    unique: true,
  })
  username: string;
  @prop({
    required: [true, 'Password is required'],
    minlength: [6, 'Must be 6 characters or longer'],
  })
  password: string;

  @prop({ enum: UserRole })
  role?: UserRole;
  @prop() firstName?: string;
  @prop() lastName?: string;

  @prop()
  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }

  static get model(): ModelType<User> {
     return new User().getModelForClass(User, { schemaOptions });
  }

  static get modelName(): string {
      return this.model.modelName;
  }
}
