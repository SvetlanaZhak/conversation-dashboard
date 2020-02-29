import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "../hooks/styles";
import { Dictionary } from "lodash";
import { Language } from "../assets/translations";

interface Props {
  style: Dictionary<string>;
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageDropdown = (props: Props) => {
  const { lang: currentLang, setLang } = props;

  const languages: Language[] = ["fi", "en"];

  const styles = useStyles();
  return (
    <div className={styles.languages}>
      <FontAwesomeIcon icon={faGlobe} className={styles.languageIcon} />
      {languages.map((language, idx) => (
        <div className={styles.languages} key={language}>
          {idx === 0 ? "" : "/"}
          <div
            key={idx}
            className={
              currentLang === language
                ? styles.currentLanguage
                : styles.language
            }
            onClick={_e => setLang(language)}
          >
            {language}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageDropdown;
