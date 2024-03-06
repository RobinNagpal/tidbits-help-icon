// // function sum(num1: number, num2: number): number {
// //   return num1 + num2;
// // }

// import React, { useState } from 'react';
// import FullPageModal from './components/FullPageModal/FullPageModal';
// import HelpButton from './components/HelpButton/HelpButton';
// import FullPageLoader from './components/FullPageLoader/FullPageLoader';

// // module.exports = sum;

// // export * from './components';

// const HelpButtonComponent = () => {
//   const [getHelp, setGetHelp] = useState<boolean>(false);
//   const [iframeLoading, setIframeLoading] = useState<boolean>(true);
//   return (
//     <>
//       <HelpButton showModal={setGetHelp} />
//       {getHelp && (
//         <FullPageModal open={getHelp} onClose={() => setGetHelp(false)} title={'Get Help'}>
//           <div className="h-[85vh] flex justiy-center">
//             {iframeLoading && <FullPageLoader />}
//             <iframe
//               className="w-full h-full"
//               src="https://arbitrum.education/tidbit-collections"
//               onLoad={() => setIframeLoading(false)}
//             />
//           </div>
//         </FullPageModal>
//       )}
//     </>
//   );
// };

// export default HelpButtonComponent;

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
