// @/src/components/SortSelector.tsx

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/src/components/ui/select";
  import React from "react";
import { SortOption } from "./useSort";
  
  interface SortSelectorProps {
    options: SortOption<any>[];
    onChange: (value: string) => void;
  }
  
  const SortSelector: React.FC<SortSelectorProps> = ({ options, onChange }) => {
    const label = options.map(o => o.label)
    return (
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Trier par…" />
        </SelectTrigger>
        <SelectContent>
          {label.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };


  
  export default SortSelector;