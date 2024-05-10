import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'credential'})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true, type: "varchar", length: 200})
    username: string

    @Column({type: "text"})
    password: string
}