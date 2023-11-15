import { FormattedLaunch, Launch } from "../interfaces";
import { FormattedLaunchPad, LaunchPad } from "../interfaces/launchpad";
import { FormattedRocket, Rocket } from "../interfaces/rocket";

const formatDate = (utcDateString: string): string => {
  const utcDate = new Date(utcDateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };

  return new Intl.DateTimeFormat("en-US", options).format(utcDate);
};

const formatSuccess = (success: boolean) => {
  if (success) return "Success";
  return "Failed";
};

const formatLaunchpad = (launchpad: LaunchPad): FormattedLaunchPad => {
  return {
    name: launchpad.name,
    fullName: launchpad.full_name,
    region: launchpad.region,
    locality: launchpad.locality,
    details: launchpad.details,
    image: launchpad.images.large?.[0],
    latitude: launchpad.latitude,
    longitude: launchpad.longitude,
    launchAttempts: launchpad.launch_attempts,
    launchSuccesses: launchpad.launch_successes,
  };
};

const formatRocket = (rocket: Rocket): FormattedRocket => {
  return {
    name: rocket.name,
    company: rocket.company,
    country: rocket.country,
    description: rocket.description,
    additional_info: {
      height: rocket.height.meters,
      diameter: rocket.diameter.meters,
      mass: rocket.mass.kg,
      active: rocket.active,
    },
  };
};

const formatLaunchData = (launch: Launch): FormattedLaunch => {
  return {
    name: launch.name,
    dateUTC: formatDate(launch.date_utc),
    status: {
      success: launch.success,
      details: launch.details,
      failures: launch.failures,
    },
    media: {
      imageURL: launch.links.patch.small || launch.links.patch.large,
      videoURL: launch.links.webcast,
      article: launch.links.article,
      wiki: launch.links.wikipedia,
    },
    core_details: launch.cores,
    additional_details: {
      launchpad: formatLaunchpad(launch.launchpad),
      ships: launch.ships,
      crew: launch.crew,
      capsules: launch.capsules,
      payloads: launch.payloads,
      fairings: launch.fairings,
      rocket: formatRocket(launch.rocket),
    },
  };
};

const textWrapper = (title: string, msg: string | boolean | number) => {
  if (typeof msg === "boolean") {
    const msgToString = msg ? "True" : "False";
    return (
      <h2>
        {title}: <p>{msgToString}</p>
      </h2>
    );
  }
  return (
    <h2>
      {title}: <p>{msg}</p>
    </h2>
  );
};

export { formatDate, formatSuccess, formatLaunchData, textWrapper };
