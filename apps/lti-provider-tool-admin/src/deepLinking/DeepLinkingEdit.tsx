import * as React from "react";
import { Edit, SimpleForm, EditProps } from "react-admin";

export const DeepLinkingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};
