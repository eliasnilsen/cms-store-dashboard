import ColorClient from "./components/ColorClient";
import prismadb from "@/lib/prismadb";
import { ColorColumn } from "./components/DataColumns";
import { format } from "date-fns";

const Page = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: { storeId: params.storeId },
    orderBy: { createdAt: "desc" },
  });

  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="px-8 py-4 space-y-2">
      <ColorClient data={formattedColors} />
    </div>
  );
};

export default Page;
