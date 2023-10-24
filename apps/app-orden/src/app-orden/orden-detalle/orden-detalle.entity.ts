import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ordenEntity } from '../orden/orden.entity';

@Entity({ name: 'orden_detalle' })
@Index('orden_item', ['orden', 'id_producto'], { unique: true })
export class ordenDetalleEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'uuid', length: 36 })
  orden_id: string;
  @Column()
  id_producto: number;
  @Column()
  cantidad: number;
  @Column({ type: 'float' })
  precio: number;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
  @ManyToOne(() => ordenEntity, (orden) => orden.items)
  @JoinColumn({ name: 'orden_id', referencedColumnName: 'orden' })
  orden: ordenEntity;
}
