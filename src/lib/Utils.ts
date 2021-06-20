import { ensureDir } from 'https://deno.land/std@0.99.0/fs/ensure_dir.ts'
import { format } from 'https://deno.land/std@0.99.0/datetime/mod.ts'
import { join } from 'https://deno.land/std@0.99.0/node/path.ts'

export const getNewFilename = async (
  filename: string,
  source: 'twitter' | 'osrs'
) => {
  // Ensure the data directory exists by creating it if it doesn't yet exist.
  await ensureDir(join('data', source))

  // Format the current date-time into a filename safe string.
  const fileDate = format(new Date(), 'yyyy-MM-dd_HH.mm.ss')

  // Create the new filename.
  const newFilename = `${filename.substring(
    0,
    filename.indexOf('.json')
  )}-${fileDate}.json`

  return newFilename
}

/**
 * Reads the given JSON file and returns it as a parsed object.
 *
 * @param filename The name of the file to read.
 * @returns The content of the file as a JSON object.
 */
export const readJSON = async (filename: string) => {
  // Read the file as plaintext.
  const content = await Deno.readTextFile(filename)

  // Parse it as a JSON object and return the resulting object.
  return JSON.parse(content)
}
