import { useEffect, useCallback, Fragment } from "react";
import { Typography } from "@mui/material";
import {
  format,
  eachMinuteOfInterval,
  isToday,
  isBefore,
  isAfter,
  startOfDay,
  endOfDay,
  addDays,
  addMinutes,
  set,
} from "date-fns";
import TodayTypo from "../components/common/TodayTypo";
import EventItem from "../components/events/EventItem";
import { CellRenderedProps, DayHours, DefaultResource, ProcessedEvent } from "../types";
import {
  calcCellHeight,
  calcMinuteHeight,
  filterMultiDaySlot,
  filterTodayEvents,
  getHourFormat,
  getResourcedEvents,
} from "../helpers/generals";
import { WithResources } from "../components/common/WithResources";
import Cell from "../components/common/Cell";
import TodayEvents from "../components/events/TodayEvents";
import { TableGrid } from "../styles/styles";
import { MULTI_DAY_EVENT_HEIGHT } from "../helpers/constants";
import useStore from "../hooks/useStore";
import { DayAgenda } from "./DayAgenda";

export interface DayProps {
  startHour: DayHours;
  endHour: DayHours;
  step: number;
  cellRenderer?(props: CellRenderedProps): JSX.Element;
  headRenderer?(day: Date): JSX.Element;
  hourRenderer?(hour: string): JSX.Element;
  navigation?: boolean;
  startMinute: number;
  groupInterval?: number | 0;
  scrollToCurrentTime?: boolean;
}

const Day = () => {
  const {
    day,
    selectedDate,
    events,
    height,
    getRemoteEvents,
    triggerLoading,
    handleState,
    resources,
    resourceFields,
    resourceViewMode,
    fields,
    direction,
    locale,
    hourFormat,
    timeZone,
    stickyNavigation,
    agenda,
    eventWidth,
  } = useStore();

  const {
    startHour,
    endHour,
    step,
    cellRenderer,
    headRenderer,
    hourRenderer,
    startMinute,
    groupInterval,
    scrollToCurrentTime,
  } = day!;
  const START_TIME = set(selectedDate, {
    hours: startHour,
    minutes: startMinute < 1 || startMinute > 59 ? 0 : startMinute,
    seconds: 0,
  });
  const END_TIME = set(selectedDate, {
    hours: endHour !== 24 ? Number(new Date().getHours()) : endHour,
    minutes: endHour !== 24 ? Number(new Date().getMinutes() + step) : -step,
    seconds: 0,
  });
  const hours = eachMinuteOfInterval(
    {
      start: START_TIME,
      end: END_TIME,
    },
    { step: step }
  );
  const CELL_HEIGHT = calcCellHeight(height, hours.length);
  const MINUTE_HEIGHT = calcMinuteHeight(CELL_HEIGHT, step);
  const hFormat = getHourFormat(hourFormat);

  const fetchEvents = useCallback(async () => {
    try {
      triggerLoading(true);
      const start = addDays(START_TIME, -1);
      const end = addDays(END_TIME, 1);
      const events = await getRemoteEvents!({
        start,
        end,
        view: "day",
      });
      if (events && events?.length) {
        handleState(events, "events");
      }
    } catch (error) {
      throw error;
    } finally {
      triggerLoading(false);
    }
    // eslint-disable-next-line
  }, [selectedDate, getRemoteEvents]);

  useEffect(() => {
    if (getRemoteEvents instanceof Function) {
      fetchEvents();
    }
  }, [fetchEvents, getRemoteEvents]);

  const renderMultiDayEvents = (events: ProcessedEvent[]) => {
    const todayMulti = filterMultiDaySlot(events, selectedDate, timeZone);
    return (
      <div className="rs__block_col" style={{ height: MULTI_DAY_EVENT_HEIGHT * todayMulti.length }}>
        {todayMulti.map((event, i) => {
          const hasPrev = isBefore(event.start, startOfDay(selectedDate));
          const hasNext = isAfter(event.end, endOfDay(selectedDate));
          return (
            <div
              key={event.event_id}
              className="rs__multi_day"
              style={{
                top: i * MULTI_DAY_EVENT_HEIGHT,
                width: "99.9%",
                overflowX: "hidden",
              }}
            >
              <EventItem event={event} multiday hasPrev={hasPrev} hasNext={hasNext} />
            </div>
          );
        })}
      </div>
    );
  };

  const renderTable = (resource?: DefaultResource) => {
    let resourcedEvents = events;
    if (resource) {
      resourcedEvents = getResourcedEvents(events, resource, resourceFields, fields);
    }

    if (agenda) {
      return <DayAgenda events={resourcedEvents} />;
    }

    // Equalizing multi-day section height
    const shouldEqualize = resources.length && resourceViewMode === "default";
    const allWeekMulti = filterMultiDaySlot(
      shouldEqualize ? events : resourcedEvents,
      selectedDate,
      timeZone
    );
    const headerHeight = MULTI_DAY_EVENT_HEIGHT * allWeekMulti.length + 45;
    return (
      <>
        <TableGrid days={1}>
          {/* Body */}
          {hours.map((h, i) => {
            const start = new Date(`${format(selectedDate, "yyyy/MM/dd")} ${format(h, hFormat)}`);
            const end = addMinutes(start, step);
            const field = resourceFields.idField;
            return (
              <Fragment key={i}>
                {/* Time Cells */}
                <span className="rs__cell rs__header rs__time" style={{ height: CELL_HEIGHT }}>
                  <Typography variant="caption" id={format(h, hFormat, { locale })}>
                    {format(h, hFormat, { locale })}
                  </Typography>
                </span>
                <span
                  className={`rs__cell ${isToday(selectedDate) ? "rs__today_cell" : ""}`}
                  id={"rs__today_cell@" + format(h, hFormat, { locale })}
                >
                  {/* Events of this day - run once on the top hour column */}
                  {i === 0 && (
                    <TodayEvents
                      todayEvents={filterTodayEvents(resourcedEvents, selectedDate, timeZone)}
                      today={START_TIME}
                      minuteHeight={MINUTE_HEIGHT}
                      startHour={startHour}
                      endHour={endHour}
                      step={step}
                      direction={direction}
                      timeZone={timeZone}
                      eventWidth={eventWidth}
                      groupInterval={groupInterval}
                      scrollToCurrentTime={scrollToCurrentTime}
                    />
                  )}
                  {/* Cell */}
                  <Cell
                    start={start}
                    end={end}
                    day={selectedDate}
                    height={CELL_HEIGHT}
                    resourceKey={field}
                    resourceVal={resource ? resource[field] : null}
                    cellRenderer={cellRenderer}
                  />
                </span>
              </Fragment>
            );
          })}
        </TableGrid>
      </>
    );
  };

  return resources.length ? <WithResources renderChildren={renderTable} /> : renderTable();
};

export { Day };
