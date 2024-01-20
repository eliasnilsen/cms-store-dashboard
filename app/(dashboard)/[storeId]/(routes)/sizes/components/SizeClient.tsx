"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./DataColumns";
import { DataTable } from "@/components/ui/data-table";
import ApiCardList from "@/components/ApiCardList";

interface SizeClientProps {
  data: SizeColumn[];
}

const SizeClient: React.FC<SizeClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage and create new sizes for your store."
        />
      </div>
      <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
        <Plus className="h-4 w-4 mr-2" />
        New Size
      </Button>
      <Separator />
      <DataTable columns={columns} data={data} searchKeyword="name" />
      <Separator />
      <Heading
        title="API calls"
        description="A list of API calls used for Sizes."
      />
      <ApiCardList apiCardRoute="sizes" apiCardId="sizeId" />
    </>
  );
};

export default SizeClient;
