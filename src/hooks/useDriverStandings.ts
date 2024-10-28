import { Driver } from "@/domain";
import { useEffect, useState } from "react";
import DriverApi from "../api/driver";

type UseDriverStandingsProps = {
  season: string;
};

type UseDriverStandingsResponse = {
  isLoading: boolean;
  isError: boolean;
  data: Driver[];
};

export const useDriverStandings = (
  props: UseDriverStandingsProps
): UseDriverStandingsResponse => {
  const { season } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Driver[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    DriverApi.getDriverStandings(season, { signal: controller.signal })
      .then((response) => {
        const { data, isOk } = response;

        if (!isOk) {
          setIsError(true);
          return;
        }

        setData(data);
        setIsError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      // cleanup
      controller.abort();
    };
  }, [season]);

  return {
    data,
    isLoading,
    isError,
  };
};
