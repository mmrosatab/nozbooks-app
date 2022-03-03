import React, { useState } from "react";
import { Container, LoginContainer } from "./styles";
import { TextField, Box, Button, Tooltip } from "@mui/material";
import logo from "../../assets/logos/white_noz.svg";

function Login() {
  const [showToolTip, setShowToolTip] = useState(true);

  function validate(email, password) {
    const errors = [];

    if (email.length === 0) {
      errors.push("Email can't be empty");
    }

    if (password.length === 0) {
      errors.push("Password can't be empty");
    }
    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");
    const errors = validate(email, password);

    if (errors) {
      // show erros user
      setShowToolTip(true);
    }

    // send request here

    // check wrong response and show message to user
  }

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
            InputLabelProps={{ ...inputLabelStyle }}
          />
          <Tooltip
            title="Email e/ou senha incorretos."
            placement="bottom-start"
            arrow
            open={showToolTip ? true : false}
            componentsProps={{ ...tooltipStyle }}
          >
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
              InputLabelProps={{ ...inputLabelStyle }}
            ></TextField>
          </Tooltip>
        </Box>
      </LoginContainer>
    </Container>
  );
}

const inputLabelStyle = { style: { color: "#FFFFFF", opacity: 0.5 } };
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

const tooltipStyle = {
  tooltip: {
    sx: {
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      "& .MuiTooltip-arrow": {
        color: "rgba(255, 255, 255, 0.4)",
      },
      height: "50px",
      fontWeight: "bold",
      fontSize: "12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
};

export default Login;
