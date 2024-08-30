import { Search } from "lucide-react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Input } from "../ui/input";

export const SearchBar = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      <div className="flex flex-row items-center space-x-2 mr-4">
      <Label>
        <Search />
        </Label>
        <Input />

      </div>
      <div className="flex items-center space-x-2">
        <Switch id="man" />
        <Label htmlFor="man">Pour les hommes</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="women" />
        <Label htmlFor="women">Pour les femmes</Label>
      </div>
    </div>
  );
};
