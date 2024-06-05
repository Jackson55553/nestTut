import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: 'F4DLCvooBEZSCtzd7JnWB7gdjGEzCrRNkUeqVnefPZrD',
    description: 'address wallet',
  })
  readonly address: string;
}
