import { lazy } from "react";

const HomePage = lazy(() => import("components/pages/Home/Home"));

function App() {
  return <HomePage/>;
}

export default App;
