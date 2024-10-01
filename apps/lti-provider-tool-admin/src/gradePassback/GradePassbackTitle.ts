import { GradePassback as TGradePassback } from "../api/gradePassback/GradePassback";

export const GRADEPASSBACK_TITLE_FIELD = "userId";

export const GradePassbackTitle = (record: TGradePassback): string => {
  return record.userId?.toString() || String(record.id);
};
