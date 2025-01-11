import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";

function App() {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [submittedData, setSubmittedData] = useState(null); // State for displayed data

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Display random data on submission
    const randomData = {
      id: Math.floor(Math.random() * 1000),
      name: inputValue || "John Doe",
      company: "Random Corp",
      city: "Random City",
      location: "Random Location",
      post: "Random Post",
      office: "Random Office",
      id2: Math.floor(Math.random() * 5000),
    };
    setSubmittedData(randomData);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          LEI
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="LEI details"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Submit
          </Button>
        </Box>

        {submittedData && (
          <Box
            sx={{
              mt: 4,
              p: 2,
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Submitted Details:
            </Typography>
            <Typography variant="body1">ID: {submittedData.id}</Typography>
            <Typography variant="body1">Name: {submittedData.name}</Typography>
            <Typography variant="body1">
              Company: {submittedData.company}
            </Typography>
            <Typography variant="body1">City: {submittedData.city}</Typography>
            <Typography variant="body1">
              Location: {submittedData.location}
            </Typography>
            <Typography variant="body1">Post: {submittedData.post}</Typography>
            <Typography variant="body1">
              Office: {submittedData.office}
            </Typography>
            <Typography variant="body1">ID2: {submittedData.id2}</Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default App;
