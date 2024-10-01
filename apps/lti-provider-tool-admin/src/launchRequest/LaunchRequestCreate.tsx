import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LaunchRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" source="message" />
        <TextInput label="resourceLinkId" source="resourceLinkId" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
