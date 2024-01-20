import BillboardClient from "./components/BillboardClient";
import prismadb from "@/lib/prismadb";
import { BillboardColumn } from "./components/DataColumns";
import { format } from "date-fns";

const Page = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: { storeId: params.storeId },
    orderBy: { createdAt: "desc" },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="px-8 py-4 space-y-2">
      <BillboardClient data={formattedBillboards} />
    </div>
  );
};

export default Page;
