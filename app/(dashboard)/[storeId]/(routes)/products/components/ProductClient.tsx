"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./DataColumns";
import { DataTable } from "@/components/ui/data-table";
import ApiCardList from "@/components/ApiCardList";

interface ProductClientProps {
  data: ProductColumn[];
}

const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center">
        <Heading
          title={`Products (${data.length})`}
          description="Manage and create new products for your store."
        />
      </div>
      <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
        <Plus className="h-4 w-4 mr-2" />
        New Product
      </Button>
      <Separator />
      <DataTable columns={columns} data={data} searchKeyword="name" />
      <Separator />
      <Heading
        title="API calls"
        description="A list of API calls used for Products."
      />
      <ApiCardList apiCardRoute="products" apiCardId="productId" />
    </>
  );
};

export default ProductClient;
