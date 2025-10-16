import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

function Time ({ timezoneStr }) {
  const time = dayjs().tz(timezoneStr).format('HH:mm:ss');
  return (
    <div className="time">
      {time}
    </div>
  );
}