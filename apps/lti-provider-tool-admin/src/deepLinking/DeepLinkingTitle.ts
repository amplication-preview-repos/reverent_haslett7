import { DeepLinking as TDeepLinking } from "../api/deepLinking/DeepLinking";

export const DEEPLINKING_TITLE_FIELD = "id";

export const DeepLinkingTitle = (record: TDeepLinking): string => {
  return record.id?.toString() || String(record.id);
};
