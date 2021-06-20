import { getNewFilename, readJSON } from '../lib/Utils.ts'

const main = async () => {
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
