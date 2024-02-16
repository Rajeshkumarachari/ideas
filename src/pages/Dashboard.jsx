import styled from "@emotion/styled";
import React, { useEffect } from "react";
import ChallengeCard from "../components/ChallengeCard";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "../components/AddTaskModal";

const MainContainer = styled("div")({
  height: "90vh",
});

const ChallengeContainer = styled("div")({
  backgroundColor: "#474F7A",
  padding: "1rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem ",
  height: "90vh",
});

const NewIconWrapper = styled("div")({
  height: "7vh",
  width: "7vh",
  borderRadius: "50%",
  border: "2px solid #81689D",
  display: "grid",
  placeContent: "center",
  cursor: "pointer",
  position: "absolute",
  top: "12vh",
  right: "1rem",
  backgroundColor: "#81689D",
});

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [challenges, setChallenges] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getChallenge();
  }, []);

  const getChallenge = () => {
    axios
      .get("http://localhost:5000/challenge")
      .then(function (response) {
        setChallenges(response.data);
        console.log(response, "Res");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(challenges, "challenges");

  return (
    <>
      <MainContainer>
        <ChallengeContainer>
          {challenges &&
            challenges.map((challenge, i) => {
              return (
                <ChallengeCard
                  data={challenge}
                  key={i}
                  getChallenge={getChallenge}
                />
              );
            })}
        </ChallengeContainer>

        <NewIconWrapper onClick={() => handleOpen()}>
          <AddIcon fontSize="large" />
        </NewIconWrapper>
      </MainContainer>

      <BasicModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        getChallenge={getChallenge}
      />
    </>
  );
};

export default Dashboard;
