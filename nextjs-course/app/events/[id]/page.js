"use client";

import { Fragment } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getEventById } from "../../../dummy-data";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";
import ErrorAlert from "../../../components/ui/error-alert";
import Button from "@/components/ui/button";

function EventDetailPage({ params }) {
  const event = getEventById(params.id);

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>이벤트가 없습니다!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
