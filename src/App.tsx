import { ThemeProvider } from "styled-components";
import { Header } from "./components/header/Header";
import { GlobalStyle } from "./theme/Global";
import { Theme } from "./theme/Theme";
import { Routes,  Route } from 'react-router-dom'
import { Home } from "./pages/home/Home";
import { Admin } from "./pages/admin/Admin";
import { Control } from "./pages/control/Control";
import { NewLocation } from "./pages/new/new";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/control" element={<Control />} />
        <Route path="/admin/nova-locacao" element={<NewLocation />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App
