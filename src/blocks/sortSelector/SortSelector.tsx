// @/src/components/SortSelector.tsx

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/src/components/ui/select";
  import React from "react";
  
  interface SortSelectorProps {
    options: string[];
    onChange: (value: string) => void;
  }
  
  const SortSelector: React.FC<SortSelectorProps> = ({ options, onChange }) => {
    return (
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Trier par…" />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };


  
  export default SortSelector;