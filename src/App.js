import React from "react";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      {/* <AuthContextProvider children={<AppRouter/>}/> */}
      {/* kullanımı yukarıdaki gibi tek satırlık da olabilir, aynı anlama geliyor. */}
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;
