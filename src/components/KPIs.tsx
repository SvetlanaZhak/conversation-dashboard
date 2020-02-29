import React from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "../hooks/styles";
import LocalizedStrings from "react-localization";
import { translations } from "../assets/translations";
import { CommonProps } from "../types";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const KPIStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export function KPIs(props: CommonProps) {
  const styles = useStyles();
  const { data, lang } = props;
  let strings = new LocalizedStrings({ translations });
  return (
    <div className={styles.KPIs}>
      <Box border={1} p={10} m={5}>
        <div style={KPIStyle}>
          <h1>{data.total_conversation_count}</h1>{" "}
          <p>{strings[lang].totalConversationCount}</p>
        </div>
      </Box>
      <Box border={1} p={10} m={5}>
        <div style={KPIStyle}>
          <h1>{data.total_user_message_count}</h1>{" "}
          <p>{strings[lang].totalUserMessageCount}</p>
        </div>
      </Box>
      <Box border={1} p={10} m={5}>
        <div style={KPIStyle}>
          <h1>{data.total_visitor_message_count}</h1>{" "}
          <p>{strings[lang].totalVisitorMessageCount}</p>
        </div>
      </Box>
    </div>
  );
}
