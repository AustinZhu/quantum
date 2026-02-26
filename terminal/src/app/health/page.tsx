const services = [
  { name: "algorand", status: "healthy" },
  { name: "datafeed", status: "healthy" },
  { name: "doordash", status: "healthy" },
  { name: "temporal", status: "healthy" },
  { name: "timescaledb", status: "healthy" },
  { name: "redis", status: "healthy" },
];

export default function HealthPage() {
  return (
    <section className="card">
      <div className="label">System Healthcheck</div>
      <table className="table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {services.map((svc) => (
            <tr key={svc.name}>
              <td>{svc.name}</td>
              <td>{svc.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
