const newHeading = document.createElement("h2");
const newContent = document.createTextNode("Hello from JavaScript");

newHeading.appendChild(newContent);

document.body.appendChild(newHeading);

document.body.removeChild(newHeading);

