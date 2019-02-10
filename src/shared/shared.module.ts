import { Module, Global } from '@nestjs/common';
import { ConfigurationService } from './configuration/configuration/configuration.service';
import { MapperService } from './mapper/mapper/mapper.service';
import { AuthService } from './auth/auth/auth.service';
import { JwtStrategyService } from './auth/jwt-strategy/jwt-strategy.service';

@Global()
@Module({
  providers: [ConfigurationService, MapperService, AuthService, JwtStrategyService],
  exports: [ ConfigurationService, MapperService, AuthService]
})
export class SharedModule {}
