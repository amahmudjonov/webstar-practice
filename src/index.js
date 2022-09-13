import React, {StrictMode} from "react";
import { createRoot } from 'react-dom/client'
// import App from "./DiziPro/app";
// import './DiziPro/style/main.css'
// import './DiziPro/style/responsive.css'
import InputChange from "./inputchange";
import App from "./practice/app";
import './practice/style/main.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)