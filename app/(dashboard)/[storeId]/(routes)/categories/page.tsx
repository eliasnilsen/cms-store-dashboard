import prismadb from "@/lib/prismadb";
import { CategoryColumn } from "./components/DataColumns";
import { format } from "date-fns";
import CategoryClient from "./components/CategoryClient";

const Page = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: { storeId: params.storeId },
    include: {
      billboard: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="px-8 py-4 space-y-2">
      <CategoryClient data={formattedCategories} />
    </div>
  );
};

export default Page;
