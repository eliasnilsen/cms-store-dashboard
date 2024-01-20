"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./DataColumns";
import { DataTable } from "@/components/ui/data-table";
import ApiCardList from "@/components/ApiCardList";

interface CategoryClientProps {
  data: CategoryColumn[];
}

const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage and add new categories for your store."
        />
      </div>
      <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
        <Plus className="h-4 w-4 mr-2" />
        New Category
      </Button>
      <Separator />
      <DataTable columns={columns} data={data} searchKeyword="name" />
      <Separator />
      <Heading
        title="API calls"
        description="A list of API calls used for Categories."
      />
      <ApiCardList apiCardRoute="categories" apiCardId="categoryId" />
    </>
  );
};

export default CategoryClient;
