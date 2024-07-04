import { SquareArrowUp, SquareArrowDown } from "lucide-react";
import { NetworkDataType } from "@/app/types/type";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface Props {
  type: number;
  value: NetworkDataType;
}
// type 0 Network status
// type 1 Current Network activity status
export default function NetworkInformationBar({
  type,
  value: { upload, download },
}: Props) {
  let filledColor;
  if (type === 1) {
    filledColor = "fill-green-500 ";
  }
  return (
    <div className="flex items-center flex-row">
      <SquareArrowUp size={18} className={cn("mr-1", filledColor)} />
      <p className="basis-1/2">
        {upload} {filledColor && "/s"}
      </p>
      <SquareArrowDown size={18} className={cn("mr-1", filledColor)} />
      <p className="basis-1/2">
        {download} {filledColor && "/s"}
      </p>
    </div>
  );
}
