import { Input } from "../ui/Input/Input";

export const SearchBar = ({ setSearch }) => {
  return (
    <div>
      <form>
        <Input
          button={true}
          buttonName="Search"
          type="text"
          onInput={(evt)=>setSearch(evt.target.value)}
        />
      </form>
    </div>
  );
};
