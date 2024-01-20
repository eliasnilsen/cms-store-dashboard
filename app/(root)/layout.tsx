import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const firstStore = await prismadb.store.findFirst({
    where: { userId: userId },
  });

  if (firstStore) {
    redirect(`/${firstStore.id}`);
  }

  return <div>{children}</div>;
}
