import React from "react";
import "./App.css";
import dayjs from "dayjs";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/es/date-picker/locale/en_US";
import { Col, ConfigProvider, DatePicker, Radio, Row, Space } from "antd";
import {
    DatePicker as DatePickerJalali,
    Calendar,
    JalaliLocaleListener,
    jalaliPlugin,
} from "./index";
import { DirectionType } from "antd/es/config-provider";

dayjs.extend(jalaliPlugin);

function App() {
    const [direction, setDirection] = React.useState<DirectionType>("rtl");
    const [locale, setLocale] = React.useState(fa_IR);
    const [isFa, setIsFa] = React.useState(true);

    const changeDirection = (e: any) => {
        const directionValue = e.target.value;
        setDirection(directionValue);
        console.log("changeDirection: locale:  ", locale);
    };
    const changeLocale = (e: any) => {
        const localeValue = e.target.value;
        setLocale(localeValue);
        if(e.target.value===en_US)
          setIsFa(false)
        else
          setIsFa(true)
    };

    const resourceEn={
      head:" Ant-Design Jalali Date picker",
      dir:"Change direction of components",
      loc:"Change locale of components",
      gregorian:"Gregorian",
      jalali:"Jalali",
      JalaliRangePicker:"Jalali RangePicker"
    }

    const resourceFa={
      head:"انتخابگر تاریخ Ant-Design (تقویم شمسی)",
      dir:"تغییر جهت اجزاء",
      loc:"تغییر زبان اجزاء",
      gregorian:"میلادی",
      jalali:"شمسی (جلالی)",
      JalaliRangePicker:"انتخاب محدود زمانی شمسی"
    }

    return (
        <div className="App" style={{ direction: direction }}>
            <header className="App-header">
                <Row justify="center">
                    <Col span={18}>
                        <Space direction="vertical" size={12}>
                            <h2>
                                {" "}
                                {isFa ? resourceFa.head : resourceEn.head}{" "}
                            </h2>

                            <Space direction="horizontal" size={12}>
                                <div style={{ marginBottom: 16 }}>
                                    <span style={{ marginRight: 16 }}>
                                        {isFa ? resourceFa.dir : resourceEn.dir}{" "}
                                    </span>
                                    <Radio.Group
                                        defaultValue={direction}
                                        onChange={changeDirection}
                                    >
                                        <Radio.Button key="ltr" value="ltr">
                                            LTR
                                        </Radio.Button>
                                        <Radio.Button key="rtl" value="rtl">
                                            RTL
                                        </Radio.Button>
                                    </Radio.Group>
                                </div>
                                <div style={{ marginBottom: 16 }}>
                                    <span style={{ marginRight: 16 }}>
                                        {isFa ? resourceFa.loc : resourceEn.loc}{" "}
                                    </span>
                                    <Radio.Group
                                        defaultValue={locale}
                                        onChange={changeLocale}
                                    >
                                        <Radio.Button key="en" value={en_US}>
                                            EN
                                        </Radio.Button>
                                        <Radio.Button key="fa" value={fa_IR}>
                                            FA_IR
                                        </Radio.Button>
                                    </Radio.Group>
                                </div>
                            </Space>
                            <ConfigProvider
                                locale={locale}
                                direction={direction}
                                theme={{ token: { fontFamily: "Tahoma" } }}
                            >
                                <JalaliLocaleListener />
                                <Space
                                    direction="vertical"
                                    size={12}
                                    style={{
                                        textAlign:
                                            direction === "rtl"
                                                ? "right"
                                                : "left",
                                    }}
                                >
                                  <></>
                                    {isFa
                                        ? resourceFa.gregorian
                                        : resourceEn.gregorian}{" "}
                                    <DatePicker />
                                    {isFa
                                        ? resourceFa.jalali
                                        : resourceEn.jalali}{" "}
                                    <DatePickerJalali direction="rtl" />
                                    {isFa
                                        ? resourceFa.JalaliRangePicker
                                        : resourceEn.JalaliRangePicker}{" "}
                                    <DatePickerJalali.RangePicker />
                                    <Calendar style={{padding:"20px", borderRadius:"10px", marginBottom:"20px"}} />
                                </Space>
                            </ConfigProvider>
                        </Space>
                    </Col>
                </Row>
            </header>
        </div>
    );
}

export default App;
