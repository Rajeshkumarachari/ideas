import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
};

const ModalWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
});

export default function BasicModal({
  handleClose,
  handleOpen,
  open,
  getChallenge,
}) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [tag, setTag] = React.useState("");

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const postChallenge = () => {
    axios
      .post("http://localhost:5000/challenge", {
        title: title,
        description: description,
        tags: tag,
        likes: Math.floor(Math.random() * 20 + 1),
      })
      .then(function (response) {
        console.log(response);
        handleClose();
        getChallenge();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalWrapper>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tags</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tag}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Innovative"}>Innovative</MenuItem>
                  <MenuItem value={"Frontend"}>Frontend</MenuItem>
                  <MenuItem value={"Backend"}>Backend</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button variant="contained" onClick={() => postChallenge()}>
              Add
            </Button>
          </ModalWrapper>
        </Box>
      </Modal>
    </div>
  );
}
