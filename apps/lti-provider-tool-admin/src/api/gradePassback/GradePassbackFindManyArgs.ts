import { GradePassbackWhereInput } from "./GradePassbackWhereInput";
import { GradePassbackOrderByInput } from "./GradePassbackOrderByInput";

export type GradePassbackFindManyArgs = {
  where?: GradePassbackWhereInput;
  orderBy?: Array<GradePassbackOrderByInput>;
  skip?: number;
  take?: number;
};
