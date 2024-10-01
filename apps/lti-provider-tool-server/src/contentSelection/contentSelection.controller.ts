import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContentSelectionService } from "./contentSelection.service";
import { ContentSelectionControllerBase } from "./base/contentSelection.controller.base";

@swagger.ApiTags("contentSelections")
@common.Controller("contentSelections")
export class ContentSelectionController extends ContentSelectionControllerBase {
  constructor(protected readonly service: ContentSelectionService) {
    super(service);
  }
}
