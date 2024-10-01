import { LaunchRequest as TLaunchRequest } from "../api/launchRequest/LaunchRequest";

export const LAUNCHREQUEST_TITLE_FIELD = "message";

export const LaunchRequestTitle = (record: TLaunchRequest): string => {
  return record.message?.toString() || String(record.id);
};
