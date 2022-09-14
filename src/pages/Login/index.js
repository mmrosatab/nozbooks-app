import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Container, LoginContainer } from "./styles";
import {
  TextField,
  Box,
  Button,
  Tooltip,
  ClickAwayListener,
} from "@mui/material";

import { whiteLogo } from "../../constants/images";

function initialState() {
  return { email: "", password: "" };
}

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [showToolTip, setShowToolTip] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const handleClickAway = () => {
    setShowToolTip(false);
  };

  function validate() {
    if (values.email.length === 0 || values.password.length === 0) {
      setUserMessage("E-mail e senha não podem estar vazios");
      return false;
    }
    return true;
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validate()) {
      setShowToolTip(true);
      setValues(initialState);
      return;
    }

    const value = await auth.login(values);
    if (value !== null) {
      navigate("/home");
      return;
    }

    setUserMessage("Email e/ou senha incorretos.");
    setShowToolTip(true);
    setValues(initialState);
  }

  return (
    <Container>
      <LoginContainer>
        <div id="title-div">
          <div>
            <img src={whiteLogo} alt="logo" />
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
            onChange={handleChange}
            value={values.email}
          />
          <ClickAwayListener onClickAway={handleClickAway}>
            <Tooltip
              title={userMessage}
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
                onChange={handleChange}
                value={values.password}
              ></TextField>
            </Tooltip>
          </ClickAwayListener>
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
