import {
  LaunchCardProps,
  LaunchInterface,
  LaunchMapProps,
} from "../../interfaces";
import { formatDate, formatSuccess } from "../../helpers/format";
import styles from "./launchCard.module.scss";
import { useNavigate } from "react-router-dom";
import {
  IdentificationBadge,
  RocketLaunch,
  Target,
} from "@phosphor-icons/react";

const launchTitles: LaunchMapProps[] = [
  {
    key: "name",
    title: <IdentificationBadge size={24} />,
    additionalStyle: { maxWidth: "250px" },
    func: (value) => (
      <div>
        <i>{value as string}</i>
      </div>
    ),
  },
  {
    key: "date_utc",
    title: <RocketLaunch size={24} />,
    additionalStyle: {},
    func: (value) => <div>{formatDate(value as string)}</div>,
  },
  {
    key: "success",
    title: <Target size={24} />,
    additionalStyle: {},
    func: (value) => (
      <div className={value ? `${styles.success}` : `${styles.error}`}>
        {formatSuccess(value as boolean)}
      </div>
    ),
  },
];

const LaunchCard = (props: LaunchCardProps) => {
  const { launch } = props;

  const navigate = useNavigate();

  return (
    <div
      key={launch.id}
      className={`${styles.launchCard} ${
        launch.upcoming ? styles.upcoming : ""
      }`}
      onClick={() =>
        navigate(`/launch/${launch.id}`, { state: { id: launch.id } })
      }
    >
      <div className={styles.launchHeader}>
        <h2>#{launch.flight_number}</h2>
        {launch.links?.patch?.small && (
          <img
            src={launch.links?.patch?.small}
            height={120}
            width={120}
            alt={"SpaceX logo"}
          />
        )}
      </div>
      {launch.upcoming && <div className={styles.error}>UPCOMING</div>}
      <div className="f fd-c w-100-p">
        {launchTitles.map((launchStruct: LaunchMapProps) => (
          <h2
            key={launchStruct.key}
            className={styles.item}
            style={{ ...launchStruct.additionalStyle }}
          >
            {launchStruct.title}
            {launchStruct.func(
              launch[launchStruct.key as keyof LaunchInterface] as
                | string
                | boolean
            )}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default LaunchCard;
