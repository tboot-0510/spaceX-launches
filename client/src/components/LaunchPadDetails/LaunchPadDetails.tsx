import { Pen } from "@phosphor-icons/react";
import React from "react";
import { textWrapper } from "../../helpers/format";
import { FormattedLaunchPad } from "../../interfaces/launchpad";

interface LaunchPadDetailsProps {
  launchpad: FormattedLaunchPad;
}

const LaunchPadDetails: React.FC<LaunchPadDetailsProps> = ({ launchpad }) => {
  const {
    details,
    name,
    fullName,
    image,
    latitude,
    longitude,
    launchAttempts,
    launchSuccesses,
    region,
  } = launchpad;

  return (
    <div className="f fd-c w-100-p">
      <h1>LaunchPad Information</h1>
      <div className="f fd-r g-8">
        {image ? (
          <img src={image} height={110} width={110} alt={"SpaceX logo"} />
        ) : null}
        <div className="f fd-c g-8">
          {textWrapper("LaunchPad Name", name)}
          {textWrapper("Full Name", fullName)}
          {textWrapper("Region", region)}
        </div>
      </div>
      <div className="f fd-r mt-12 g-8">
        <Pen size={24} />
        <h2 style={{ maxWidth: "90%" }}>
          <i>
            <p>{details}</p>
          </i>
        </h2>
      </div>
      <div className="f fd-r g-8 mt-12">
        {textWrapper("Launch Attempts", launchAttempts)}
        {textWrapper("Launch Successes", launchSuccesses)}
      </div>
      <div className="f fd-r g-8 mt-12">
        {textWrapper("Latitude", latitude)}
        {textWrapper("Longitude", longitude)}
      </div>
    </div>
  );
};

export default LaunchPadDetails;
