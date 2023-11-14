const launchResolver = {
  Query: {
    getLaunches: async (_: any, { page }: { page: number }) => {
      console.log("page", page);
      const response = await fetch(
        "https://api.spacexdata.com/v5/launches/query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: {},
            options: {
              sort: {
                flight_number: "desc",
              },
              page: page,
              limit: 6,
            },
          }),
        }
      );
      const launches = await response.json();
      return launches;
    },
    // getLaunch: async (_: any, { id }: { id: string }) => {
    //   const response = await fetch(
    //     `https://api.spacexdata.com/v5/launches/${id}`
    //   );
    //   const launch = await response.json();
    //   console.log("launch", launch);
    //   return launch;
    // },
    getLaunch: async (_: any, { id }: { id: string }) => {
      const response = await fetch(
        `https://api.spacexdata.com/v5/launches/${id}`
      );
      const launch = await response.json();
      console.log("launch", launch);
      return launch;
    },
  },
};

export default launchResolver;
