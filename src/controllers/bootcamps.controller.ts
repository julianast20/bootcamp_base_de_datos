import { Controller, Get, Param} from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

//endpoint
    @Get()
    getAllBootcamps(): string {
        return "aqui van a mostrarse todos los bootcamps"
    }

//endpoint2
    @Get(":id")
    getAllBootcamps5(@Param("id") id:number){
        return `aqui van a mostrarse todos los bootcamps, id:${id}`
    }
    }

