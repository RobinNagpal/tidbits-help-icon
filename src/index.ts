function HelpButton() {
  // Create button element
  var button = document.createElement('button');
  button.innerHTML = 'Click Me';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = '1000';

  // Style the button as needed
  button.style.padding = '10px 20px';
  button.style.background = 'linear-gradient(to right, green, blue)';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '20px'; // Adjust the border-radius to match the image
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'; // Add a subtle shadow
  button.style.outline = 'none';
  button.style.transition = 'transform 0.15s ease-in-out'; // Add a transition for a press effect

  // Add an active state style for when the button is clicked
  button.addEventListener('mousedown', function () {
    this.style.transform = 'scale(0.95)';
  });
  button.addEventListener('mouseup', function () {
    this.style.transform = 'scale(1)';
  });
  button.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });

  // Add click event listener
  button.addEventListener('click', function () {
    console.log('Hello, World!');
  });

  // Append button to body
  document.body.appendChild(button);
}

export default HelpButton;
