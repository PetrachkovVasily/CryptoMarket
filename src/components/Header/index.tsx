import { useState } from "react";

import Modal from "../Modal";
import Button from "../Button";
import TopList from "../TopList";
import SearchBar from "../SearchBar";
import BriefCost from "../BriefCost";
import BriefModal from "../BriefModal";

function Header() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <header className="flex h-[120px] w-screen min-w-[390px] justify-center border-b-[3px] px-[24px] text-[14px] font-medium md:h-[80px]">
      <div className="flex w-[100%] max-w-[1440px] items-center justify-between gap-[8px]">
        <TopList />
        <div className="flex flex-col-reverse gap-2 md:flex-row md:items-center md:gap-[16px]">
          <SearchBar />
          <Button onClick={() => setModalActive(true)}>
            <BriefCost />
          </Button>
        </div>
      </div>
      <Modal
        isActive={modalActive}
        setActive={setModalActive}
        variant={"briefcase"}
        size={"neutral"}
      >
        <BriefModal />
      </Modal>
    </header>
  );
}

export default Header;
