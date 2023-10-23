import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'productos' })
export class productoEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  id_usuario: number;
  @Column({ unique: true })
  producto_nombre: string;
  @Column()
  producto_description: string;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
