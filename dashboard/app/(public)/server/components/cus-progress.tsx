import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  value: number;
}
export default function CusProgress({ value }: Props) {
  value *= 100;
  let color = "red";

  switch (true) {
    case value <= 25:
      color = "bg-green-300";
      break;
    case value <= 50:
      color = "bg-green-500";
      break;
    case value <= 75:
      color = "bg-yellow-500";
      break;
    default:
      color = "bg-red-500";
      break;
  }
  return (
    
        <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Progress
            className="rounded-sm bg-slate-200 "
            value={value}
            indicatorColor={cn(color, "transition duration-1000 delay-200")}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Usage: {value}%</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
