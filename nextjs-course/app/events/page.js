import Link from 'next/link';

function EventPage(){

    const eventList = [
        {id : 1, eventName: "첫번째 이벤트"},
        {id : 2, eventName: "두번째 이벤트"},

    ]
    return(
        <div>
            <h1>Event Page</h1>
            <ul>
                {eventList.map(event => <li key={event.id}>
                    <Link href={`/events/${event.id}`}>{event.eventName}</Link>
                </li>)}
            </ul>
            <ul>
                <li><Link href="/events/2023/09/20">2023년 09월 20일 이벤트들</Link></li>
            </ul>
        </div>
    )

}

export default EventPage;