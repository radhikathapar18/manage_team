import React from "react";

const Table = ({ members, deleteMember }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-warning">
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Access</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.age}</td>
              <td>{member.phone}</td>
              <td>{member.email}</td>
              <td>{member.access}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => deleteMember(member.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
