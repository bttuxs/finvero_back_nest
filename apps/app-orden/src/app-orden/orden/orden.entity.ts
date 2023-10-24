import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { ordenDetalleEntity } from '../orden-detalle/orden-detalle.entity';

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
  @OneToMany(() => ordenDetalleEntity, (ordenDetalle) => ordenDetalle.orden)
  @JoinColumn({ name: 'orden', referencedColumnName: 'orden_id' })
  items: ordenDetalleEntity[];
}
