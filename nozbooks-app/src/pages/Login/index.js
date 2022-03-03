import React from "react";
import { Container, LoginContainer } from "./styles";
import { TextField, Box, Button } from "@mui/material";
import logo from "../../assets/logos/NOZ.svg";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container>
      <LoginContainer>
        <div id="title-div">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>Books</div>
        </div>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="email-input"
            label="Email"
            name="email"
            type="email"
            autoComplete="off"
            variant="filled"
            margin="dense"
            fullWidth
            InputProps={{
              ...inputStyle,
            }}
            InputLabelProps={{ style: { color: "#FFFFFF", opacity: 0.5 } }}
          />

          <TextField
            id="password-input"
            label="Senha"
            type="password"
            name="password"
            autoComplete="off"
            variant="filled"
            margin="dense"
            fullWidth
            InputProps={{
              ...inputStyle,
              endAdornment: (
                <Button type="submit" variant="contained" sx={buttonStyle}>
                  Entrar
                </Button>
              ),
            }}
            InputLabelProps={{ style: { color: "#FFFFFF", opacity: 0.5 } }}
          ></TextField>
        </Box>
      </LoginContainer>
    </Container>
  );
}

const inputStyle = {
  style: {
    color: "#FFFFFF",
    backgroundColor: "rgb(0, 0, 0, 0.32)",
    borderRadius: "4px",
  },
  disableUnderline: true,
};

const buttonStyle = {
  "&.MuiButton-root": {
    borderRadius: "44px",
    color: "#B22E6F",
    backgroundColor: "#FFFFFF",
    textTransform: "capitalize",
    width: "24%",
    fontWeight: "bold",
  },
};

export default Login;
