import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BasicTable from "./components/Table";
import { Box, Grid, Container } from "@mui/material";
import MyButton from "./components/Button";

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, width: "100%", height: "100%" }}>
        <Grid container spacing={2} p={3} justifyContent="center">
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <MyButton />
          </Grid>
          <Grid item xs={12}>
            <BasicTable />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
