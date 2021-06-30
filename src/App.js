import React from "react";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import PublicRoutes from "./routes/public.routes";
import PrivateRoutes from "./routes/private.routes";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  const theme = createMuiTheme({
    props: {
      MuiDrawer: {},
      MuiPaper: {
        elevation: {
          boxShadow: "none",
        },
      },
    },

    palette: {
      background: {
        paper: "0f0f1f",
      },
      type: "dark",
      primary: {
        main: "#20BA87",
      },
    },

    typography: {
      fontFamily: "Poppins",
    },
  });

  const isAuth = sessionStorage.getItem("user");

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ marginLeft: "250px" }}>
        <Provider store={store}>
          <BrowserRouter>
            {!!isAuth ? <PrivateRoutes props={props} /> : <PublicRoutes />}
          </BrowserRouter>
        </Provider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
