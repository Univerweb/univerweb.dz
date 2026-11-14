/**
 * Lit un token de durée de `base/_themes.scss` (ex. `--duration-base`) et le renvoie en millisecondes.
 */
export function cssDuration(token: string): number {
  const value = getComputedStyle(document.documentElement).getPropertyValue(token).trim()

  return value.endsWith('ms') ? Number.parseFloat(value) : Number.parseFloat(value) * 1000
}
