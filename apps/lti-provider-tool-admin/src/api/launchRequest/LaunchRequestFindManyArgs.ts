import { LaunchRequestWhereInput } from "./LaunchRequestWhereInput";
import { LaunchRequestOrderByInput } from "./LaunchRequestOrderByInput";

export type LaunchRequestFindManyArgs = {
  where?: LaunchRequestWhereInput;
  orderBy?: Array<LaunchRequestOrderByInput>;
  skip?: number;
  take?: number;
};
