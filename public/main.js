const fileInput = document.getElementById("fileInput");
const uploadStatus = document.getElementById("uploadStatus");

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  if (file) {
    uploadImage(file);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const tosCheckbox = document.getElementById("tosCheckbox");
  const fileInput = document.getElementById("fileInput");

  tosCheckbox.addEventListener("change", function () {
    if (this.checked) {
      // Reveal the file input when TOS is agreed to
      fileInput.hidden = false;
    } else {
      fileInput.hidden = true;
    }
  });
});

// Function to handle file drop
function handleDrop(event) {
  event.preventDefault(); // Prevent the default browser behavior

  const tosCheckbox = document.getElementById("tosCheckbox");
  if (tosCheckbox.checked) {
    const dt = event.dataTransfer;
    const files = dt.files;

    // Trigger input change handler to process the file
    fileInput.files = files;
    fileInput.dispatchEvent(new Event("change"));
  } else {
    alert("You must agree to the terms of service before uploading.");
  }
}

function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  const tosAgreed = document.getElementById("tosCheckbox").checked;
  formData.append("tosAgreed", tosAgreed);

  fetch("/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      const src = data.url;
      uploadStatus.innerHTML = `
		<div class="alert alert-success">Upload successful!</div>
		<img src="${src}" class="img-fluid mb-3" alt="Uploaded Image">
		<div class="input-group">
		  <input type="text" class="form-control" id="imageUrl" value="${src}">
		  <div class="input-group-append">
			<button class="btn btn-outline-secondary" type="button" onclick="copyImageUrl()">Copy URL</button>
		  </div>
		</div>
	  `;
    })
    .catch((error) => {
      uploadStatus.innerHTML =
        '<div class="alert alert-danger">Upload failed. Please try again.</div>';
    });
}

function copyImageUrl() {
  const imageUrl = document.getElementById("imageUrl");
  imageUrl.select();
  document.execCommand("copy");
  alert("URL Copied to Clipboard!");
}
