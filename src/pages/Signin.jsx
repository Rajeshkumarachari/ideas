import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled("div")({
  backgroundColor: "#81689D",
  padding: 8,
  borderRadius: 4,
  height: "50vh",
  width: "50vw",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "grid",
  placeContent: "center",
  gap: "1rem",
});

const Signin = () => {
  const [empId, setEmpId] = useState("");
  const navigate = useNavigate();

  const postEmpDetails = () => {
    axios
      .post("http://localhost:5000/profile", {
        empId: empId,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          navigate("/dashboard");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <TextField
        id="outlined-basic"
        label="EmployeId"
        variant="outlined"
        onChange={(e) => setEmpId(e.target.value)}
      />
      <Button variant="contained" onClick={() => postEmpDetails()}>
        Submit
      </Button>
    </Wrapper>
  );
};

export default Signin;
