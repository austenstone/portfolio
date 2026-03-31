import React, { useState } from 'react';

interface FileEntry {
  name: string;
  type: 'file' | 'dir';
  children?: FileEntry[];
}

interface FileTreeProps {
  files: FileEntry[];
  highlight?: string[];
}

function getIcon(name: string, type: string): string {
  if (type === 'dir') return '📁';
  if (name.endsWith('.md') || name.endsWith('.mdx')) return '📝';
  if (name.endsWith('.json')) return '⚙️';
  if (name.endsWith('.yml') || name.endsWith('.yaml')) return '📋';
  if (name.endsWith('.ts') || name.endsWith('.tsx')) return '🔷';
  if (name.endsWith('.js') || name.endsWith('.jsx')) return '🟨';
  return '📄';
}

function TreeNode({ entry, highlight = [], depth = 0 }: { entry: FileEntry; highlight: string[]; depth?: number }) {
  const [open, setOpen] = useState(true);
  const isHighlighted = highlight.includes(entry.name);

  if (entry.type === 'dir') {
    return (
      <div className="filetree-node">
        <div
          className={`filetree-label dir ${isHighlighted ? 'highlighted' : ''}`}
          style={{ paddingLeft: depth * 20 }}
          onClick={() => setOpen(!open)}
        >
          <span className="filetree-toggle">{open ? '▼' : '▶'}</span>
          <span className="filetree-icon">📁</span>
          <span>{entry.name}</span>
        </div>
        {open && entry.children?.map((child, i) => (
          <TreeNode key={i} entry={child} highlight={highlight} depth={depth + 1} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`filetree-label file ${isHighlighted ? 'highlighted' : ''}`}
      style={{ paddingLeft: depth * 20 }}
    >
      <span className="filetree-toggle" style={{ visibility: 'hidden' }}>▶</span>
      <span className="filetree-icon">{getIcon(entry.name, entry.type)}</span>
      <span>{entry.name}</span>
    </div>
  );
}

export default function FileTree({ files, highlight = [] }: FileTreeProps) {
  return (
    <div className="filetree-container">
      {files.map((entry, i) => (
        <TreeNode key={i} entry={entry} highlight={highlight} />
      ))}
    </div>
  );
}
