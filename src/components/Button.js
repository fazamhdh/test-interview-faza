import * as React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

export default function MyButton() {
  return (
    <Button
      variant="contained"
      startIcon={
        <IconButton sx={{ p: 0, color: "white" }}>
          <AddIcon />
        </IconButton>
      }
      sx={{
        borderRadius: 1,
        backgroundColor: "green",
        boxShadow: "none",
        textTransform: "none",
        width: "100%",
        "&:hover": {
          backgroundColor: "green",
        },
      }}
    >
      Create Post
    </Button>
  );
}
