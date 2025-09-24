import React from "react";
import Button from "@mui/material/Button";

function CustomButton({ text, onClick }) {
  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={onClick}
      sx={{
        borderRadius: "30px",
        padding: "10px 20px",
        textTransform: "none",
        fontSize: "1rem"
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
