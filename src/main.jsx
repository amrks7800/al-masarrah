import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "normalize.css"
import "./index.css"
import "./utils.css"
import "./reset.css"
import App from "./App.jsx"
import { Provider } from "react-redux"
import store from "./store"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
