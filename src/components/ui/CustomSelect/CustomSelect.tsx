import clsx from "clsx";
import { Label, Select } from "flowbite-react";

interface Props {
  className?: string;
  optios: option[];
  LabelName: string;
  name: string;
}

interface option {
  id: number;
  name: string;
}

export function CustomSelect({ className, optios, LabelName, name }: Props) {
  return (
    <div className={clsx("max-w-md", className)}>
      <div className="mb-2 block">
        <Label htmlFor={name} value={LabelName} />
      </div>
      <Select id={name} className="font-bold" required>
        <option>All product</option>
        {optios &&
          optios.map((e) => (
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          ))}
      </Select>
    </div>
  );
}
