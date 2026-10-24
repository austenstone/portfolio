import type {Root, RootContent} from 'mdast';
import type {MdxJsxFlowElement} from 'mdast-util-mdx-jsx';

const isSectionBreak = (node: RootContent) =>
  node.type === 'heading' && node.depth <= 2;

const hasDiagram = (nodes: RootContent[]) =>
  nodes.some((node) => node.type === 'code' && node.lang === 'mermaid');

// Wraps any h2 section that contains a diagram in a tinted <Band>, so posts get the treatment without markup.
export default function remarkDiagramBands() {
  return (tree: Root) => {
    const children: RootContent[] = [];
    let i = 0;

    while (i < tree.children.length) {
      const node = tree.children[i]!;
      if (node.type !== 'heading' || node.depth !== 2) {
        children.push(node);
        i += 1;
        continue;
      }

      let end = i + 1;
      while (end < tree.children.length && !isSectionBreak(tree.children[end]!)) end += 1;
      const section = tree.children.slice(i, end);

      if (hasDiagram(section)) {
        const band: MdxJsxFlowElement = {
          type: 'mdxJsxFlowElement',
          name: 'Band',
          attributes: [{type: 'mdxJsxAttribute', name: 'tone', value: 'tint'}],
          children: section as MdxJsxFlowElement['children'],
        };
        children.push(band);
      } else {
        children.push(...section);
      }
      i = end;
    }

    tree.children = children;
  };
}
