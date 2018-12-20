//var feed = document.getElementById("image-feed");
//var images = document.getElementsByTagName("img");
const selectedFile = document.getElementById('input').files[0];

input.addEventListener("change", handleFiles, false);
//document.getElementById('elin2').innerHTML = 5*6;
function handleFiles(files) {
  document.getElementById('elin2').innerHTML = 'This <strong>Works!</strong>';
  const fileList = this.files; /* now you can work with the file list */
  const numFiles = fileList.length;
  console.log(fileList[0].name);
  for (let i = 0, numFiles = files.length; i < numFiles; i++) {
  const file = files[i];
}
    const file = fileList[0];
    console.log(file);
    saveAs(file, fileList[0].name);
    document.getElementById('test').src = fileList[0].name;//forandrer image source til dette
}



//old stuff
/*const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function (e) {
  console.log(input.files)
  const reader = new FileReader ()
  reader.onload = function () {
    console.log(reader.result)

    const fs = require('fs');
    fs.writeFile(reader.result, photos, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Saved!');
});
  }
  reader.readAsText(input.files[0])
}, false)
*/
