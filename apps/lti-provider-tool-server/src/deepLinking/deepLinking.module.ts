import { Module } from "@nestjs/common";
import { DeepLinkingModuleBase } from "./base/deepLinking.module.base";
import { DeepLinkingService } from "./deepLinking.service";
import { DeepLinkingController } from "./deepLinking.controller";
import { DeepLinkingResolver } from "./deepLinking.resolver";

@Module({
  imports: [DeepLinkingModuleBase],
  controllers: [DeepLinkingController],
  providers: [DeepLinkingService, DeepLinkingResolver],
  exports: [DeepLinkingService],
})
export class DeepLinkingModule {}
