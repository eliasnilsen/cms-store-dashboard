"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Store } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  Check,
  ChevronDown,
  Store as StoreIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandList,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface DropdownStoreMenuProps extends PopoverTriggerProps {
  stores: Store[];
}

const DropdownStoreMenu = ({
  className,
  stores = [],
}: DropdownStoreMenuProps) => {
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const storeItems = stores.map((store) => ({
    label: store.name,
    value: store.id,
  }));

  const activeStore = storeItems.find(
    (store) => store.value === params.storeId
  );

  const [open, setOpen] = useState(false);

  const storeSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select Store"
          className={cn("w-[200px] justify-between", className)}
        >
          <div className="flex">
            <StoreIcon className="h-5 w-5 mr-2" />
            <span className="truncate w-32">{activeStore?.label}</span>
          </div>
          <ChevronDown className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px]">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search Store" />
            <CommandEmpty>No Store Found</CommandEmpty>
            <CommandGroup>
              {storeItems.map((store) => (
                <CommandItem
                  key={store.value}
                  onSelect={() => storeSelect(store)}
                  className="justify-between text-sm truncate"
                >
                  <div className="flex">
                    <Check
                      className={cn(
                        "h-5 w-5 mr-2",
                        activeStore?.value === store.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {store.label}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  storeModal.onOpen();
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                New Store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DropdownStoreMenu;
