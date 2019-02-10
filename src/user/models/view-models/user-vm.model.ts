import { UserRole } from './../../user-role.enum';
import { BaseModelVm } from './../../../shared/base.model';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { EnumToArray } from 'src/shared/utilities/enum-to-array';

export class UserVm extends BaseModelVm {

    @ApiModelPropertyOptional() username: string;
    @ApiModelPropertyOptional() firstName?: string;
    @ApiModelPropertyOptional() lastName?: string;
    @ApiModelPropertyOptional() fullName?: string;
    @ApiModelPropertyOptional({ enum: EnumToArray(UserRole)})
    role?: UserRole;
}