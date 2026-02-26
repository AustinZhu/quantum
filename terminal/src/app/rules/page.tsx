const rules = [
  { id: "risk_notional", version: "v1", enabled: true },
  { id: "risk_quantity", version: "v1", enabled: true },
];

export default function RulesPage() {
  return (
    <section className="card">
      <div className="label">Risk Rule Management</div>
      <table className="table">
        <thead>
          <tr>
            <th>Rule</th>
            <th>Version</th>
            <th>Enabled</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule) => (
            <tr key={rule.id}>
              <td>{rule.id}</td>
              <td>{rule.version}</td>
              <td>{String(rule.enabled)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
