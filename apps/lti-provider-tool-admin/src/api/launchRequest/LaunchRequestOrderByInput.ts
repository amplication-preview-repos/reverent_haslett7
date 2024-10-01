import { SortOrder } from "../../util/SortOrder";

export type LaunchRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  resourceLinkId?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
