import { gql } from "apollo-server-express";

export const RocketType = gql`
  type MesureType {
    meters: String
    feet: String
  }

  type Rocket {
    height: MesureType
    diameter: MesureType
    mass: WeightType
    firstStage: StageType
    secondStage: StageType
    engines: EngineType
    landingLegs: LandingLegsType
    payloadWeights: [PayloadWeightType]
    flickrImages: [String]
    name: String
    type: String
    active: Boolean
    stages: Int
    boosters: Int
    costPerLaunch: Int
    successRatePct: Float
    firstFlight: String
    country: String
    company: String
    wikipedia: String
    description: String
    id: String
  }

  type StageType {
    thrustSeaLevel: ThrustType
    thrustVacuum: ThrustType
    reusable: Boolean
    engines: Int
    fuelAmountTons: Float
    burnTimeSec: Int
    payloads: CompositeFairingType
  }

  type EngineType {
    isp: IspType
    thrustSeaLevel: ThrustType
    thrustVacuum: ThrustType
    number: Int
    type: String
    version: String
    layout: String
    engineLossMax: Int
    propellant1: String
    propellant2: String
    thrustToWeight: Int
  }

  type IspType {
    seaLevel: Int
    vacuum: Int
  }

  type ThrustType {
    kN: Int
    lbf: Int
  }

  type LandingLegsType {
    number: Int
    material: String
  }

  type PayloadWeightType {
    id: String
    name: String
    kg: Float
    lb: Float
  }

  type WeightType {
    kg: Float
    lb: Float
  }

  type CompositeFairingType {
    height: MesureType
    diameter: MesureType
  }
`;
