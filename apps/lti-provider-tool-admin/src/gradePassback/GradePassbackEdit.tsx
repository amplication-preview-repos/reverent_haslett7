import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GradePassbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <NumberInput label="score" source="score" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
