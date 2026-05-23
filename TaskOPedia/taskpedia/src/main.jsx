import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FakeHeader from "./Layout/Header";
import FakeFooter from "./Layout/Footer";
const root = createRoot(document.getElementById("root"));

// eslint-disable-next-line react-refresh/only-export-components
function HomePage() {
  return (
    <div>
      <FakeHeader />
      <p>TaskoPedia</p>
      <FakeFooter />
    </div>
  );
}

root.render(
  <div>
    <HomePage />
  </div>,
);
