import { Module } from "@nestjs/common";
import { ContentSelectionModuleBase } from "./base/contentSelection.module.base";
import { ContentSelectionService } from "./contentSelection.service";
import { ContentSelectionController } from "./contentSelection.controller";
import { ContentSelectionResolver } from "./contentSelection.resolver";

@Module({
  imports: [ContentSelectionModuleBase],
  controllers: [ContentSelectionController],
  providers: [ContentSelectionService, ContentSelectionResolver],
  exports: [ContentSelectionService],
})
export class ContentSelectionModule {}
