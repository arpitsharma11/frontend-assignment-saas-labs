import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./utils/queryClient";
import DummyPage from "./page/DummyPage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DummyPage />
    </QueryClientProvider>
  );
}

export default App;
