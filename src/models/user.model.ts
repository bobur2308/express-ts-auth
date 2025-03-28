import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class UserModel extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique:true
  })
  user_name!: string;

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true, // ✅ Automatically increment ID using a sequence
    primaryKey: true, // ✅ Set as primary key
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
}
