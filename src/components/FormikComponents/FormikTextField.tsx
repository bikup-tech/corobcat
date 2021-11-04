import { InputAdornment, TextField } from "@mui/material";

import React from "react";
import styled from "styled-components";
import { useFormikContext } from "formik";

const StyledFormikTextFieldWrapper = styled.div`
  input {
    padding: 0.75rem 0.5rem;
  }
`;

interface IFormikTextFieldProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  variant?: "outlined" | "filled" | "standard";
  size?: "medium" | "small";
  margin?: "normal" | "dense";
  autofocus?: boolean;
  fullWidth?: boolean;
  adornment?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
}

function FormikTextField(props: IFormikTextFieldProps) {
  const formikContext = useFormikContext<any>();

  const {
    name,
    label,
    placeholder,
    variant = "outlined",
    size = "medium",
    type = "text",
    margin = "dense",
    autofocus = false,
    fullWidth = false,
    adornment = null,
    disabled = false,
    min,
    max,
  } = props;

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    formikContext.setFieldValue(name, target.value);
  }

  return (
    <StyledFormikTextFieldWrapper className="formikTextField">
      <TextField
        variant={variant}
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        size={size}
        onChange={handleChange}
        value={formikContext.values[name]}
        autoFocus={autofocus}
        fullWidth={fullWidth}
        margin={margin}
        helperText={
          formikContext.touched[name] &&
          formikContext.errors[name] &&
          formikContext.errors[name]
        }
        error={
          formikContext.touched[name] && formikContext.errors[name]
            ? true
            : false
        }
        disabled={disabled}
        InputProps={{
          inputProps: {
            min,
            max,
          },
          endAdornment: adornment && (
            <InputAdornment position="end">{adornment}</InputAdornment>
          ),
        }}
      />
    </StyledFormikTextFieldWrapper>
  );
}

export default FormikTextField;
