import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const SInput = ({ name, label, value, change, type, error }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        id={name}
        bsSize="lg"
        onChange={change}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </FormGroup>
  );
};

export default SInput;
