import { ContentSelectionWhereInput } from "./ContentSelectionWhereInput";
import { ContentSelectionOrderByInput } from "./ContentSelectionOrderByInput";

export type ContentSelectionFindManyArgs = {
  where?: ContentSelectionWhereInput;
  orderBy?: Array<ContentSelectionOrderByInput>;
  skip?: number;
  take?: number;
};
