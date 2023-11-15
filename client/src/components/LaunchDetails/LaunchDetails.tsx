import React, { useState } from "react";
import { CaretDown, CaretUp, Globe, Pen, Timer } from "@phosphor-icons/react";

import styles from "./launchDetails.module.scss";
import { textWrapper } from "../../helpers/format";
import { Failure, FormattedLaunch } from "../../interfaces";

interface LaunchDetailsProps {
  launch: FormattedLaunch;
}

const LaunchDetails: React.FC<LaunchDetailsProps> = ({ launch }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const showFailureDetails = () => {
    if (launch.status.failures.length == 0) return;
    setOpen(!isOpen);
  };

  const successLabel = launch.status.success ? "Success" : "Failure";

  const {
    flight,
    gridfins,
    landing_attempt,
    landing_success,
    landing_type,
    legs,
    reused,
  } = launch.core_details[0];

  return (
    <div className="f fd-c w-100-p" style={{ padding: 24 }}>
      <div className="f fd-r ai-c w-100-p" style={{ gap: 24 }}>
        <div className="f fd-r fb-65 ai-c ">
          <img
            src={launch.media.imageURL ?? undefined}
            height={60}
            width={60}
            alt={"SpaceX logo"}
          />
          <h2>
            <a
              className="ml-12"
              href={launch.media.wiki ?? undefined}
              target="_blank"
              rel="noreferrer"
            >
              {launch.name}
            </a>
          </h2>
        </div>
        <div className="f fd-r f-1 jc-fe g-8">
          <h2 className="f fd-r g-8">
            Status:
            <div
              className={
                launch.status.success ? `${styles.success}` : `${styles.error}`
              }
            >
              {successLabel}
            </div>
          </h2>
          {launch.media.article && (
            <div
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  launch.media.article ?? undefined,
                  "blank",
                  "noreferrer"
                )
              }
            >
              <Globe size={24} />
            </div>
          )}
        </div>
      </div>
      <div className="f fd-r w-100-p mt-24 g-8">
        <Timer size={24} />
        {textWrapper("Date", launch.dateUTC)}
      </div>
      <div className="f fd-c w-100-p mt-12 g-8">
        <div className="f fd-r w-100-p g-8" onClick={showFailureDetails}>
          <Pen size={24} />
          <h2 style={{ maxWidth: "90%" }}>
            <i>
              <p>{launch.status.details}</p>
            </i>
          </h2>
          {launch.status.failures.length > 0 && (
            <div>
              {isOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
            </div>
          )}
        </div>

        {isOpen && launch.status.failures.length > 0 && (
          <>
            {launch.status.failures?.map((failure: Failure, index: number) => (
              <div
                key={index}
              >{`Time: ${failure.time}, Altitude: ${failure.altitude}, Reason: ${failure.reason}`}</div>
            ))}
          </>
        )}
      </div>
      <div className="f fd-c w-100-p mt-24 g-8">
        {textWrapper("Amount of flights", flight)}
        {textWrapper("Gridfins", gridfins)}
        {textWrapper("Attempt to land", landing_attempt)}
        {textWrapper("Successfully landed", landing_success)}
        {textWrapper("Landing type", landing_type)}
        {textWrapper("Amount of Legs", legs)}
        {textWrapper("Reused", reused)}
      </div>
    </div>
  );
};

export default LaunchDetails;
