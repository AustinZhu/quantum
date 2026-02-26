import { OrderEntryForm } from "@/components/orders/order-entry-form";

const rows = [
  { orderId: "ord_1001", symbol: "AAPL", side: "BUY", qty: 50, status: "ACCEPTED" },
  { orderId: "ord_1002", symbol: "NVDA", side: "SELL", qty: 20, status: "REJECTED" },
];

export default function OrdersPage() {
  return (
    <div className="space-y-4">
      <OrderEntryForm />
      <section className="card">
        <div className="label">Order Management</div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Symbol</th>
              <th>Side</th>
              <th>Qty</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.orderId}>
                <td>{row.orderId}</td>
                <td>{row.symbol}</td>
                <td>{row.side}</td>
                <td>{row.qty}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
