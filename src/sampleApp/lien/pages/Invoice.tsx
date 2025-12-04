import { Outlet, NavLink } from "react-router";

// data
import { invoices } from "../data";

interface InvoiceData {
  name: string;
  number: number;
  amount: string;
  due: string;
}

function Invoices() {
  const invoiceList = invoices as InvoiceData[];

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {invoiceList.map((invoice) => (
          <NavLink
            key={invoice.number}
            style={({ isActive }) => ({
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            })}
            to={`/invoice/${invoice.number}`}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>

      <div style={{ padding: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Invoices;
