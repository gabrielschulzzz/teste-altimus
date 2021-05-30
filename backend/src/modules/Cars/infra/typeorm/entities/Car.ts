import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('cars')
class Car {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    placa: string

    @Column()
    marca: string

    @Column()
    modelo: string

    @Column()
    ano: string

    @Column()
    quilometragem: number

    @Column("text", { array: true, nullable: true })
    opcionais: string[];
}

export { Car }
