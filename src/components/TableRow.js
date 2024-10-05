import React, { useState } from "react";
import styles from "../styles/TableRow.module.scss";

const TableRow = ({ employee, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(employee);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleSave = () => {
    onEdit(editedEmployee);
    setIsEditing(false);
  };

  return (
    <tr className={styles.row}>
      {isEditing ? (
        <>
          <td>
            <input
              name="name"
              value={editedEmployee.name}
              onChange={handleEditChange}
            />
          </td>
          <td>
            <input
              name="email"
              value={editedEmployee.email}
              onChange={handleEditChange}
            />
          </td>
          <td>
            <input
              name="status"
              value={editedEmployee.status}
              onChange={handleEditChange}
            />
          </td>
          <td>
            <input
              name="role"
              value={editedEmployee.role}
              onChange={handleEditChange}
            />
          </td>
          <td>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.status}</td>
          <td>{employee.role}</td>
          <td>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(employee.id)}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
import React from "react";
