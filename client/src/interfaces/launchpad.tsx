export type LaunchPad = {
  name: string;
  full_name: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  launch_attempts: number;
  launch_successes: number;
  images: { large: string[] };
  rockets: [string];
  timezone: string;
  launches: [string];
  status: string;
  details: string;
  id: string;
};

export interface FormattedLaunchPad {
  name: string;
  fullName: string;
  region: string;
  locality: string;
  details: string;
  image: string;
  latitude: string | number;
  longitude: string | number;
  launchAttempts: string | number;
  launchSuccesses: string | number;
}
