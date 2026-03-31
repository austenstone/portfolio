import React, { useState } from 'react';

interface Feature {
  name: string;
  location: string;
  trigger: string;
  scope: string;
  surfaces: string[];
  description: string;
}

const FEATURES: Feature[] = [
  { name: 'Custom Instructions', location: '.github/copilot-instructions.md', trigger: 'Always-on (auto-attached)', scope: 'Repo / Path / Personal / Org', surfaces: ['VS Code', 'Visual Studio', 'JetBrains', 'GitHub.com', 'CLI'], description: 'Persistent context that shapes every Copilot response. Define coding standards, conventions, and rules.' },
  { name: 'Prompt Files', location: '.github/prompts/*.prompt.md', trigger: 'User-invoked via chat', scope: 'Repo', surfaces: ['VS Code', 'Visual Studio', 'JetBrains'], description: 'Reusable task templates with variables. Like saved prompts that anyone on the team can use.' },
  { name: 'Custom Agents', location: '.github/agents/*.md', trigger: '@agent-name in chat', scope: 'Repo / Org', surfaces: ['VS Code', 'GitHub.com'], description: 'Specialist personas with their own tools and instructions. Delegate tasks to focused experts.' },
  { name: 'Agent Skills', location: '.github/skills/*/SKILL.md', trigger: 'Auto-matched by description', scope: 'Repo / Personal', surfaces: ['VS Code', 'CLI'], description: 'Multi-step workflow definitions with bundled scripts. Auto-loaded when task matches.' },
  { name: 'Hooks', location: '.github/hooks/*.json', trigger: 'Lifecycle events', scope: 'Repo', surfaces: ['VS Code'], description: 'Deterministic automation at tool lifecycle points. Auto-format, lint, scan — runs every time.' },
  { name: 'MCP Servers', location: '.vscode/mcp.json', trigger: 'Available as tools', scope: 'Repo / User', surfaces: ['VS Code', 'GitHub.com', 'CLI'], description: 'Connect external tools and data sources. Database access, APIs, browser automation.' },
  { name: 'Agent Plugins', location: 'GitHub App / Extension', trigger: 'Available as tools', scope: 'Org / Enterprise', surfaces: ['VS Code', 'GitHub.com'], description: 'GitHub App-based extensions for org-wide tool distribution. Enterprise-grade.' },
];

const ALL_SURFACES = ['VS Code', 'Visual Studio', 'JetBrains', 'GitHub.com', 'CLI'];

export default function FeatureComparison() {
  const [filter, setFilter] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [surfaceFilter, setSurfaceFilter] = useState<string | null>(null);

  const filtered = FEATURES.filter((f) => {
    if (filter && !f.name.toLowerCase().includes(filter.toLowerCase())) return false;
    if (surfaceFilter && !f.surfaces.includes(surfaceFilter)) return false;
    return true;
  });

  return (
    <div className="feature-comparison">
      <div className="feature-filters">
        <input placeholder="Filter features..." value={filter} onChange={(e) => setFilter(e.target.value)} />
        <select value={surfaceFilter ?? ''} onChange={(e) => setSurfaceFilter(e.target.value || null)}>
          <option value="">All surfaces</option>
          {ALL_SURFACES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <table className="feature-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Location</th>
            <th>Trigger</th>
            <th>Scope</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((f) => (
            <React.Fragment key={f.name}>
              <tr className={`feature-row ${expanded === f.name ? 'expanded' : ''}`} onClick={() => setExpanded(expanded === f.name ? null : f.name)}>
                <td><strong>{f.name}</strong></td>
                <td><code>{f.location}</code></td>
                <td>{f.trigger}</td>
                <td>{f.scope}</td>
              </tr>
              {expanded === f.name && (
                <tr className="feature-detail">
                  <td colSpan={4}>
                    <p>{f.description}</p>
                    <p><strong>Supported in:</strong> {f.surfaces.join(', ')}</p>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
