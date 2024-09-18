import Input from "../Input";

function SearchBar() {
  return (
    <div className="flex h-fit items-center justify-between rounded-[5px] bg-[#EFF2F5] px-[8px] hover:border-[#A6B0C3]">
      <Input placeholder="Search" />
      <img
        className="h-[20px] w-[20px] cursor-pointer"
        src="src\assets\searchIcon.svg"
        alt="search icon"
      />
    </div>
  );
}

export default SearchBar;
