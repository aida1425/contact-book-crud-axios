import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Edit = ({ getOneContact, oneContact, updateContact }) => {
  const params = useParams();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  function handleSave() {
    let editedContact = {
      name,
      surname,
      phone,
    };
    updateContact(params.id, editedContact);
    navigate("/");
  }
  useEffect(() => {
    getOneContact(params.id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setSurname(oneContact.surname);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);

  return (
    <Container>
      {oneContact ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          marginTop={"50px"}>
          <TextField
            value={name}
            onChange={e => setName(e.target.value)}
            label="Name"
            variant="filled"
          />
          <TextField
            value={surname}
            onChange={e => setSurname(e.target.value)}
            label="Surname"
            variant="filled"
          />
          <TextField
            value={phone}
            onChange={e => setPhone(e.target.value)}
            label="Phone Number"
            variant="filled"
          />
          <Button onClick={() => handleSave()} variant="contained">
            Save
          </Button>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Edit;
