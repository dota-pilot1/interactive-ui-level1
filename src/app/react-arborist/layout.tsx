import type { ReactNode } from "react";
import { ArboristSidebar } from "@/components/arborist/ArboristSidebar";

export default function ReactArboristLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <ArboristSidebar className="w-72 shrink-0" />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

