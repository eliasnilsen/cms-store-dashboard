"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavMenu = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const navRoutes = [
    {
      label: "Settings",
      href: `/${params.storeId}/settings`,
      active: pathname === `/${params.storeId}/settings`,
    },
    {
      label: "Billboards",
      href: `/${params.storeId}/billboards`,
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      label: "Categories",
      href: `/${params.storeId}/categories`,
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      label: "Products",
      href: `/${params.storeId}/products`,
      active: pathname === `/${params.storeId}/products`,
    },
    {
      label: "Sizes",
      href: `/${params.storeId}/sizes`,
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      label: "Colors",
      href: `/${params.storeId}/colors`,
      active: pathname === `/${params.storeId}/colors`,
    },
  ];

  return (
    <nav className="flex gap-4">
      {navRoutes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className={cn(
            "flex items-center transition-colors hover:text-primary text-sm font-medium",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
