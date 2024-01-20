"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { ColorColumn, columns } from "./DataColumns";
import { DataTable } from "@/components/ui/data-table";
import ApiCardList from "@/components/ApiCardList";

interface ColorClientProps {
  data: ColorColumn[];
}

const ColorClient: React.FC<ColorClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage and create new colors for your store."
        />
      </div>
      <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
        <Plus className="h-4 w-4 mr-2" />
        New Color
      </Button>
      <Separator />
      <DataTable columns={columns} data={data} searchKeyword="name" />
      <Separator />
      <Heading
        title="API calls"
        description="A list of API calls used for colors."
      />
      <ApiCardList apiCardRoute="colors" apiCardId="colorId" />
    </>
  );
};

export default ColorClient;
