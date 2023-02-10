import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

type SelectorType = {
  value: string;
  text?: string;
};

interface DropDownSelectType {
  label: string;
  selectors: Array<SelectorType>;
  value: string;
  setData: (res: string) => void;
}

export default function DropDownSelect({
  label,
  selectors,
  value,
  setData,
}: DropDownSelectType) {
  function handleChange(e: SelectChangeEvent) {
    setData(e.target.value);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        {selectors.map((sel, i) => (
          <MenuItem value={sel.value} key={i}>
            {sel.text ? sel.text : sel.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
