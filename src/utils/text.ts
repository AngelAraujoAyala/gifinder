export default function normalizeText(value: string): string {
  return value.trim().toLocaleLowerCase('es-MX');
}