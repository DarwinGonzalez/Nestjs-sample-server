import { Configuration } from './configuration.enum';
import { Injectable } from '@nestjs/common';
import { get } from 'config';

@Injectable()
export class ConfigurationService {

    static conectionString: string = process.env[Configuration.MONGO_URI] || get(Configuration.MONGO_URI);
    private enviromentHosting: string  = process.env.NODE_ENV || 'development';

    get(name: string): string {
        return process.env[name] || get(name);
    }

    get isDevelopment(): boolean {
        return this.enviromentHosting === 'development';
    }
}
