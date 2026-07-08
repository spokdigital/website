import imageCompression from "browser-image-compression";

export interface CompressImageOptions {
  maxSizeMB?: number;
  maxWidthOrHeight?: number;
  useWebWorker?: boolean;
  onProgress?: (progress: number) => void;
}

export interface CompressImageResult {
  file: File;
  originalSize: number;
  compressedSize: number;
  savedPercent: number;
}
export async function compressImage(
  file: File,
  options: CompressImageOptions = {}
): Promise<CompressImageResult> {
  const {
    maxSizeMB = 1,
    maxWidthOrHeight = 1920,
    useWebWorker = true,
    onProgress,
  } = options;

  const compressed = await imageCompression(file, {
    maxSizeMB,
    maxWidthOrHeight,
    useWebWorker,
    onProgress,
  });

  const resultFile = new File([compressed], file.name, {
    type: compressed.type,
  });

  const originalSize = file.size;
  const compressedSize = resultFile.size;
  const savedPercent = Math.round((1 - compressedSize / originalSize) * 100);

  return { file: resultFile, originalSize, compressedSize, savedPercent };
}