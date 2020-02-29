import { makeStyles, Theme } from "@material-ui/core/styles";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";

interface StyleProps {
  root: BaseCSSProperties;
}

export const useStyles = () => useStylesInternal({} as StyleProps);

const useStylesInternal = makeStyles<Theme, StyleProps>(theme => {
  const language = {
    color: "white",
    marginLeft: "6px",
    marginRight: "6px",
    cursor: "pointer"
  };
  const formLeft = {
    display: "flex",
    flexDirection: "row",
    flexGrow: 100,
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  };
  return {
    KPIs: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      margin: theme.spacing(1)
    },
    languages: {
      color: "white",
      display: "flex",
      flexDirection: "row"
    },
    language,
    currentLanguage: {
      ...language,
      textDecoration: "underline"
    },
    form: {
      margin: theme.spacing(1),
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      "& > *": {
        margin: theme.spacing(1),
        width: 200
      }
    },
    formLeft,
    formRight: {
      ...formLeft,
      justifyContent: "flex-end"
    }
  } as any;
});
