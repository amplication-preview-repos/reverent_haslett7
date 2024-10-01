import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LaunchRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LaunchRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
        <TextField label="resourceLinkId" source="resourceLinkId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />{" "}
      </Datagrid>
    </List>
  );
};
