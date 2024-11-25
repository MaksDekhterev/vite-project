import { Input } from "../ui/Input/Input";

export const SearchBar = () => {
  return (
    <div>
      <form>
        <Input button={true} buttonName="Search" type='text'/>
      </form>
    </div>
  );
};
