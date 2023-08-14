import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import Next from "next";
import { AppController } from "./app.controller";
import { MapsController } from "./maps/maps.controller";
import { AppService } from "./app.service";

@Module({
  /* should pass a NEXT.js server instance
        as the argument to `forRootAsync` */
  imports: [RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: null })],
  controllers: [AppController, MapsController],
  providers: [AppService],
})
export class AppModule {}
