import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ContactCard({ item, deleteContact }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}>
      <Card
        sx={{
          maxWidth: 345,
          marginTop: 5,
        }}>
        <CardMedia
          component="img"
          height="300"
          width="200"
          image="https://e7.pngegg.com/pngimages/277/785/png-clipart-computer-icons-google-play-android-google-contacts-others-miscellaneous-blue-thumbnail.png"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.surname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => deleteContact(item.id)} size="small">
            Delete
          </Button>
          <Link to={`/edit/${item.id}`}>
            <Button size="small">Edit</Button>
          </Link>
          <Link to={`/details/${item.id}`}>
            <Button size="small">Details</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
