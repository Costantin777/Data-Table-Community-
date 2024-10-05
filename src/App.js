import React from "react";
import DataTable from "./components/DataTable";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DataTable />
      </div>
    </Provider>
  );
}

export default App;
import React from "react";
