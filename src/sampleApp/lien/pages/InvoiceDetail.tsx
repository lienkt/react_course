import { useParams } from "react-router";
import { invoices } from "../data";

function InvoiceDetail() {
  const { invoiceId } = useParams();

  const invoiceList = invoices.map((inv) => ({
    ...inv,
    due: new Date(inv.due),
  }));

  const invoice = invoiceList.find(
    (item) => item.number === Number(invoiceId)
  );

  if (!invoice) {
    return <p>Invoice not found.</p>;
  }

  return (
    <div>
      <h2>Total Due: {invoice.amount}</h2>

      <p>
        {invoice.name}: {invoice.number}
      </p>

      <p>Due Date: {invoice.due.toLocaleDateString()}</p>
    </div>
  );
}

export default InvoiceDetail;
