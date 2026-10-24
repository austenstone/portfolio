// Splits a label into at most two lines, as evenly as the words allow.
export function wrapLabel(label: string, max = 12): string[] {
  const words = label.split(' ');
  if (label.length <= max || words.length < 2) return [label];
  let best: string[] = [label];
  let bestLen = Infinity;
  for (let i = 1; i < words.length; i++) {
    const lines = [words.slice(0, i).join(' '), words.slice(i).join(' ')];
    const len = Math.max(...lines.map((l) => l.length));
    if (len < bestLen) [best, bestLen] = [lines, len];
  }
  return best;
}
