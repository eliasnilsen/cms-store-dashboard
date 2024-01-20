"use client";

import { useParams } from "next/navigation";
import ApiCard from "./ApiCard";
import useDomain from "@/hooks/use-domain";

interface ApiCardListProps {
  apiCardRoute: string;
  apiCardId: string;
}

const ApiCardList: React.FC<ApiCardListProps> = ({
  apiCardRoute,
  apiCardId,
}) => {
  const params = useParams();
  const domain = useDomain();

  const baseUrl = `${domain}/api/${params.storeId}`;

  return (
    <>
      <ApiCard
        title="GET"
        accessVariant="public"
        description={`${baseUrl}/${apiCardRoute}`}
      />
      <ApiCard
        title="GET"
        accessVariant="public"
        description={`${baseUrl}/${apiCardRoute}/{${apiCardId}}`}
      />
      <ApiCard
        title="POST"
        accessVariant="admin"
        description={`${baseUrl}/${apiCardRoute}`}
      />
      <ApiCard
        title="PATCH"
        accessVariant="admin"
        description={`${baseUrl}/${apiCardRoute}/{${apiCardId}}`}
      />
      <ApiCard
        title="DELETE"
        accessVariant="admin"
        description={`${baseUrl}/${apiCardRoute}/{${apiCardId}}`}
      />
    </>
  );
};

export default ApiCardList;
