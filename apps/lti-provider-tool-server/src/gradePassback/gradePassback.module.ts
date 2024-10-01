import { Module } from "@nestjs/common";
import { GradePassbackModuleBase } from "./base/gradePassback.module.base";
import { GradePassbackService } from "./gradePassback.service";
import { GradePassbackController } from "./gradePassback.controller";
import { GradePassbackResolver } from "./gradePassback.resolver";

@Module({
  imports: [GradePassbackModuleBase],
  controllers: [GradePassbackController],
  providers: [GradePassbackService, GradePassbackResolver],
  exports: [GradePassbackService],
})
export class GradePassbackModule {}
