import apiBase from "../app/apiBase";

const teamAPI = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => "/api/team",
    }),
  }),
});

export const { useGetTeamsQuery } = teamAPI;
