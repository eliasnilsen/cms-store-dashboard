"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Server, Copy } from "lucide-react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

interface ApiCardProps {
  title: string;
  description: string;
  accessVariant: "admin" | "public";
}

const accessMap: Record<ApiCardProps["accessVariant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiCardProps["accessVariant"], BadgeProps["variant"]> =
  {
    public: "secondary",
    admin: "destructive",
  };

const ApiCard: React.FC<ApiCardProps> = ({
  title,
  description,
  accessVariant = "public",
}) => {
  const copyApiRoute = () => {
    navigator.clipboard.writeText(description);
    toast.success("Api-Route Copied");
  };
  return (
    <Alert>
      <Server className="h-5 w-5" />
      <AlertTitle className="flex items-center gap-2">
        {title}
        <Badge variant={variantMap[accessVariant]}>
          {accessMap[accessVariant]}
        </Badge>
      </AlertTitle>
      <AlertDescription className="flex items-center gap-2">
        <code className="p-2 rounded-md bg-muted">{description}</code>
        <Button variant="outline" size="icon" onClick={copyApiRoute}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default ApiCard;
