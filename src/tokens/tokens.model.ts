import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TokenCreationAttrs {
  tokenAddress: string;
  imageUrl: string;
  uriUrl: string;
  owner: string;
  name: string;
  symbol: string;
  description: string;
}

@Table({ tableName: 'tokens' })
export class Token extends Model<Token, TokenCreationAttrs> {
  @ApiProperty({ example: '1', description: 'id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'F4DLCvooBEZSCtzd7JnWB7gdjGEzCrRNkUeqVnefPZrD',
    description: 'token address',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  tokenAddress: string;

  @ApiProperty({
    example: 'http://example.ru/path/file.png',
    description: 'image url',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  imageUrl: string;

  @ApiProperty({
    example: 'http://example.ru/path/file.json',
    description: 'image url',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  uriUrl: string;

  @ApiProperty({
    example: 'F4DLCvooBEZSCtzd7JnWB7gdjGEzCrRNkUeqVnefPZrD',
    description: 'address wallet',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  owner: string;

  @ApiProperty({
    example: 'solana',
    description: 'token name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'SOL',
    description: 'token symbol',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  symbol: string;

  @ApiProperty({
    example: 'solana token',
    description: 'token description',
  })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;
}
