import { Button, Divider } from "@mui/material";
import React from "react";

const CategoryDivider = ({ textAlign, button }) => {
  return (
    <Divider textAlign={textAlign}>
      <Button>{button}</Button>
    </Divider>
  );
};

export default CategoryDivider;
