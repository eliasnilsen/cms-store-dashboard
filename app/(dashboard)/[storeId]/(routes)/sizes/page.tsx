import SizeClient from "./components/SizeClient";
import prismadb from "@/lib/prismadb";
import { SizeColumn } from "./components/DataColumns";
import { format } from "date-fns";

const Page = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: { storeId: params.storeId },
    orderBy: { createdAt: "desc" },
  });

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="px-8 py-4 space-y-2">
      <SizeClient data={formattedSizes} />
    </div>
  );
};

export default Page;
