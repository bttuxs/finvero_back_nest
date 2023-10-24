import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity({ name: 'orden' })
export class ordenEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  id_usuario: number;
  @Column({ type: 'uuid', length: 36, unique: true })
  @Generated('uuid')
  orden: string;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
