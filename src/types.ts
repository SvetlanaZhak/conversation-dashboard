import { Language } from "./assets/translations";

export interface CommonProps {
  data: RoomStatisticsResponse;
  lang: Language;
}

// Typings for https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily
// Created with http://json2ts.com/
export interface RoomStatisticsResponse {
  room_id: string;
  start_date: string;
  end_date: string;
  total_visitors_with_conversation_count: number;
  total_visitors_affected_by_chat_count: number;
  total_visitors_autosuggested_count: number;
  total_visitors_with_chat_count: number;
  total_chats_from_autosuggest_count: number;
  total_chats_from_user_count: number;
  total_chats_from_visitor_count: number;
  total_conversation_count: number;
  total_user_message_count: number;
  total_visitor_message_count: number;
  total_missed_chat_count: number;
  by_date: DayStatistics[];
}

interface DayStatistics {
  visitors_with_conversation_count: number;
  visitors_affected_by_chat_count: number;
  visitors_autosuggested_count: number;
  visitors_with_chat_count: number;
  chats_from_autosuggest_count: number;
  chats_from_user_count: number;
  chats_from_visitor_count: number;
  conversation_count: number;
  user_message_count: number;
  visitor_message_count: number;
  missed_chat_count: number;
  date: string;
}
