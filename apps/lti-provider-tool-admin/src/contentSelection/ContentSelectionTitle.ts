import { ContentSelection as TContentSelection } from "../api/contentSelection/ContentSelection";

export const CONTENTSELECTION_TITLE_FIELD = "selectionId";

export const ContentSelectionTitle = (record: TContentSelection): string => {
  return record.selectionId?.toString() || String(record.id);
};
