import { useEffect, useState } from "react";

const useDomain = () => {
  const [mounted, setMounted] = useState(false);
  const domain =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return domain;
};

export default useDomain;
