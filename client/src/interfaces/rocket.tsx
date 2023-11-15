export type Rocket = {
  height: {
    meters: string;
    feet: string;
  };
  diameter: {
    meters: string;
    feet: string;
  };
  mass: {
    kg: string;
    lbs: string;
  };
  flickrImages: [string];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  costPerLaunch: number;
  successRatePct: number;
  firstFlight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
};

export interface FormattedRocket {
  name: string;
  company: string;
  country: string;
  description: string;
  additional_info: {
    height: number | string;
    diameter: number | string;
    mass: number | string;
    active: string | boolean;
  };
}
