import { DeepLinkingWhereInput } from "./DeepLinkingWhereInput";
import { DeepLinkingOrderByInput } from "./DeepLinkingOrderByInput";

export type DeepLinkingFindManyArgs = {
  where?: DeepLinkingWhereInput;
  orderBy?: Array<DeepLinkingOrderByInput>;
  skip?: number;
  take?: number;
};
