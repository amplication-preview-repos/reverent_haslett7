import { Module } from "@nestjs/common";
import { LaunchRequestModuleBase } from "./base/launchRequest.module.base";
import { LaunchRequestService } from "./launchRequest.service";
import { LaunchRequestController } from "./launchRequest.controller";
import { LaunchRequestResolver } from "./launchRequest.resolver";

@Module({
  imports: [LaunchRequestModuleBase],
  controllers: [LaunchRequestController],
  providers: [LaunchRequestService, LaunchRequestResolver],
  exports: [LaunchRequestService],
})
export class LaunchRequestModule {}
