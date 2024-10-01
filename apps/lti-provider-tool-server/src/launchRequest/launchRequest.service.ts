import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LaunchRequestServiceBase } from "./base/launchRequest.service.base";

@Injectable()
export class LaunchRequestService extends LaunchRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
