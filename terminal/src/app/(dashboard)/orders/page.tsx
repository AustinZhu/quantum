import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrderEntryForm } from "@/components/orders/order-entry-form";

const rows = [
  { orderId: "ord_4821", symbol: "AAPL", side: "BUY", qty: 500, price: "$198.50", status: "Filled", strategy: "TSMOM" },
  { orderId: "ord_4820", symbol: "NVDA", side: "SELL", qty: 200, price: "$875.30", status: "Filled", strategy: "CSMOM" },
  { orderId: "ord_4819", symbol: "TSLA", side: "BUY", qty: 100, price: "$245.80", status: "Partial", strategy: "Mean Rev" },
  { orderId: "ord_4818", symbol: "MSFT", side: "SELL", qty: 300, price: "$420.15", status: "Pending", strategy: "Macro" },
  { orderId: "ord_4817", symbol: "AMZN", side: "BUY", qty: 150, price: "$185.40", status: "Filled", strategy: "CSMOM" },
  { orderId: "ord_4816", symbol: "META", side: "SELL", qty: 75, price: "$510.22", status: "Rejected", strategy: "Stat Arb" },
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Orders"
        description="Order entry, execution, and management"
        
      />

      <OrderEntryForm />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Order Management</CardTitle>
              <CardDescription>Active and recent orders</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="font-mono text-xs">
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {["ID", "Symbol", "Side", "Qty", "Price", "Strategy", "Status"].map((h) => (
                    <th
                      key={h}
                      className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider last:text-right last:pr-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.orderId} className="border-b border-border/50 last:border-0">
                    <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{row.orderId}</td>
                    <td className="py-2.5 pr-4 font-mono font-semibold">{row.symbol}</td>
                    <td className="py-2.5 pr-4">
                      <Badge variant={row.side === "BUY" ? "default" : "secondary"} className="font-mono text-xs">
                        {row.side}
                      </Badge>
                    </td>
                    <td className="py-2.5 pr-4 font-mono">{row.qty}</td>
                    <td className="py-2.5 pr-4 font-mono">{row.price}</td>
                    <td className="py-2.5 pr-4 text-muted-foreground">{row.strategy}</td>
                    <td className="py-2.5 text-right">
                      <Badge
                        variant={row.status === "Filled" ? "default" : row.status === "Rejected" ? "destructive" : "outline"}
                        className="font-mono text-xs"
                      >
                        {row.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
