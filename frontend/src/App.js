import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import ContextProvider from "./contexts";

function App() {
  return (
    <ContextProvider>
      <Header />
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
