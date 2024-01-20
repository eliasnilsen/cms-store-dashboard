import ProductClient from "./components/ProductClient";
import prismadb from "@/lib/prismadb";
import { ProductColumn } from "./components/DataColumns";
import { format } from "date-fns";
import { formatter } from "@/lib/utils";

const Page = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.product.findMany({
    where: { storeId: params.storeId },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchieved: item.isArchived,
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    size: item.size.name,
    color: item.color.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="px-8 py-4 space-y-2">
      <ProductClient data={formattedProducts} />
    </div>
  );
};

export default Page;
