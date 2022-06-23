import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  function handleCreate() {
    if (!name || !surname || !phone) {
      alert("Заполните все поля");
    } else {
      let newContact = {
        name,
        surname,
        phone,
      };
      addContact(newContact);
      navigate("/");
    }
  }
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}>
      <TextField
        value={name}
        label="Name"
        variant="outlined"
        onChange={e => setName(e.target.value)}
      />
      <TextField
        value={surname}
        label="Surname"
        variant="outlined"
        onChange={e => setSurname(e.target.value)}
      />
      <TextField
        value={phone}
        label="Phone"
        variant="outlined"
        onChange={e => setPhone(e.target.value)}
      />
      <Button onClick={() => handleCreate()} sx={{ m: 1 }} variant="contained">
        Create
      </Button>
    </Box>
  );
};

export default AddContact;
