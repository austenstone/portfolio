import React, { useState, useMemo } from 'react';

const TABS = ['Instructions', 'Prompt File', 'Agent', 'Skill', 'Hook', 'MCP'] as const;
type TabType = typeof TABS[number];

interface ConfigBuilderProps {
  type?: string;
}

function InstructionsForm() {
  const [scope, setScope] = useState<'repo' | 'path'>('repo');
  const [content, setContent] = useState('Use TypeScript with strict mode.\nPrefer functional components.');
  const [applyTo, setApplyTo] = useState('**/*.ts');
  const filename = scope === 'repo'
    ? '.github/copilot-instructions.md'
    : `.github/instructions/custom.instructions.md`;
  const preview = scope === 'repo'
    ? content
    : `---\napplyTo: "${applyTo}"\n---\n\n${content}`;
  return { fields: (
    <>
      <label>Scope
        <select value={scope} onChange={(e) => setScope(e.target.value as any)}>
          <option value="repo">Repository-wide</option>
          <option value="path">Path-specific</option>
        </select>
      </label>
      {scope === 'path' && (
        <label>Apply to (glob)
          <input value={applyTo} onChange={(e) => setApplyTo(e.target.value)} />
        </label>
      )}
      <label>Instructions
        <textarea rows={5} value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
    </>
  ), preview, filename };
}

function PromptForm() {
  const [desc, setDesc] = useState('Generate a React component');
  const [mode, setMode] = useState('agent');
  const [tools, setTools] = useState('editFiles, runTerminalCommand');
  const [body, setBody] = useState('Create a new React component named ${{component_name}} in src/components/.');
  const preview = `---\ndescription: "${desc}"\nmode: ${mode}\ntools:\n${tools.split(',').map(t => `  - ${t.trim()}`).join('\n')}\n---\n\n${body}`;
  return { fields: (
    <>
      <label>Description <input value={desc} onChange={(e) => setDesc(e.target.value)} /></label>
      <label>Mode
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="agent">agent</option>
          <option value="ask">ask</option>
          <option value="edit">edit</option>
        </select>
      </label>
      <label>Tools (comma-separated) <input value={tools} onChange={(e) => setTools(e.target.value)} /></label>
      <label>Prompt body <textarea rows={4} value={body} onChange={(e) => setBody(e.target.value)} /></label>
    </>
  ), preview, filename: '.github/prompts/my-prompt.prompt.md' };
}

function AgentForm() {
  const [name, setName] = useState('security-reviewer');
  const [desc, setDesc] = useState('Reviews code for security vulnerabilities');
  const [tools, setTools] = useState('editFiles, runTerminalCommand');
  const [body, setBody] = useState('You are a security expert. Review code for OWASP Top 10 vulnerabilities.');
  const preview = `---\ndescription: "${desc}"\ntools:\n${tools.split(',').map(t => `  - ${t.trim()}`).join('\n')}\n---\n\n${body}`;
  return { fields: (
    <>
      <label>Agent name <input value={name} onChange={(e) => setName(e.target.value)} /></label>
      <label>Description <input value={desc} onChange={(e) => setDesc(e.target.value)} /></label>
      <label>Tools (comma-separated) <input value={tools} onChange={(e) => setTools(e.target.value)} /></label>
      <label>System prompt <textarea rows={4} value={body} onChange={(e) => setBody(e.target.value)} /></label>
    </>
  ), preview, filename: `.github/agents/${name}.md` };
}

function SkillForm() {
  const [name, setName] = useState('deploy');
  const [desc, setDesc] = useState('Deploy the application to production');
  const [body, setBody] = useState('## Steps\n1. Run tests\n2. Build the project\n3. Deploy to production');
  const preview = `---\ndescription: "${desc}"\n---\n\n${body}`;
  return { fields: (
    <>
      <label>Skill name <input value={name} onChange={(e) => setName(e.target.value)} /></label>
      <label>Description <input value={desc} onChange={(e) => setDesc(e.target.value)} /></label>
      <label>Instructions <textarea rows={4} value={body} onChange={(e) => setBody(e.target.value)} /></label>
    </>
  ), preview, filename: `.github/skills/${name}/SKILL.md` };
}

function HookForm() {
  const [event, setEvent] = useState('PostToolUse');
  const [tool, setTool] = useState('editFiles');
  const [cmd, setCmd] = useState('npx prettier --write $FILE');
  const preview = JSON.stringify([{
    event,
    steps: [{ tool, args: {}, run: cmd }]
  }], null, 2);
  return { fields: (
    <>
      <label>Lifecycle event
        <select value={event} onChange={(e) => setEvent(e.target.value)}>
          {['PreToolUse', 'PostToolUse', 'PreCommit', 'PostCommit'].map(e => <option key={e} value={e}>{e}</option>)}
        </select>
      </label>
      <label>Tool name <input value={tool} onChange={(e) => setTool(e.target.value)} /></label>
      <label>Command <input value={cmd} onChange={(e) => setCmd(e.target.value)} /></label>
    </>
  ), preview, filename: '.github/hooks/format.json' };
}

function McpForm() {
  const [name, setName] = useState('github');
  const [transport, setTransport] = useState<'stdio' | 'http'>('stdio');
  const [cmd, setCmd] = useState('npx -y @modelcontextprotocol/server-github');
  const [url, setUrl] = useState('http://localhost:3000/mcp');
  const preview = JSON.stringify({
    mcpServers: {
      [name]: transport === 'stdio'
        ? { command: cmd.split(' ')[0], args: cmd.split(' ').slice(1) }
        : { url }
    }
  }, null, 2);
  return { fields: (
    <>
      <label>Server name <input value={name} onChange={(e) => setName(e.target.value)} /></label>
      <label>Transport
        <select value={transport} onChange={(e) => setTransport(e.target.value as any)}>
          <option value="stdio">stdio</option>
          <option value="http">HTTP (streamable)</option>
        </select>
      </label>
      {transport === 'stdio'
        ? <label>Command <input value={cmd} onChange={(e) => setCmd(e.target.value)} /></label>
        : <label>URL <input value={url} onChange={(e) => setUrl(e.target.value)} /></label>}
    </>
  ), preview, filename: '.vscode/mcp.json' };
}

const FORM_MAP: Record<TabType, () => { fields: JSX.Element; preview: string; filename: string }> = {
  'Instructions': InstructionsForm,
  'Prompt File': PromptForm,
  'Agent': AgentForm,
  'Skill': SkillForm,
  'Hook': HookForm,
  'MCP': McpForm,
};

export default function ConfigBuilder({ type }: ConfigBuilderProps) {
  const initialTab = TABS.find(t => t.toLowerCase().includes(type?.toLowerCase() ?? '')) ?? TABS[0];
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [copied, setCopied] = useState(false);

  const { fields, preview, filename } = FORM_MAP[activeTab]();

  function handleCopy() {
    navigator.clipboard.writeText(preview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="config-builder">
      <div className="config-tabs">
        {TABS.map((tab) => (
          <button key={tab} className={`config-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="config-body">
        <div className="config-form">{fields}</div>
        <div className="config-preview">
          <div className="config-preview-header">
            <code>{filename}</code>
            <button className="copy-btn" onClick={handleCopy}>{copied ? '✓ Copied' : 'Copy'}</button>
          </div>
          <pre><code>{preview}</code></pre>
        </div>
      </div>
    </div>
  );
}
