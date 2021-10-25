import { FC } from "react";
import { useFormikContext } from "formik";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

const StyledFormikSelectWrapper = styled.div`
  margin-top: 0.5rem;
  .MuiSelect-select {
    padding: 0.75rem 0.5rem;
  }
`;

interface IFormikSelectProps {
  name: string;
  label: string;
  values: string[];
  variant?: "outlined" | "filled" | "standard";
  size?: "medium" | "small";
  margin?: "none" | "dense";
}

const FormikSelect: FC<IFormikSelectProps> = ({
  name,
  label,
  values,
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
    <StyledFormikSelectWrapper>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formikContext.values[name]}
          label={label}
          onChange={handleChange}
          error={
            formikContext.touched[name] && formikContext.errors[name]
              ? true
              : false
          }
          variant={variant}
          size={size}
          margin={margin}
          defaultValue={formikContext.values[name]}
        >
          {selectValues.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {formikContext.touched[name] && formikContext.errors[name] && (
          <FormHelperText sx={{ color: "red" }}>
            {formikContext.errors[name]}
          </FormHelperText>
        )}
      </FormControl>
    </StyledFormikSelectWrapper>
  );
};

export default FormikSelect;
