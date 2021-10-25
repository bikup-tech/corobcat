import { FC } from "react";
import { useFormikContext } from "formik";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

interface IFormikSelectProps {
  name: string;
  label: string;
  values: string[];
  placeholder?: string;
  variant?: "outlined" | "filled" | "standard";
  size?: "medium" | "small";
  margin?: "normal" | "dense";
}

const FormikSelect: FC<IFormikSelectProps> = ({
  name,
  label,
  values,
  placeholder,
  variant = "outlined",
  size = "medium",
  margin = "dense",
}) => {
  const formikContext = useFormikContext<any>();

  function handleChange({ target }: SelectChangeEvent) {
    formikContext.setFieldValue(name, target.value);
  }

  const selectValues = values.map((item) => ({
    label: item,
    value: item.toLowerCase(),
  }));

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formikContext.values[name]}
          label={label}
          onChange={handleChange}
          error={!!formikContext.errors[name]}
        >
          {selectValues.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText sx={{ color: "red" }}>
          {formikContext.errors[name]}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default FormikSelect;
