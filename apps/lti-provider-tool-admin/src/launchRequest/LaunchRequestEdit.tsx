import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LaunchRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" source="message" />
        <TextInput label="resourceLinkId" source="resourceLinkId" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};
