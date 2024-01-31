import React, { useContext } from "react";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
//import jalaliday from "jalaliday";
//import jalaliPlugin from '@zoomit/dayjs-jalali-plugin'
import {jalaliPlugin} from "../dayjs-jalali"

import calendar from "dayjs/plugin/calendar";

/**
 * Subscribes to the ConfigProvider locale changes and updates the dayjs calendar based on current locale.
 */
const useJalaliLocaleListener = () => {
  dayjs.extend(calendar);
  //dayjs.extend(jalaliday);
  dayjs.extend(jalaliPlugin);
  const { locale } = useContext(ConfigProvider.ConfigContext);
  React.useEffect(() => {
    if (locale?.locale === "fa") {
      //dayjs["calendar"]?.("jalali");
      dayjs().calendar("jalali");
      //console.log(locale);
    } else {
      //dayjs ["calendar"]?.(undefined);
      dayjs().calendar(undefined);
    }
  }, [locale]);
};

export default useJalaliLocaleListener;
