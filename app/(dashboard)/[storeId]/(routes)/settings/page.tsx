import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SettingsForm from "./components/SettingsForm";
import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import ApiCardList from "@/components/ApiCardList";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId: userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="px-8 py-4 space-y-2">
      <SettingsForm initialData={store} />
      <Separator />
      <Heading
        title="API calls"
        description="A list of API calls used for Stores."
      />
      <ApiCardList apiCardRoute="stores" apiCardId="storeId" />
    </div>
  );
};

export default SettingsPage;
