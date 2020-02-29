import React, { useMemo } from "react";
import "react-table-v6/react-table.css";
import moment from "moment";
import LocalizedStrings from "react-localization";
import { translations } from "../assets/translations";
import { CommonProps } from "../types";
import { Dictionary } from "lodash";
import ReactTable from "react-table-v6";

interface Props extends CommonProps {
  style: Dictionary<string>;
}

export function Table(props: Props) {
  const { data, lang } = props;
  const byDate = data.by_date;
  let strings = new LocalizedStrings({ translations });

  const rows = byDate.map(datum => {
    return {
      conversation_count: datum.conversation_count,
      missed_chat_count: datum.missed_chat_count,
      visitors_with_conversation_count: datum.visitors_with_conversation_count,
      date: datum.date
    };
  });

  const columns = useMemo(
    () => [
      {
        Header: <p>{strings[lang].conversationCount}</p>,
        accessor: "conversation_count"
      },
      {
        Header: <p>{strings[lang].missedChatCount}</p>,
        accessor: "missed_chat_count"
      },
      {
        Header: <p>{strings[lang].visitorsWithConversationCount}</p>,
        accessor: "visitors_with_conversation_count"
      },
      {
        Header: <p>{strings[lang].date}</p>,
        accessor: "date",
        Cell: (props: any) => (
          <span>{moment.utc(props.value).format("DD MMM YYYY")}</span>
        )
      }
    ],
    [strings, lang]
  );

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center"
      }}
    >
      <ReactTable
        data={rows}
        lang={lang}
        columns={columns}
        defaultPageSize={5}
        nextText={strings[lang].next}
        previousText={strings[lang].previous}
        pageText={strings[lang].page}
        rowsText={strings[lang].rows}
        ofText={strings[lang].of}
        style={{
          display: "flex",
          width: "95%",
          textAlign: "center",
          border: "1px solid rgba(0,0,0)"
        }}
      />
    </div>
  );
}
