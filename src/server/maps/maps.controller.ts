import { Controller,Get } from '@nestjs/common';

@Controller('maps')
export class MapsController {
    @Get()
    getMap() {
        return {"name":"hi"};
    }
}
