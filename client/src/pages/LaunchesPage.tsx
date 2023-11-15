import { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../graphql/queries/launchQueries";
import Loading from "../components/Loading/Loading";
import { LaunchInterface } from "../interfaces";
import LaunchCard from "../components/LaunchCard/LaunchCard";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const LaunchesPage = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState<number>(1);

  // const apolloClient = useApolloClient();

  const { loading, error, data, fetchMore } = useQuery(GET_LAUNCHES, {
    variables: { page: page },
  });

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollLeft = timelineRef.current.scrollWidth;
    }
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  if (!data || error) return <div>Error</div>;

  const handleScrollLeft = () => {
    if (timelineRef.current) {
      fetchMore({
        variables: { page: page + 1 },
      });

      setPage(page + 1);
      timelineRef.current.scrollLeft -= timelineRef.current.offsetWidth;
    }
  };

  const handleScrollRight = () => {
    if (page === 1) return;

    if (timelineRef.current) {
      setPage(page - 1);
      timelineRef.current.scrollLeft += timelineRef.current.offsetWidth;
    }
  };

  // console.log("cache", apolloClient.cache.extract());

  return (
    <main className="container">
      <div
        ref={timelineRef}
        className="timelineContainer"
        style={{ flexDirection: "row-reverse", alignItems: "center" }}
      >
        {data?.getLaunches?.docs?.map((launch: LaunchInterface) => (
          <LaunchCard key={launch.name} launch={launch} />
        ))}
      </div>
      <div className="pagination">
        <button className="paginationButton" onClick={handleScrollLeft}>
          <ArrowLeft size={32} />
        </button>
        <button
          disabled={page === 1}
          className="paginationButton"
          onClick={handleScrollRight}
        >
          <ArrowRight size={32} />
        </button>
      </div>
    </main>
  );
};

export default LaunchesPage;
