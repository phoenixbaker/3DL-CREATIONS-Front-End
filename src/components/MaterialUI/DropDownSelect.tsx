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
  setStock: (res: string) => void;
}

export default function DropDownSelect({
  label,
  selectors,
  value,
  setStock,
}: DropDownSelectType) {
  function handleChange(e: SelectChangeEvent) {
    setStock(e.target.value);
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
