import { mergeFile } from '../src/index'

let fileInput = document.getElementById('fileinput')
let preview = document.getElementById('preview')

fileInput.onchange = async () => {
  if (!fileInput.files) return
  let base64 = await mergeFile(fileInput.files)
  preview.src = base64
  console.log(base64)
}