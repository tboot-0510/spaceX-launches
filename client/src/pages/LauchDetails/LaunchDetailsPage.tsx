import { Suspense } from "react";
import { formatLaunchData } from "../../helpers/format";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_LAUNCH } from "../../graphql/queries/launchQueries";
import Loading from "../../components/Loading/Loading";
import { ArrowLeft } from "@phosphor-icons/react";

import styles from "./launchDetailsPage.module.scss";
import ReactPlayer from "react-player";
import LaunchDetails from "../../components/LaunchDetails/LaunchDetails";
import RocketDetails from "../../components/RocketDetails/RocketDetails";
import LaunchPadDetails from "../../components/LaunchPadDetails/LaunchPadDetails";

const LaunchDetailsPage = () => {
  const { state } = useLocation();

  const { loading, error, data } = useQuery(GET_LAUNCH, {
    variables: { id: state.id },
  });

  if (loading) return <Loading />;

  if (!data || error) return <div>Error</div>;

  const launch = formatLaunchData(data.getLaunch.docs[0]);

  return (
    <>
      <div className={styles.header}>
        <Link className={styles.backButton} to="/">
          <ArrowLeft size={24} />
          Go back to launches
        </Link>
      </div>

      <div className="f fd-c" style={{ padding: "12px 24px" }}>
        <Suspense fallback={<div>Loading launch...</div>}>
          <div className="f fd-r w-100-p mt-12">
            <div className="f fd-c ai-c w-100-p">
              {launch.media.videoURL && (
                <ReactPlayer
                  url={launch.media.videoURL}
                  height={400}
                  width={500}
                  playing={true}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                />
              )}
              {!launch.media.videoURL && <div>Video unavailable</div>}
            </div>
            <LaunchDetails launch={launch} />
          </div>
          <div className="f fd-r w-100-p mt-12">
            <RocketDetails rocket={launch.additional_details.rocket} />
            <LaunchPadDetails launchpad={launch.additional_details.launchpad} />
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default LaunchDetailsPage;
