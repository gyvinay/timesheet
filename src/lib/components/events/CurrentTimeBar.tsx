import { useEffect, useRef, useState } from "react";
import { differenceInMinutes, setHours } from "date-fns";
import { BORDER_HEIGHT } from "../../helpers/constants";
import { getTimeZonedDate } from "../../helpers/generals";
import { TimeIndicatorBar } from "../../styles/styles";

interface CurrentTimeBarProps {
  today: Date;
  startHour: number;
  step: number;
  minuteHeight: number;
  timeZone?: string;
  color?: string;
  zIndex?: number;
  scrollToCurrentTime?: boolean;
}

function calculateTop({
  today,
  startHour,
  step,
  minuteHeight,
  timeZone,
}: CurrentTimeBarProps): number {
  const now = getTimeZonedDate(new Date(), timeZone);

  const minutesFromTop = differenceInMinutes(now, setHours(today, startHour));
  const topSpace = minutesFromTop * minuteHeight;
  const slotsFromTop = minutesFromTop / step;
  const borderFactor = slotsFromTop + BORDER_HEIGHT;
  const top = topSpace + borderFactor;

  return top;
}

const CurrentTimeBar = (props: CurrentTimeBarProps) => {
  const [top, setTop] = useState(calculateTop(props));
  const bucketRef = useRef(props);
  useEffect(() => {
    const eventInterval_ = setInterval(function () {
      setTop(calculateTop(bucketRef.current));
    }, 60 * 1000);
    return () => clearInterval(eventInterval_);
  }, []);

  useEffect(() => {
    bucketRef.current = props;
    setTop(calculateTop(props));
  }, [props.step]);

  useEffect(() => {
    setTimeout(() => {
      if (props.scrollToCurrentTime) {
        const viewportHeight = window.innerHeight;
        const divFour = document.getElementById("currentTimeBar");
        // get position in the document of the div's top
        const elTop = divFour?.offsetTop;
        if (elTop)
          // scroll window to locate top of div at middle of window
          // window.scrollTo(0, elTop - viewportHeight / 2);
          window.scrollTo({
            top: elTop - viewportHeight / 2,
            left: 0,
            behavior: "smooth",
          });
      }
    }, 10);
  }, [props.scrollToCurrentTime]);

  // Prevent showing bar on top of days/header
  if (top < 0) return null;

  return (
    <div>
      {top > 0 && (
        <TimeIndicatorBar id="currentTimeBar" style={{ top, zIndex: props.zIndex }}>
          {/* <div /> */}
          <div />
        </TimeIndicatorBar>
      )}
    </div>
  );
};

export default CurrentTimeBar;
