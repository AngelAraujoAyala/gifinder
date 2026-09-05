import { RequestStatus } from "../models/gif.interface";

export function renderStatus(
  statusElement: HTMLElement,
  status: RequestStatus,
  count: number = 0,
): void {
  switch (status) {
    case RequestStatus.Initial:
      statusElement.textContent = "Explora la colección de GIFs.";
      break;
    case RequestStatus.Loading:
      statusElement.textContent = "Cargando resultados...";
      break;
    case RequestStatus.Success: {
      const label = count === 1 ? "resultado" : "resultados";
      statusElement.textContent = `${count} ${label} encontrados.`;
      break;
    }
    case RequestStatus.Empty:
      statusElement.textContent = "0 resultados.";
      break;
    case RequestStatus.Error:
      statusElement.textContent = "Ocurrió un error al procesar la solicitud.";
      break;
  }
}
