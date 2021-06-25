import React from "react";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import PublicRoutes from "./routes/public.routes";
import PrivateRoutes from "./routes/private.routes";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  const theme = createMuiTheme({
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

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Provider store={store}>
          <BrowserRouter>
            <PublicRoutes />
            <PrivateRoutes props={props} />
          </BrowserRouter>
        </Provider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
