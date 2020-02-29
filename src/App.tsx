import { useLocalStorage } from "react-use-storage";
import React from "react";
import { useRoomStatistics } from "./hooks/api";
import LanguageDropdown from "./components/LanguageDropdown";
import { FetchForm } from "./components/FetchForm";
import { Table } from "./components/Table";
import { KPIs } from "./components/KPIs";
import { AppBar } from "@material-ui/core";
import { Language } from "./assets/translations";

export default function App() {
  const [lang, setLang] = useLocalStorage<Language>("lang", "en");
  const [{ data, loading, error }, getData] = useRoomStatistics();

  return (
    <div>
      <AppBar
        style={{
          margin: "3px",
          padding: "20px",
          backgroundColor: "black",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
        position="static"
      >
        <b>Dashboard</b>
        <LanguageDropdown
          style={{ color: "black", padding: "1px" }}
          lang={lang}
          setLang={setLang}
        />
      </AppBar>
      <FetchForm getData={getData} lang={lang} />
      {loading ? "Loading data..." : undefined}
      {error && "Error! Is the token correct?"}
      {data && <KPIs data={data} lang={lang} />}
      {data && <Table data={data} lang={lang} style={{ padding: "100px" }} />}
    </div>
  );
}
