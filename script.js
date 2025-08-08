document.getElementById('certUpload').addEventListener('change', function(event) {
  const files = event.target.files;
  const gallery = document.getElementById('certGallery');
  gallery.innerHTML = "";

  for (let file of files) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      gallery.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});