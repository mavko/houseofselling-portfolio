import { blobMedia, type BlobMediaKey } from '@/generated/blob-media'

export function mediaUrl(key: BlobMediaKey): string {
  return blobMedia[key]
}
