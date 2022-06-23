import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Details = ({ getOneContact, oneContact }) => {
  console.log(oneContact);
  const params = useParams();
  // console.log(params);
  useEffect(() => {
    getOneContact(params.id);
  }, []);
  return (
    <Container>
      {oneContact ? (
        <Box
          marginTop={"20px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}>
          <Typography variant="h5">{oneContact.name}</Typography>
          <Typography variant="h5">{oneContact.surname}</Typography>
          <Typography variant="h5">{oneContact.phone}</Typography>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Details;
