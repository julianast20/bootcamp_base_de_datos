import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';
import { Student } from './entidades/Student';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//Endpoint 1
  @Get()
  getHello(): string {
    return "Ficha 2898754";
  }

//Endpoint 2
  @Get("/ejemplo")
  ejemplo() : string {
    return "ejemplo"
  }

//Endpoint 3
@Get("/identificacion/:id/nombre/:nombre")
getIdentificacion(@Param("id") id:number, @Param("nombre") nom:string, @Query("telefono") tel:number, @Query ("edad") edad:number):Student{
  return new Student(id,nom,tel,edad)

  /*numero_id: id,
  nombre: nom,
  telefono: tel, 
  edad: edad*/
  
//  `numero de identificacion: ${id}, nombre : ${nom}, telefono: ${tel}, ciudad: ${ciu}`
}
}
