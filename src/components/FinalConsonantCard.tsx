import type { FinalConsonant } from "@/data/finalConsonants";
import { Card, CardContent } from "@/components/ui/card";

interface FinalConsonantCardProps {
  finalConsonant: FinalConsonant;
}

export const FinalConsonantCard = ({ finalConsonant }: FinalConsonantCardProps) => {
  return (
    <Card className="flex flex-col items-center justify-center p-3 min-h-[80px] bg-white">
      <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
        <div className="text-5xl text-foreground thai-font leading-none text-center">
          {finalConsonant.thai}
        </div>
        <div className="text-md text-muted-foreground text-center">
          /{finalConsonant.finalSound}/
        </div>
      </CardContent>
    </Card>
  );
};

