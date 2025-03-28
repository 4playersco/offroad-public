import { formatInTimeZone } from "date-fns-tz";
import type { FC } from "react";

import styles from "./Calendar.module.scss";

type CalendarProps = {
  date: string;
};

const Calendar: FC<CalendarProps> = ({ date }) => (
  <div
    className={styles.Calendar}
    title={formatInTimeZone(new Date(date), "America/Denver", "MM/dd/yyyy")}
  >
    <div className={styles.month}>
      {date && formatInTimeZone(new Date(date), "America/Denver", "MMM")}
    </div>
    <div className={styles.date}>
      {date && formatInTimeZone(new Date(date), "America/Denver", "d")}
    </div>
  </div>
);

export default Calendar;
