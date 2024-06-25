import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenDto {
  @ApiProperty({
    example: 'F4DLCvooBEZSCtzd7JnWB7gdjGEzCrRNkUeqVnefPZrD',
    description: 'token mint address',
  })
  readonly tokenAddress: string;

  @ApiProperty({
    example: 'http://example.ru/path/file.png',
    description: 'image url',
  })
  readonly imageUrl: string;

  @ApiProperty({
    example: 'http://example.ru/path/file.json',
    description: 'token uriUrl',
  })
  readonly uriUrl: string;

  @ApiProperty({
    example: 'F4DLCvooBEZSCtzd7JnWB7gdjGEzCrRNkUeqVnefPZrD',
    description: 'address wallet who create this token',
  })
  readonly owner: string;

  @ApiProperty({
    example: 'solana',
    description: 'token name',
  })
  readonly name: string;

  @ApiProperty({
    example: 'SOL',
    description: 'token symbol',
  })
  readonly symbol: string;

  @ApiProperty({
    example: 'solana token',
    description: 'token description',
  })
  readonly description: string;

  @ApiProperty({
    example: 'devnet',
    description: 'token creation network',
  })
  readonly network: string;
}
