import { JwtPayload } from './../jwt-payload';
import { Configuration } from './../../configuration/configuration/configuration.enum';
import { ConfigurationService } from './../../configuration/configuration/configuration.service';
import { UserService } from './../../../user/user/user.service';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { SignOptions, sign } from 'jsonwebtoken';
import { User } from 'src/user/models/user.model';

@Injectable()
export class AuthService {
  private readonly jwtOptions: SignOptions;
  private readonly jwtKey: string;

  constructor(
    @Inject(forwardRef(() => UserService)) readonly _userService: UserService,
    private readonly _configurationService: ConfigurationService,
  ) {
      this.jwtOptions = {expiresIn: '12h'};
      this.jwtKey = _configurationService.get(Configuration.JWT_KEY);
  }

  async signPayload(payload: JwtPayload): Promise<string> {
    return sign(payload, this.jwtKey, this.jwtOptions);
  }

  async validatePayload(payload: JwtPayload): Promise<InstanceType<User>> {
    return this._userService.findOne({ username: payload.username.toLowerCase() });
  }
}
