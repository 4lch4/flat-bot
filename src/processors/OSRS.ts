// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
// You can test this script locally on your computer by runinng `deno run -A --unstable postprocess.ts data.json`
import { deferred } from 'https://deno.land/std/async/mod.ts'
import { getNewFilename, readJSON } from '../lib/Utils.ts'

const main = async (): deferred<string> => {
  try {
    const content = await readJSON(Deno.args[0])
    const filename = getNewFilename(Deno.args[0], 'osrs')

    return Deno.writeTextFile(filename, JSON.stringify(content, undefined, 2))
  } catch (err) {
    return err
  }
}

main()
  .then(res => {
    console.log(res)
    console.log('Execution complete!')
  })
  .catch(err => console.error(err))
