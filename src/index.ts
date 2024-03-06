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
  button.style.background = 'blue';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';

  // Add click event listener
  button.addEventListener('click', function () {
    console.log('Hello, World!');
  });

  // Append button to body
  document.body.appendChild(button);
}

export default HelpButton;
