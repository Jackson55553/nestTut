import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  address: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'F4DLCvooBEZSCtzd7JnWB7gdjGEzCrRNkUeqVnefPZrD',
    description: 'address wallet',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  address: string;

  @ApiProperty({
    example: 'true',
    description: 'banned users',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;
}
