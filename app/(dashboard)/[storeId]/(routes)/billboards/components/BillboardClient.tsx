"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumn, columns } from "./DataColumns";
import { DataTable } from "@/components/ui/data-table";
import ApiCardList from "@/components/ApiCardList";

interface BillboardClientProps {
  data: BillboardColumn[];
}

const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage and create new billboards for your store."
        />
      </div>
      <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
        <Plus className="h-4 w-4 mr-2" />
        New Billboard
      </Button>
      <Separator />
      <DataTable columns={columns} data={data} searchKeyword="label" />
      <Separator />
      <Heading
        title="API calls"
        description="A list of API calls used for Billboards."
      />
      <ApiCardList apiCardRoute="billboards" apiCardId="billboardId" />
    </>
  );
};

export default BillboardClient;
