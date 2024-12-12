export function generateFileBlobUrl(file: File): string {
    const blob = new Blob([file], { type: file.type });
    const url = URL.createObjectURL(blob);
    return url;
  }