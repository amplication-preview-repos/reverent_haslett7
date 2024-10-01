import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GradePassbackService } from "./gradePassback.service";
import { GradePassbackControllerBase } from "./base/gradePassback.controller.base";

@swagger.ApiTags("gradePassbacks")
@common.Controller("gradePassbacks")
export class GradePassbackController extends GradePassbackControllerBase {
  constructor(protected readonly service: GradePassbackService) {
    super(service);
  }
}
