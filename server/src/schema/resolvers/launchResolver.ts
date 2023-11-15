const launchResolver = {
  Query: {
    getLaunches: async (_: any, { page }: { page: number }) => {
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
              limit: 5,
            },
          }),
        }
      );
      const launches = await response.json();
      return launches;
    },
    getLaunch: async (_: any, { id }: { id: string }) => {
      console.log("id", id);
      const response = await fetch(
        "https://api.spacexdata.com/v5/launches/query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: { _id: id }, // MongoDB query
            options: {
              limit: 1,
              populate: [
                "rocket",
                "launchpad",
                // "payloads",
                // "ships",
                // {
                //   "path":"cores",
                //   "populate": [
                //     {
                //       "path":"core"
                //     }
                // }
              ],
            },
          }),
        }
      );
      const launch = await response.json();
      return launch;
    },
  },
};

export default launchResolver;
