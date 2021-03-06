import React from "react";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import PublicRoutes from "./routes/public.routes";
import PrivateRoutes from "./routes/private.routes";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  const theme = createMuiTheme({
    props: {
      MuiPaper: {
        elevation: 0,
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
      <Paper>
        <SnackbarProvider maxSnack={1}>
          <Provider store={store}>
            <BrowserRouter>
              {!!isAuth ? <PrivateRoutes props={props} /> : <PublicRoutes />}
            </BrowserRouter>
          </Provider>
        </SnackbarProvider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
