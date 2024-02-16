import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, Chip } from "@mui/material";
import axios from "axios";

export default function ChallengeCard({ data, getChallenge }) {
  //console.log(data, "DATTA");
  const [liked, setLiked] = React.useState(false);

  const updateChallenge = () => {
    axios
      .patch(`http://localhost:5000/challenge/${data?.id}`, {
        likes: liked ? data?.likes - 1 : data?.likes + 1,
      })
      .then((res) => getChallenge())
      .catch((err) => console.log(err));

    setLiked((prev) => !prev);
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        flexWrap: "wrap",
        height: "max-content",
      }}
    >
      <CardHeader title={data?.title} sx={{ padding: "1rem" }} />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "flex-start",
          padding: "0.5rem 1",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
        <Chip label={data?.tags} variant="outlined" />
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0.5rem 1",
        }}
      >
        <Typography>{data?.likes}</Typography>
        <IconButton
          aria-label="add to favorites"
          onClick={() => updateChallenge()}
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
