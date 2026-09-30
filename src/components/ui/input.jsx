import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-black/10 bg-[#f5f5f7] px-4 text-base text-[#17171d] placeholder:text-black/35 transition-all focus-visible:outline-none focus-visible:border-[#7254f6] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#7254f6]/10 disabled:cursor-not-allowed disabled:opacity-50 sm:text-[0.9375rem]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
