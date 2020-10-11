import { useQuery } from "react-query";
import reduce from "lodash/reduce";
import client from "./apiClient";

const defaultOptions = { page: 1, skip: false };

function useOffers(options) {
  const finalOptions = { ...defaultOptions, ...options };
  const filtresQueryParams = reduce(
    finalOptions.filters,
    (acc, value, key) => acc += `&${key}=${value}`,"");
  const { data: offers, isLoading: loading } = useQuery("Offer-list", {
    queryFn: () =>
      client
        .get(`offer?page=${finalOptions.page}${filtresQueryParams}`)
        .then(({ data }) => data.results),
    ...finalOptions,
    enabled: !finalOptions.skip,
  });

  return { offers, loading };
}

export default useOffers;
