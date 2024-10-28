import { ContentLayout, PageLayout } from "@/components/layouts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDriverStandings } from "@/hooks";

import { FC, useState } from "react";

const FINAL_YEAR = 2023;
const DRIVER_STANDING_YEARS = Array.from(
  { length: 10 },
  (_, i) => FINAL_YEAR - i
);

export const DriverStandingsPage: FC = () => {
  const [season, setSeason] = useState<string>(FINAL_YEAR.toString());
  const {
    data: drivers,
    isError,
    isLoading,
  } = useDriverStandings({
    season,
  });

  return (
    <PageLayout>
      <ContentLayout>
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-redbull-yellow">
            {season} Driver Standings
          </h1>
          <Select value={season} onValueChange={(value) => setSeason(value)}>
            <SelectTrigger className="w-[180px] text-white">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {DRIVER_STANDING_YEARS.map((year) => {
                return (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        {drivers.length === 0 && !isLoading && (
          <p className="text-xl font-semibold">
            No driver standings for {season}
          </p>
        )}
        {isError && (
          <p className="text-xl font-semibold">
            There was an error fetching driver standings
          </p>
        )}
        {isLoading && <p className="text-xl font-semibold">Loading...</p>}
        {drivers.length > 0 && !isLoading && (
          <Table>
            <TableHeader>
              <TableRow className="text-lg md:text-xl font-bold">
                <TableHead className="font-bold">Position</TableHead>
                <TableHead className="font-bold">Driver name</TableHead>
                <TableHead className="font-bold">Constructor name</TableHead>
                <TableHead className="font-bold">Points total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver, index) => (
                <TableRow
                  key={driver.uuid}
                  className={`
              text-sm md:text-lg
              border-b border-gray-800 
              hover:bg-slate-800 transition-colors ${
                index % 2 !== 0 && "bg-redbull-light-blue"
              }`}
                >
                  <TableCell className="text-redbull-red font-bold">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-redbull-gray font-semibold">{`${driver.firstName} ${driver.lastName}`}</TableCell>
                  <TableCell className="text-redbull-gray font-semibold">
                    {driver.constructorName}
                  </TableCell>
                  <TableCell className="text-white font-bold">
                    {driver.pointsTotal}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </ContentLayout>
    </PageLayout>
  );
};
