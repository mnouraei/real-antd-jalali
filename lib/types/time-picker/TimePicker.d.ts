import { Dayjs } from "dayjs";
import * as React from "react";
import { PickerTimeProps } from "antd/es/time-picker";
export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, "picker"> {
}
declare const TimePicker: React.ForwardRefExoticComponent<Omit<TimePickerProps, "ref"> & React.RefAttributes<any>>;
export default TimePicker;
//# sourceMappingURL=TimePicker.d.ts.map