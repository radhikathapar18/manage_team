import React, { useState } from "react";
import { Navbar, Table } from "./components";
import MemberForm from "./MemberForm.jsx";

const App = () => {
  const [members, setMembers] = useState([]);

  const addMember = (member) => {
    setMembers([...members, member]);
  };

  const deleteMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  return (
    <div className="px-[10px] py-[10px]">
      <Navbar />

      <div className="flex flex-row items-center justify-between px-[30px] mt-[50px]">
        <div className="flex flex-col">
          <div className="text-[30px] uppercase font-bold text-warning">
            Team Details
          </div>
          <p className="font-medium">Welcome to OYC</p>
        </div>

        <div>
          <MemberForm addMember={addMember} />
        </div>
      </div>

      <div className="px-[30px] mt-[40px]">
        <Table members={members} deleteMember={deleteMember} />
      </div>
    </div>
  );
};

export default App;
