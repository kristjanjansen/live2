import { ref, computed } from "vue";
import ky from "ky";
import { compareDesc, differenceInMinutes } from "date-fns";
import { useNow } from "@vueuse/core";
import { formatMarkdown, config } from "../lib";

const strapi = ky.extend({
  prefixUrl: config.strapiUrl,
});

const { now } = useNow(1000 * 60); // Update in each minue

const dateUrgency = (startAtDate, endAtDate) =>
  computed(() => {
    const soonMinutes = 3 * 60; // In 3 hours
    const started = differenceInMinutes(startAtDate, now.value);
    const ended = differenceInMinutes(endAtDate, now.value);
    if (started < 0 && ended >= 0) {
      return "now";
    } else if (started >= 0 && started <= soonMinutes) {
      return "soon";
    } else if (started >= 0 && started > soonMinutes) {
      return "future";
    } else {
      return "past";
    }
  });

const processEvents = (event) => {
  if (event.description) {
    event.description = formatMarkdown(event.description_estonian);
  }
  event.urgency = dateUrgency(new Date(event.start_at), new Date(event.end_at));
  return event;
};

const sortEvents = (a, b) =>
  compareDesc(new Date(b.start_at), new Date(a.start_at));

export const filterUpcomingEvents = (event) => event.urgency !== "past";

export const filterPastEvents = (event) => event.urgency === "past";

export const strapiEvents = ref([]);
export const strapiFestivals = ref([]);
export const strapiPages = ref([]);

export const getStrapi = () => {
  strapi
    .get("events")
    .json()
    .then(
      (results) =>
        (strapiEvents.value = results.map(processEvents).sort(sortEvents))
    );

  strapi
    .get("festivals")
    .json()
    .then((results) => (strapiFestivals.value = results));

  strapi
    .get("pages")
    .json()
    .then((results) => (strapiPages.value = results));
};