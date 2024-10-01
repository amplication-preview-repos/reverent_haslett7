import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeepLinkingService } from "./deepLinking.service";
import { DeepLinkingControllerBase } from "./base/deepLinking.controller.base";

@swagger.ApiTags("deepLinkings")
@common.Controller("deepLinkings")
export class DeepLinkingController extends DeepLinkingControllerBase {
  constructor(protected readonly service: DeepLinkingService) {
    super(service);
  }
}
