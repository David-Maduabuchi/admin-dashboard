import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import "./products.scss";
import Add from "../../components/add/Add";
import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";

//TABLE DATA

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];


function Products() {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products </h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" rows={products} columns={columns} />
      {/* Now, the line of code below reads as "if the add box is open, 
      return it here and pass the setOpen property to the child so the state can be closed from wiithin the child" */}
      {open && <Add slug={"products"} columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Products;
