import React from "react";
import ReactDOM from "react-dom/client";

// Импорт главного компонента App
import App from "./components/App/App";

import "./index.css";

// Рендер приложения в корневой элемент
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
