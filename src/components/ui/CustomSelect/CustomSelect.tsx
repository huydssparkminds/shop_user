import clsx from "clsx";
import { Label, Select } from "flowbite-react";

interface Props {
  className?: string;
  optios: option[];
  LabelName: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface option {
  id: number;
  name: string | number;
}

export function CustomSelect({ className, optios, LabelName, name, onChange }: Props) {
  return (
    <div className={clsx("wfull md:max-w-[257px]", className)}>
      <div className="mb-2 block">
        <Label htmlFor={name} value={LabelName} />
      </div>
      <Select id={name} onChange={onChange} className="font-bold" required>
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
