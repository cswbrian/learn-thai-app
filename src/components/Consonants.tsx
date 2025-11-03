import { consonants, type ConsonantClass } from "@/data/consonants";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const getClassColor = (classType: ConsonantClass): string => {
  const colorMap: Record<ConsonantClass, string> = {
    high: "var(--chart-2)",
    mid: "var(--chart-3)",
    low: "var(--chart-4)",
  };
  return colorMap[classType];
};

const getClassLabel = (classType: ConsonantClass): string => {
  return classType.charAt(0).toUpperCase() + classType.slice(1) + " Class";
};


export const Consonants = () => {
  // Group consonants by class
  const groupedByClass = consonants.reduce(
    (acc, consonant) => {
      if (!acc[consonant.class]) {
        acc[consonant.class] = [];
      }
      acc[consonant.class].push(consonant);
      return acc;
    },
    {} as Record<ConsonantClass, typeof consonants>
  );

  // Group consonants by consonant sound
  const groupedBySound = consonants.reduce(
    (acc, consonant) => {
      const sound = consonant.consonantSound || "empty";
      if (!acc[sound]) {
        acc[sound] = [];
      }
      acc[sound].push(consonant);
      return acc;
    },
    {} as Record<string, typeof consonants>
  );

  // Sort sounds alphabetically, with empty sound at the end
  const sortedSounds = Object.keys(groupedBySound).sort((a, b) => {
    if (a === "empty") return 1;
    if (b === "empty") return -1;
    return a.localeCompare(b);
  });

  // Group consonants by popularity
  const groupedByPopularity = consonants.reduce(
    (acc, consonant) => {
      const popularity = consonant.popularity ?? 999; // Treat undefined as least popular
      if (!acc[popularity]) {
        acc[popularity] = [];
      }
      acc[popularity].push(consonant);
      return acc;
    },
    {} as Record<number, typeof consonants>
  );

  // Sort popularity groups ascending (lower number = higher popularity)
  const sortedPopularities = Object.keys(groupedByPopularity)
    .map(Number)
    .sort((a, b) => a - b);

  // Display order: high, mid, low
  const classOrder: ConsonantClass[] = ["high", "mid", "low"];

  const renderCard = (consonant: (typeof consonants)[0], bgColor: string) => (
    <Card
      key={consonant.thai}
      className="flex flex-col items-center justify-center p-2"
      style={{ backgroundColor: bgColor }}
    >
      <CardContent className="flex flex-col items-center justify-center gap-1 p-0">
        <div className="text-5xl text-foreground thai-font">
          {consonant.thai}
        </div>
        <div className="text-sm text-muted-foreground">
          {consonant.consonantSound || "-"}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-svh bg-background p-4 pb-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-2xl font-bold">Thai Consonants</h1>
        <Tabs defaultValue="class" className="w-full">
          <TabsList className="mb-6 w-full">
            <TabsTrigger value="class" className="flex-1">
              Class
            </TabsTrigger>
            <TabsTrigger value="sound" className="flex-1">
              Sound
            </TabsTrigger>
            <TabsTrigger value="popularity" className="flex-1">
              Popularity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="class">
            {classOrder.map((classType) => (
              <div key={classType} className="mb-8">
                <h2 className="mb-4 text-lg font-semibold">
                  {getClassLabel(classType)}
                </h2>
                <div className="grid grid-cols-5 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
                  {groupedByClass[classType]?.map((consonant) =>
                    renderCard(consonant, getClassColor(consonant.class))
                  )}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="sound">
            {sortedSounds.map((sound) => (
              <div key={sound} className="mb-8">
                <h2 className="mb-4 text-lg font-semibold">
                  {sound === "empty" ? "Empty Sound" : `/${sound}/`}
                </h2>
                <div className="grid grid-cols-5 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
                  {groupedBySound[sound]?.map((consonant) =>
                    renderCard(consonant, getClassColor(consonant.class))
                  )}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="popularity">
            {sortedPopularities.map((popularity) => (
              <div key={popularity} className="mb-8">
                <h2 className="mb-4 text-lg font-semibold">
                  Popularity {popularity === 999 ? "Unknown" : popularity}
                </h2>
                <div className="grid grid-cols-5 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
                  {groupedByPopularity[popularity]?.map((consonant) =>
                    renderCard(consonant, getClassColor(consonant.class))
                  )}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

