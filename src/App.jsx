import { useLocation } from "react-router-dom";
import "./App.css";
import AuthLayout from "./layouts/authLayout";
import MainLayout from "./layouts/mainLayout";
import useChangeMode from "./hooks/useChangeMode";
import useLanguage from "./hooks/useLanguage";
import AppRoutes from "./routes";
function App() {
  const location = useLocation();
  const changeMode = useChangeMode();
  const changeLanguage = useLanguage();
  const auth = ["/sign-in", "/sign-up", "/forget-password"];
  const isAuth = auth.some((single) => single == location.pathname);
  return (
    <div className="App">
      {isAuth ? (
        <AuthLayout />
      ) : (
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      )}
    </div>
  );
}

export default App;
