import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-2 font-editorial-new italic">
      <Loader className="size-5 animate-spin" />
      <span className="shimmer shimmer-duration-1000 text-lg text-muted-foreground">
        Loading...
      </span>
    </div>
  );
}
