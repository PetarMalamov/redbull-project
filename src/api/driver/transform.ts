import { Driver } from "@/domain";
import { DriverDto } from "./dto";

export function dtoToDriver(driverDto: DriverDto): Driver {
  return {
    uuid: driverDto.driver_uuid,
    firstName: driverDto.first_name,
    lastName: driverDto.last_name,
    constructorName: driverDto.season_team_name,
    pointsTotal: driverDto.season_points,
  };
}
