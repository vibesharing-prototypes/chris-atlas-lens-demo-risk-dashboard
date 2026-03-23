"use client";

const navItems = [
  { icon: "\u{1F3E0}", label: "Home", active: true },
  { icon: "\u{1F4CA}", label: "Risk Overview", active: false },
  { icon: "\u{1F50D}", label: "Investigations", active: false },
  { icon: "\u{1F4CB}", label: "Compliance", active: false },
  { icon: "\u{1F4C8}", label: "Reports", active: false },
  { icon: "\u2699\uFE0F", label: "Settings", active: false },
];

const risks = [
  { id: "RSK-2041", title: "Third-party vendor data exposure", severity: "error", owner: "Diana R.", due: "Mar 25", progress: 65 },
  { id: "RSK-2038", title: "Regulatory filing deadline approaching", severity: "warning", owner: "James K.", due: "Mar 28", progress: 40 },
  { id: "RSK-2035", title: "SOC 2 audit remediation complete", severity: "success", owner: "Sarah M.", due: "Completed", progress: 100 },
  { id: "RSK-2032", title: "Board materials review pending approval", severity: "info", owner: "Tom H.", due: "Apr 1", progress: 20 },
  { id: "RSK-2029", title: "Cybersecurity incident response drill", severity: "warning", owner: "Alex P.", due: "Apr 3", progress: 55 },
];

function StatusBadge({ status, children }: { status: string; children: React.ReactNode }) {
  const bgVar = "var(--status-" + status + "-muted)";
  const fgVar = "var(--status-" + status + ")";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "2px 10px", fontSize: 12, fontWeight: 600,
      borderRadius: "var(--radius-full)",
      background: bgVar, color: fgVar,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: fgVar }} />
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg-base)" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: "var(--brand-primary)", zIndex: 50 }} />
      <aside style={{
        width: 280, flexShrink: 0, background: "var(--bg-surface)",
        borderRight: "1px solid var(--border-default)",
        display: "flex", flexDirection: "column", paddingTop: 3,
      }}>
        <div style={{ padding: "20px 16px 16px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 32, height: 32, borderRadius: "var(--radius-md)",
            background: "var(--brand-primary)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--text-inverse)", fontSize: 16, fontWeight: 700,
          }}>D</div>
          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>Diligent</span>
        </div>
        <div style={{ padding: "16px 16px 8px", fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" as const, letterSpacing: 1 }}>Platform</div>
        <nav style={{ flex: 1, padding: "0 8px" }}>
          {navItems.map((item) => (
            <div key={item.label} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 16px", marginBottom: 2,
              borderRadius: "var(--radius-md)",
              background: item.active ? "var(--action-default)" : "transparent",
              color: item.active ? "var(--text-inverse)" : "var(--text-secondary)",
              fontSize: 14, cursor: "pointer",
            }}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <span style={{ fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
            </div>
          ))}
        </nav>
        <div style={{ padding: "16px", borderTop: "1px solid var(--border-muted)" }}>
          <div style={{ fontSize: 13, color: "var(--text-muted)", padding: "8px 0" }}>Help & Support</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", padding: "8px 0" }}>Platform Settings</div>
        </div>
      </aside>
      <main style={{ flex: 1, padding: "24px 32px 40px" }}>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8, display: "flex", gap: 6 }}>
          <span style={{ color: "var(--link-default)", cursor: "pointer" }}>Home</span>
          <span>/</span>
          <span>Risk Overview</span>
        </div>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 28, fontWeight: 300, color: "var(--text-primary)", margin: 0 }}>Risk Overview</h1>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", marginTop: 4 }}>Track and manage enterprise risk items across your organization</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Open risks", value: "12", status: "error", sub: "3 critical" },
            { label: "In remediation", value: "8", status: "warning", sub: "2 overdue" },
            { label: "Resolved (30d)", value: "15", status: "success", sub: "+23% vs prior" },
            { label: "Avg resolution", value: "6.2d", status: "info", sub: "Down from 8.1d" },
          ].map((m) => (
            <div key={m.label} style={{
              background: "var(--bg-surface)", border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-lg)", padding: 20, boxShadow: "var(--shadow-low)",
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 8 }}>{m.label}</div>
              <div style={{ fontSize: 28, fontWeight: 300, color: "var(--text-primary)", marginBottom: 8 }}>{m.value}</div>
              <StatusBadge status={m.status}>{m.sub}</StatusBadge>
            </div>
          ))}
        </div>
        <div style={{
          background: "var(--bg-surface)", border: "1px solid var(--border-default)",
          borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-low)",
        }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border-default)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>Active risk items</h2>
            <button style={{
              padding: "6px 16px", fontSize: 13, fontWeight: 600,
              background: "var(--action-default)", color: "var(--text-inverse)",
              border: "none", borderRadius: "var(--radius-md)", cursor: "pointer",
            }}>Add risk</button>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--ui-divider)" }}>
                {["ID", "Risk item", "Severity", "Owner", "Due", "Progress"].map((h) => (
                  <th key={h} style={{
                    padding: "10px 20px", textAlign: "left" as const, fontSize: 11, fontWeight: 600,
                    color: "var(--text-muted)", textTransform: "uppercase" as const, letterSpacing: 1,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {risks.map((r) => (
                <tr key={r.id} style={{ borderBottom: "1px solid var(--ui-divider)" }}>
                  <td style={{ padding: "12px 20px", color: "var(--text-muted)", fontFamily: "monospace", fontSize: 12 }}>{r.id}</td>
                  <td style={{ padding: "12px 20px", color: "var(--text-primary)" }}>{r.title}</td>
                  <td style={{ padding: "12px 20px" }}>
                    <StatusBadge status={r.severity}>
                      {r.severity === "error" ? "Critical" : r.severity === "warning" ? "Medium" : r.severity === "success" ? "Resolved" : "Low"}
                    </StatusBadge>
                  </td>
                  <td style={{ padding: "12px 20px", color: "var(--text-secondary)" }}>{r.owner}</td>
                  <td style={{ padding: "12px 20px", color: "var(--text-muted)" }}>{r.due}</td>
                  <td style={{ padding: "12px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ flex: 1, height: 4, background: "var(--bg-elevated)", borderRadius: "var(--radius-full)" }}>
                        <div style={{ width: r.progress + "%", height: "100%", background: r.progress === 100 ? "var(--status-success)" : "var(--action-default)", borderRadius: "var(--radius-full)" }} />
                      </div>
                      <span style={{ fontSize: 12, color: "var(--text-muted)", width: 32 }}>{r.progress}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
