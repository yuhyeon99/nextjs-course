"use client";

import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "../../../components/events/results-title";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/ui/error-alert";

function EventDateList({ params }) {
  const date = params.slug;

  if (!date) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = date;

  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>잘못된 값입니다. 값을 조정해주세요.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>선택된 날짜에 존재하는 이벤트가 없습니다!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const selectedDate = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={selectedDate} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default EventDateList;
