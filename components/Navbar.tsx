import { UserButton, auth } from "@clerk/nextjs";
import NavMenu from "@/components/NavMenu";
import DropdownStoreMenu from "@/components/DropdownStoreMenu";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <header className="border-b w-full fixed bg-white z-20">
      <div className="flex items-center px-10 m-auto h-16 justify-between">
        <div className="flex items-center gap-4">
          <DropdownStoreMenu stores={stores} />
          <NavMenu />
        </div>
        <div className="">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
