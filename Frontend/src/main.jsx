import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="dark:bg-slate-900 dark:text-white">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </BrowserRouter>
);
