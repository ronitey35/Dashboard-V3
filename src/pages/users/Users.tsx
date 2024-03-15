import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const Users = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "img",
      headerName: "Avatar",
      width: 50,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="No Avatar " />;
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 100,
      editable: true,
      type: "string",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 90,
      editable: true,
      type: "string",
    },
    {
      field: "email",
      headerName: " Email",
      width: 180,
      editable: true,
      type: "string",
    },
    {
      field: "phone",
      headerName: " Phone",
      width: 110,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 40,
      editable: true,
    },
    {
      field: "Yes/No",
      headerName: "Verified",
      type: "boolean",
      width: 80,

      editable: false,
    },
    {
      field: "fullName",
      headerName: "Full name",
      type: "string",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add new user</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
