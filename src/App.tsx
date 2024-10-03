import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import MainPage from "@/pages/index";
import { AddNewsPage } from "@/pages/add-news.tsx";
import { store } from "@/config/store.ts";
import EditNewsPage from "@/pages/edit-news.tsx";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<AddNewsPage />} path="/add" />
        <Route element={<EditNewsPage />} path="/edit/:id" />
      </Routes>
    </Provider>
  );
}

export default App;
