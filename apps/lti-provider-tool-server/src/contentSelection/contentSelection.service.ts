import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContentSelectionServiceBase } from "./base/contentSelection.service.base";

@Injectable()
export class ContentSelectionService extends ContentSelectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
