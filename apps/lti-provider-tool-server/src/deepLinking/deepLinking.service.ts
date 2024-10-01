import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeepLinkingServiceBase } from "./base/deepLinking.service.base";

@Injectable()
export class DeepLinkingService extends DeepLinkingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
