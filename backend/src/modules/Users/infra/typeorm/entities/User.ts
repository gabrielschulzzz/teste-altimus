import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string

    @Column({ select: false })
    password: string
}

export { User }