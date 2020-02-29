import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "../hooks/styles";
import LocalizedStrings from "react-localization";
import { translations, Language } from "../assets/translations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { GetData } from "../hooks/api";

interface Props {
  getData: GetData;
  lang: Language;
}

export function FetchForm(props: Props) {
  const [startDate, setStartDate] = useState("2017-06-01");
  const [endDate, setEndDate] = useState("2017-07-01");
  const [token, setToken] = useState("");

  let strings = new LocalizedStrings({ translations });
  const { getData, lang } = props;

  const styles = useStyles();
  return (
    <form
      className={styles.form}
      noValidate
      autoComplete="off"
      onSubmit={event => {
        event.preventDefault();
        getData(startDate, endDate, token);
      }}
    >
      <div className={styles.formLeft}>
        <TextField
          InputLabelProps={{ shrink: true }}
          type="date"
          label={strings[lang].startDate}
          variant="outlined"
          value={startDate}
          onChange={event => setStartDate(event.target.value)}
        />
        &nbsp;
        <TextField
          InputLabelProps={{ shrink: true }}
          type="date"
          label={strings[lang].endDate}
          variant="outlined"
          value={endDate}
          onChange={event => setEndDate(event.target.value)}
        />
      </div>
      <div className={styles.formRight}>
        <TextField
          type="text"
          label={strings[lang].token}
          variant="outlined"
          value={token}
          onChange={event => setToken(event.target.value)}
        />
        &nbsp;
        <Button type="submit" disabled={!startDate || !endDate || !token}>
          <FontAwesomeIcon icon={faKey} style={{ marginRight: "8px" }} />
          <b>{strings[lang].getData}</b>
        </Button>
      </div>
    </form>
  );
}
