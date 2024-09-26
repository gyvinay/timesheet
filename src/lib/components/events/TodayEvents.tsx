import { differenceInMinutes, setHours } from "date-fns";
import { Fragment, useState } from "react";
import { BORDER_HEIGHT } from "../../helpers/constants";
import { isTimeZonedToday, traversCrossingEvents } from "../../helpers/generals";
import { ProcessedEvent } from "../../types";
import CurrentTimeBar from "./CurrentTimeBar";
import EventItem from "./EventItem";

interface TodayEventsProps {
  todayEvents: ProcessedEvent[];
  today: Date;
  startHour: number;
  endHour: number;
  step: number;
  minuteHeight: number;
  direction: "rtl" | "ltr";
  timeZone?: string;
  eventWidth: number;
  groupInterval?: number | 0;
  scrollToCurrentTime?: boolean;
}
const TodayEvents = ({
  todayEvents,
  today,
  startHour,
  endHour,
  step,
  minuteHeight,
  direction,
  timeZone,
  eventWidth,
  groupInterval,
  scrollToCurrentTime,
}: TodayEventsProps) => {
  const crossingIds: Array<number | string> = [];
  const [focus, setFocus] = useState(-1);
  function groupEventsByApp(events: any[]) {
    let groupedEvents: any[] = [];
    const afkEvents = todayEvents.filter((event) => event.data.status === "afk");

    events.forEach((event) => {
      const existingGroup = groupedEvents.find(
        (group) => group.data.app === event.data.app && group.data.app !== "afk"
      );

      if (existingGroup) {
        const start = existingGroup.start
          ? new Date(Math.min(existingGroup.start, event.start))
          : event.start;
        const end = existingGroup.end
          ? new Date(Math.max(existingGroup.end, event.end))
          : event.end;
        // Check if there is an "afk" event overlapping with the current event
        const overlappingAfkEvent = afkEvents.find(
          (afkEvent) =>
            new Date(afkEvent.start) <= new Date(end) && new Date(afkEvent.end) >= new Date(start)
        );

        if (!overlappingAfkEvent) {
          if (existingGroup.duration < event.duration) {
            existingGroup.id = event.id;
            existingGroup.timestamp = event.timestamp;
            existingGroup.duration = event.duration;
            existingGroup.data = event.data;
            existingGroup.event_id = event.event_id;
            existingGroup.title = event.title;
            existingGroup.start = start;
            existingGroup.end = end;
            existingGroup.projectId = event.projectId;
          }
          existingGroup.events.push({
            ...event,
            id: event.id,
            timestamp: event.timestamp,
            duration: event.duration,
            data: event.data,
            start: event.start,
            end: event.end,
            event_id: event.event_id,
            title: event.title,
          });
        } else {
          groupedEvents.push({
            ...event,
            events: [event],
            start: event.start,
            end: event.end,
          });
        }
      } else {
        groupedEvents.push({
          ...event,
          events: [event],
          start: event.start,
          end: event.end,
        });
      }
    });
    groupedEvents = groupedEvents.filter((event) => event.duration >= 30);

    return groupedEvents;
  }

  function roundToNearestMinutes(minute: number, interval: number) {
    const roundedMinutes = Math.round(minute / interval) * interval;
    return roundedMinutes;
  }
  function foramtEvents() {
    const hours = new Map();
    todayEvents.map((fe) => {
      const sh = new Date(fe.start).getHours();
      const sm = roundToNearestMinutes(new Date(fe.start).getMinutes(), step);

      if (hours.size < 1) {
        const newList: any[] = [];
        newList.push(fe);
        hours.set(sh + ":" + sm, newList);
      } else {
        if (hours.has(sh + ":" + sm)) {
          const existingList: any[] = hours.get(sh + ":" + sm);
          existingList.push(fe);
          hours.set(sh + ":" + sm, existingList);
        } else {
          const newList: any[] = [];
          newList.push(fe);
          hours.set(sh + ":" + sm, newList);
        }
      }
    });
    const eventList: any[][] = [];
    for (const [key, value] of hours) {
      const events: ProcessedEvent[] = value;
      events.sort((a, b) => a.duration - b.duration);
      eventList.push([...groupEventsByApp(events)]);
    }
    return eventList;
  }

  function formatTimeDifference(date1: Date, date2: Date) {
    const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
    const minutesDifference = diffInMilliseconds / (1000 * 60); // 1 minute = 60 seconds = 60,000 milliseconds
    return minutesDifference;
  }
  const renderEvents = (todayEvents: ProcessedEvent[]) => {
    return todayEvents.map((event, i) => {
      let diffInMinutes = formatTimeDifference(new Date(event.start), new Date(event.end));
      diffInMinutes = diffInMinutes === 0 ? 0.5 : diffInMinutes;
      const height = diffInMinutes * minuteHeight - BORDER_HEIGHT;
      const eventStartTime =
        new Date(event.start).getSeconds() === 0
          ? new Date(event.start).setSeconds(1)
          : event.start;
      const minituesFromTop = differenceInMinutes(eventStartTime, setHours(today, startHour));
      const topSpace = minituesFromTop * minuteHeight;
      /** Add border factor to height of each slot */
      const slots = height / 60;
      const heightBorderFactor = slots * BORDER_HEIGHT;

      /** Calculate top space */
      const slotsFromTop = minituesFromTop / step;
      const top = topSpace + slotsFromTop;

      // const alreadyRendered = crossingEvents.filter((e) => crossingIds.includes(e.event_id));
      crossingIds.push(event.event_id);
      let durationInMinutes = formatTimeDifference(new Date(event.start), new Date(event.end));
      durationInMinutes = durationInMinutes < 1 ? 1 : durationInMinutes;
      const hideDetails = durationInMinutes < step / 2;
      const height_ = hideDetails ? "auto" : height + heightBorderFactor;

      return (
        <div
          key={event.event_id}
          className={`rs__event__item`}
          onMouseOver={() => setFocus(Number(event.event_id))}
          onMouseOut={() => setFocus(-1)}
          style={{
            minHeight: height_,
            top,
            width: eventWidth + "vh",
            zIndex: focus === Number(event.event_id) ? 999 : 1,
            [direction === "rtl" ? "right" : "left"]: i > 0 ? `${i * (eventWidth + 2)}vh` : "",
          }}
        >
          <EventItem event={event} />
        </div>
      );
    });
  };

  const checkToday = () => {
    const newDate = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: timeZone,
      })
    );
    return today.getDate() === newDate.getDate() ? true : false;
  };

  return (
    <Fragment>
      {checkToday() && (
        <CurrentTimeBar
          scrollToCurrentTime={scrollToCurrentTime}
          today={today}
          startHour={startHour}
          step={step}
          minuteHeight={minuteHeight}
          timeZone={timeZone}
          zIndex={2 * todayEvents.length + 1}
        />
      )}

      {foramtEvents().map((events) => {
        return renderEvents(events);
      })}
    </Fragment>
  );
};

export default TodayEvents;
