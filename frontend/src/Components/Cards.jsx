import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards({ id, summary, title, createdDate }) {
  const createdAtDate = new Date(createdDate.toString());

  const imageLink =
    "https://imgs.search.brave.com/fXd4lPQ-VGV-38zBBz8Qwp-6YXaRcPDoK2GEZaU599g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw";

  return (
    <Card
      sx={{
        width: 400,
        my: 2,
      }}
    >
      <CardHeader
        title={<Link to={`/blog/${id}`}>{title}</Link>}
        subheader={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>Regular Author</div>
            <div style={{ fontSize: 10 }}>
              {format(new Date(createdDate), " MMM d, yyyy")}
            </div>
          </div>
        }
        subheaderTypographyProps={{ fontSize: 15, fontWeight: "800" }}
        titleTypographyProps={{
          fontSize: 20,
          fontWeight: "1000",
          display: "flex",
          justifyContent: "center",
        }}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageLink}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
