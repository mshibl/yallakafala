import TextField from "@mui/material/TextField";
import React from "react";

interface FormTextFieldProps {
  locale: string;
  label: string;
  placeholder: string;
  value: string;
  setMessage: Function;
}
const FormTextField: React.FC<FormTextFieldProps> = ({
  label,
  placeholder,
  value,
  setMessage,
  locale,
}) => {
  return (
    <TextField
      color="primary"
      id="outlined-multiline-static"
      label={label}
      placeholder={placeholder}
      type="text"
      value={value}
      fullWidth
      onChange={(e) => {
        setMessage((prevState: any) => {
          return {
            ...prevState,
            message: e.target.value,
          };
        });
      }}
      sx={{
        marginBottom: "1em",
        "& label":
          locale === "ar"
            ? {
                transformOrigin: "right !important",
                left: "inherit !important",
                right: "1.75rem !important",
                overflow: "unset",
              }
            : {},
        "& legend": locale === "ar" ? { textAlign: "right" } : {},
      }}
    />
  );
};

export default FormTextField;
