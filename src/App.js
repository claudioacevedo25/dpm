import React from "react";
import PublicRoutes from "./routes/public.routes";
import PrivateRoutes from "./routes/privateRoutes";

function App(props) {
  return (
    <div>
      <PublicRoutes />
      <PrivateRoutes props={props} />
    </div>
  );
}

export default App;
