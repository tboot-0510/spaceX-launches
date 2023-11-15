/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormattedLaunchPad, LaunchPad } from "./launchpad";
import { FormattedRocket, Rocket } from "./rocket";

type LaunchLinks = {
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    campaign: null | string;
    launch: null | string;
    media: null | string;
    recovery: null | string;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit: null | string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
};

export type Failure = {
  reason: string | null;
  time: number | null;
  altitude: number | null;
};

type Crew = {
  crew: string;
  role: string;
};

export interface Launch {
  fairings: {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: string[];
  };
  links: LaunchLinks;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  net: boolean;
  window: number | null;
  rocket: Rocket;
  success: boolean;
  failures: Failure[];
  details: string | null;
  crew: Crew[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: LaunchPad;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Cores[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string | null;
  id: string;
}

type Cores = {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
};

export interface FormattedLaunch {
  name: string;
  dateUTC: string;
  status: {
    success: boolean;
    details: string | null;
    failures: Failure[];
  };
  media: {
    imageURL: string | null;
    videoURL: string | null;
    article: string | null;
    wiki: string | null;
  };
  core_details: Cores[];
  additional_details: {
    launchpad: FormattedLaunchPad;
    ships: any[];
    crew: any[];
    capsules: any[];
    payloads: any[];
    fairings: {
      reused: boolean | null;
      recovery_attempt: boolean | null;
      recovered: boolean | null;
      ships: string[];
    };
    rocket: FormattedRocket;
  };
}

export type LaunchInterface = {
  id: string;
  flight_number: number;
  name: string;
  date_utc: string;
  success: boolean;
  links: LaunchLinks;
  upcoming: boolean;
};

export interface LaunchCardProps {
  key: string;
  launch: LaunchInterface;
}

export interface LaunchMapProps {
  key: string;
  title: React.ReactNode;
  additionalStyle: React.CSSProperties;
  func: (value: string | boolean) => React.ReactNode;
}
