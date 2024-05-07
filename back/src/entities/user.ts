import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./credential";
import { Appointment } from "./appointment";

@Entity({ name: "user" })
    export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 200})
    name: string

    @Column({ unique: true, type: "varchar", length: 200})
    email: string

    @Column({ type: "date" })
    birthdate: Date
    
    @Column({unique:true, type :"int"})
    dni_number: number

    @OneToOne(()=> Credential)
    @JoinColumn({ name: "credentialsId" })
    credentials: Credential

    @OneToMany(()=> Appointment, appointment=> appointment.user)
    appointment: Appointment[];

}