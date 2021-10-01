import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useFormikContext } from "formik";

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
  } = props;

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    formikContext.setFieldValue(name, target.value);
  }

  return (
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
      helperText={formikContext.errors[name]}
      error={!!formikContext.errors[name]}
      disabled={disabled}
      InputProps={{
        endAdornment: adornment && (
          <InputAdornment position="end">{adornment}</InputAdornment>
        ),
      }}
    />
  );
}

export default FormikTextField;
