"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Calendar } from "@/src/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/src/components/ui/button";
import { CalendarIcon } from "lucide-react";

export default function BookingLanding() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [roomCategory, setRoomCategory] = useState("deluxe");

  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#FDFDFD] w-full max-w-5xl p-5 border border-slate-100  shadow-sm">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">

          {/* Check-in */}
          <div className="space-y-2 flex flex-col items-center">
            <label className="text-sm font-bold text-[#C9960C] uppercase tracking-widest">
              Check-in
            </label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-center text-center font-medium border-slate-100  hover:bg-slate-50 transition-all px-5",
                    !checkIn && "text-slate-400"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-yellow-500" />
                  {checkIn ? format(checkIn, "MMM d, yyyy") : "MM/DD/YY"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out */}
          <div className="space-y-2 flex flex-col items-center">
            <label className="text-sm font-bold text-[#C9960C] uppercase tracking-widest">
              Check-out
            </label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-center text-center font-medium border-slate-100  hover:bg-slate-50 transition-all px-5",
                    !checkOut && "text-slate-400"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-yellow-500" />
                  {checkOut ? format(checkOut, "MMM d, yyyy") : "MM/DD/YY"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Room Category */}
          <div className="space-y-2  flex flex-col items-center">
            <label className="text-sm font-bold text-[#C9960C] uppercase tracking-widest">
              Room Category
            </label>

            <Select value={roomCategory} onValueChange={setRoomCategory}>
              <SelectTrigger className="w-full h-12 p-5 justify-center  border-slate-100">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="standard">Standard Room</SelectItem>
                <SelectItem value="deluxe">Deluxe Room</SelectItem>
                <SelectItem value="junior-suite">Junior Suite</SelectItem>
                <SelectItem value="royal-suite">Royal Suite</SelectItem>
                <SelectItem value="presidential">Presidential Suite</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Button */}
          <div className="flex mt-5 rounded-none items-center justify-center h-full">
            <Button className="bg-[#C9960C] hover:bg-[#9a7c24] text-white text-[11px] tracking-[3px] font-medium uppercase px-8 py-5 rounded-none cursor-pointer w-full">
              Check Availability
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}