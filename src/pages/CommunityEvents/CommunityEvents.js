
import {
  InfoLayoutRight,
  InfoLayoutLeft,
} from "./components/InfoLayout/InfoLayout";
import { events } from "../../constants/events";

function CommunityEvents() {
  
  return (
    <>
      {events.map((event, index) => {
        if (index % 2 === 0) {
          return (
            <InfoLayoutLeft
              title={event.title}
              description={event.description}
              src={event.src}
            />
          );
        } else {
          return (
            <InfoLayoutRight
              title={event.title}
              description={event.description}
              src={event.src}
            />
          );
        }
      })}
    </>
  );
}

export default CommunityEvents;
