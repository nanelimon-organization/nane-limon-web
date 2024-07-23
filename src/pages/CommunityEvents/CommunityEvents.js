import {
  InfoLayoutRight,
  InfoLayoutLeft,
} from "./components/InfoLayout/InfoLayout";
import { events } from "../../constants/events";
import { useTranslation } from "react-i18next";

function CommunityEvents() {
  return (
    <>
      {events.map((event, index) => {
        if (index % 2 === 0) {
          return <InfoLayoutLeft title={event.title} src={event.src} />;
        } else {
          return <InfoLayoutRight title={event.title} src={event.src} />;
        }
      })}
    </>
  );
}

export default CommunityEvents;
