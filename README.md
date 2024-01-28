
# Ant-Design Jalali DatePicker
A wrapper for ant-design date picker and calendar to support Jalali calendar type with [Day.js](https://github.com/iamkun/dayjs) 
تقویم شمسی انت دیزاین
This package is developed for the following versions
"antd": "^5.13.2"
"react": "^18.2.0"
[Original version](https://github.com/saeedrahimi/antd-jalali)

## Demo
[https://mnouraei.github.io/real-antd-jalali/](https://mnouraei.github.io/real-antd-jalali/)



## Installation
```
npm i @realmodule/antd-jalali
```

## Usage

```ts
import React from "react";
import ReactDOM from "react-dom";
import {DatePicker,JalaliLocaleListener,jalaliPlugin} from "@realmodule/antd-jalali";
import {  ConfigProvider } from "antd";
import dayjs from "dayjs";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";

dayjs.extend(jalaliPlugin);
dayjs.calendar('jalali');
ReactDOM.render(
    <div className="App">
        Gregorian: <DatePicker />
        <br />
        <br />
        <ConfigProvider locale={fa_IR}  direction="rtl">
          <JalaliLocaleListener/>
           Jalali: <DatePickerJalali />
           Jalali RangePicker: <DatePickerJalali.RangePicker />
           <br />
           <br />
           <Calendar />
        </ConfigProvider>
    </div>,
  document.getElementById("root")
);
```
### How to set value  

```jsx
import dayjs from 'dayjs'
import { DatePicker as DatePickerJalali, Calendar as CalendarJalali, useJalaliLocaleListener } from "@realmodule/antd-jalali";

// You should call this hook in child component of <ConfigProvider>
// You can also use component helper for this hook <JalaliLocaleListener> 
useJalaliLocaleListener();

// If you want to all new instanses of dayjs use jalali calendar (no matter what is the locale), 
// you can set default calendar for dayjs and remove useJalaliLocaleListener hook.
dayjs.calendar('jalali');

const date = dayjs("1399-01-01", {jalali:true});

<DatePickerJalali defaultValue={date}/>
<CalendarJalali  value={date}/>
```
also you can create a jalali date without changing default calendar

```js
const date = dayjs()
const jalaliDate = date.calendar('jalali')
```
