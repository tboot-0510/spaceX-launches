import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../graphql/queries/launchQueries";
import Loading from "../components/Loading/Loading";
import { LaunchInterface } from "../interfaces";
import LaunchCard from "../components/LaunchCard/LaunchCard";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const LaunchesPage = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState<number>(1);

  const { loading, error, data, fetchMore } = useQuery(GET_LAUNCHES, {
    variables: { page: page },
  });

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollLeft = timelineRef.current.scrollWidth;
    }
  }, []);

  if (loading) return <Loading />;

  if (!data || error) return <div>Error</div>;

  console.log("page", page);

  const handleScrollLeft = () => {
    if (timelineRef.current) {
      fetchMore({
        variables: { page: page + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          console.log("prev", prev.getLaunches);
          console.log("fetchMoreResult", fetchMoreResult.getLaunches.docs);

          const newDocs = fetchMoreResult.getLaunches.docs.filter(
            (newLaunch: any) =>
              !prev.getLaunches.some(
                (prevLaunch: any) => prevLaunch.id === newLaunch.id
              )
          );

          return Object.assign({}, prev, {
            getLaunches: {
              ...fetchMoreResult.getLaunches,
              docs: [...prev.getLaunches, ...newDocs],
            },
          });
        },
      });

      setPage(page + 1);
      timelineRef.current.scrollLeft -= timelineRef.current.offsetWidth;
    }
  };

  const handleScrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollLeft += timelineRef.current.offsetWidth;
    }
  };

  console.log("data", data?.getLaunches);

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
        <button className="paginationButton" onClick={handleScrollRight}>
          <ArrowRight size={32} />
        </button>
      </div>
    </main>
  );
};

export default LaunchesPage;
