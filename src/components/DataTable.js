import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, addEmployee, editEmployee } from ".employeesSlice";
import TableRow from ".TableRow";
import styles from ".DataTable.module.scss";

const DataTable = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleEdit = (employee) => {
    dispatch(editEmployee(employee));
  };

  const handleAdd = () => {
    const newEmployee = {
      id: Date.now(),
      name: "New Employee",
      email: "new@gmail.com",
      status: "Free",
      role: "New Role",
    };
    dispatch(addEmployee(newEmployee));
  };

  return (
    <div className={styles.dataTable}>
      <input
        type="text"
        placeholder="Search Employee"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleAdd}>Add Employee</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <TableRow
              key={employee.id}
              employee={employee}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
import { type } from "@testing-library/user-event/dist/type";
import React from "react";
