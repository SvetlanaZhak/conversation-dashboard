import useAxios, { ResponseValues } from "axios-hooks";
import { RoomStatisticsResponse } from "../types";

export type GetData = (
  startDate: string,
  endDate: string,
  token: string
) => void;

export const useRoomStatistics = (): [
  ResponseValues<RoomStatisticsResponse | undefined>,
  GetData
] => {
  const [responseValues, getDataInternal] = useAxios<
    RoomStatisticsResponse | undefined
  >({}, { manual: true });
  const getData = (startDate: string, endDate: string, token: string) => {
    getDataInternal({
      url: `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${startDate}&end_date=${endDate}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      }
    });
  };
  return [responseValues, getData];
};
