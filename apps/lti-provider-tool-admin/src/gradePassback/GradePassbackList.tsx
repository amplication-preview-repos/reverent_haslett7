import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GradePassbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GradePassbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="score" source="score" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />{" "}
      </Datagrid>
    </List>
  );
};
