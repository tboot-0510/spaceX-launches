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

interface Launch {
  fairings: {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: any[];
  };
  links: LaunchLinks;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  net: boolean;
  window: number | null;
  rocket: string;
  success: boolean;
  failures: any[];
  details: string | null;
  crew: any[];
  ships: any[];
  capsules: any[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: boolean | null;
    landing_type: string | null;
    landpad: string | null;
  }[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string | null;
  id: string;
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
