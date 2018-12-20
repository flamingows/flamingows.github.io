var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dxoittcx2/upload';
var CLOUDINARY_UPLOAD_PRESET = 'wko4ld72';

var fileUpload = document.getElementById('input');

input.addEventListener("change", function(event){
  var file = event.target.files[0];
  var formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    data: formData;
  }).then(function(res) {
    console.log(res);
  }).catch(function(err) {
    console.error(err);
  });
});
