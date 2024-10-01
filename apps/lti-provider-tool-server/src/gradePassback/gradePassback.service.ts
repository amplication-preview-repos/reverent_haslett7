import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GradePassbackServiceBase } from "./base/gradePassback.service.base";

@Injectable()
export class GradePassbackService extends GradePassbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
