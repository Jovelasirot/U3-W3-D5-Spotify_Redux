import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../scss/custom.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
