const launchResolver = {
  Query: {
    getLaunches: () => {
      return [
        {
          id: "1",
          name: "Falcon 9 Launch",
          date: "2023-01-01",
          status: "Success",
        },
        {
          id: "2",
          name: "Crew Dragon Launch",
          date: "2023-02-01",
          status: "Success",
        },
      ];
    },
    getLaunch: (_: any, { id }: { id: string }) => {
      return {
        id,
        name: "Falcon 9 Launch",
        date: "2023-01-01",
        status: "Success",
      };
    },
  },
};

export default launchResolver;
