// Cloudinary Upload Utility for Prajwala Admin Panel

export interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  width?: number;
  height?: number;
  format?: string;
  bytes?: number;
}

export const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'likt5gb5';
export const CLOUDINARY_UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'ml_default';

/**
 * Upload an image file to Cloudinary.
 * @param file The file or Blob to upload
 * @param folder Target folder inside Cloudinary (e.g. 'prajwala/hero')
 */
export async function uploadToCloudinary(
  file: File | Blob,
  folder: string = 'prajwala/general'
): Promise<CloudinaryUploadResult> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  formData.append('folder', folder);

  const endpoint = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      const errMsg = data.error?.message || response.statusText || 'Upload failed';
      if (errMsg.includes('whitelisted for unsigned uploads')) {
        throw new Error(
          `Cloudinary preset '${CLOUDINARY_UPLOAD_PRESET}' is currently signed. Please open Cloudinary Dashboard → Settings → Upload → Upload Presets → edit '${CLOUDINARY_UPLOAD_PRESET}' → change 'Signing Mode' to 'Unsigned', then save.`
        );
      }
      throw new Error(`Cloudinary upload failed: ${errMsg}`);
    }

    return {
      secure_url: data.secure_url,
      public_id: data.public_id,
      width: data.width,
      height: data.height,
      format: data.format,
      bytes: data.bytes,
    };
  } catch (error: any) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
}

/**
 * Generate an optimized Cloudinary thumbnail or responsive image URL
 */
export function getOptimizedImageUrl(
  urlOrPublicId: string,
  options?: { width?: number; height?: number; crop?: string; quality?: string }
): string {
  if (!urlOrPublicId) return '';
  if (urlOrPublicId.startsWith('/') || urlOrPublicId.startsWith('data:')) {
    return urlOrPublicId;
  }

  // If already full cloudinary URL
  if (urlOrPublicId.includes('cloudinary.com')) {
    if (!options) return urlOrPublicId;
    const parts = urlOrPublicId.split('/upload/');
    if (parts.length === 2) {
      const transform = [
        options.width ? `w_${options.width}` : '',
        options.height ? `h_${options.height}` : '',
        options.crop ? `c_${options.crop}` : 'c_fill',
        options.quality ? `q_${options.quality}` : 'q_auto',
        'f_auto',
      ]
        .filter(Boolean)
        .join(',');
      return `${parts[0]}/upload/${transform}/${parts[1]}`;
    }
    return urlOrPublicId;
  }

  // If only public_id was passed
  const transform = [
    options?.width ? `w_${options.width}` : '',
    options?.height ? `h_${options.height}` : '',
    options?.crop ? `c_${options.crop}` : 'c_fill',
    'q_auto',
    'f_auto',
  ]
    .filter(Boolean)
    .join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transform}/${urlOrPublicId}`;
}
