import { AxiosRequestConfig } from "axios";
import { apiClient } from "../client";
import { Driver } from "@/domain";
import { DriverDto } from "./dto";
import { dtoToDriver } from "./transform";

const getDriverStandings = async (
  season: string | number,
  config?: AxiosRequestConfig
): Promise<{ data: Driver[]; isOk: boolean }> => {
  try {
    const response = await apiClient.get<DriverDto[]>(
      `stats/drivers/${season}`,
      config
    );

    const driverStandings: Driver[] = response.data.map((driver) => {
      return dtoToDriver(driver);
    });

    return {
      data: driverStandings,
      isOk: true,
    };
  } catch (err) {
    console.log(err);
    return {
      data: [],
      isOk: false,
    };
  }
};

export default { getDriverStandings };
