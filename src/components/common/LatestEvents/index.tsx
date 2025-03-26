import { useState, useEffect } from "react";

import styles from "./LatestEvents.module.scss";
import Container from "../../utility/Container";
import Calendar from "../Calendar";

const { VITE_API_URL } = import.meta.env;

type Event = {
  id: string;
  startTime: string;
  title: string;
};

const LatestEvents = () => {
  const [loading, setLoading] = useState(false);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${VITE_API_URL}/calendar/upcoming/9`)
      .then((response) => response.json())
      .then((results) => {
        setUpcomingEvents(results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  console.log("upcomingEvents", upcomingEvents);

  return (
    <div className={styles.LatestEvents}>
      <Container>
        <h2 className={styles.heading}>Upcoming Events</h2>
        <p>
          Come visit us at our monthly meeting at 7pm on the second Tuesday of
          each month (seasonally, check calendar below for details)
        </p>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {upcomingEvents && upcomingEvents.length > 0 ? (
              <ul className={styles.list}>
                {upcomingEvents.map((event: Event) => (
                  <li className={styles.listItem} key={event.id}>
                    <div>
                      <Calendar date={event.startTime} />
                    </div>
                    <h4 className={styles.eventHeading}>
                      <a
                        href={`https://members.4-playersofcolorado.org/event/${event.id}`}
                      >
                        {event.title}
                      </a>
                    </h4>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No events scheduled</p>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default LatestEvents;
