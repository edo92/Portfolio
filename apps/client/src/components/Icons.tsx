import { SVGAttributes } from 'react';

export type IconProps = SVGAttributes<SVGElement>;

export const Icons = {
   LightBulb: (props?: IconProps) => (
      <svg viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
         <g id="Group">
            <path
               id="Vector"
               d="M12 18.5C10.4087 18.5 8.88258 17.8679 7.75736 16.7426C6.63214 15.6174 6 14.0913 6 12.5C6 10.9087 6.63214 9.38258 7.75736 8.25736C8.88258 7.13214 10.4087 6.5 12 6.5C13.5913 6.5 15.1174 7.13214 16.2426 8.25736C17.3679 9.38258 18 10.9087 18 12.5C18 14.0913 17.3679 15.6174 16.2426 16.7426C15.1174 17.8679 13.5913 18.5 12 18.5ZM11 1.5H13V4.5H11V1.5ZM11 20.5H13V23.5H11V20.5ZM3.515 5.429L4.929 4.015L7.05 6.136L5.636 7.55L3.515 5.429ZM16.95 18.864L18.364 17.45L20.485 19.571L19.071 20.985L16.95 18.864ZM19.071 4.014L20.485 5.429L18.364 7.55L16.95 6.136L19.071 4.015V4.014ZM5.636 17.45L7.05 18.864L4.929 20.985L3.515 19.571L5.636 17.45ZM23 11.5V13.5H20V11.5H23ZM4 11.5V13.5H1V11.5H4Z"
               fill="currentColor"
            />
         </g>
      </svg>
   ),

   LinkedIn: (props?: IconProps) => (
      <svg viewBox="0 0 21 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
         <g id="Vector">
            <path
               id="Vector_2"
               d="M4.92938 2.00089C4.92912 2.53129 4.7166 3.03987 4.33858 3.41473C3.96056 3.7896 3.44801 4.00004 2.91369 3.99978C2.37936 3.99951 1.86702 3.78856 1.48938 3.41332C1.11174 3.03808 0.899735 2.52929 0.900002 1.99889C0.900269 1.46849 1.11279 0.959911 1.4908 0.585047C1.86882 0.210183 2.38137 -0.000264951 2.9157 2.50348e-07C3.45003 0.000265452 3.96237 0.211222 4.34001 0.586461C4.71765 0.961701 4.92965 1.47049 4.92938 2.00089ZM4.98982 5.4807H0.960442V18H4.98982V5.4807ZM11.3562 5.4807H7.34701V18H11.316V11.4304C11.316 7.77057 16.121 7.43059 16.121 11.4304V18H20.1V10.0704C20.1 3.90078 12.9881 4.13077 11.316 7.1606L11.3562 5.4807Z"
               fill="#C6C6C6"
            />
         </g>
      </svg>
   ),

   GitHub: (props?: IconProps) => (
      <svg viewBox="0 0 21 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
         <g id="Github">
            <path
               id="Vector"
               d="M10.5 0C4.975 0 0.500001 4.5883 0.500001 10.2532C0.498867 12.4056 1.15881 14.5038 2.38622 16.2499C3.61362 17.9961 5.34615 19.3017 7.338 19.9814C7.838 20.0706 8.025 19.763 8.025 19.4934C8.025 19.2504 8.012 18.4434 8.012 17.5842C5.5 18.0589 4.85 16.9567 4.65 16.3795C4.537 16.0842 4.05 15.1747 3.625 14.9307C3.275 14.739 2.775 14.2642 3.612 14.2519C4.4 14.2386 4.962 14.9953 5.15 15.3029C6.05 16.8532 7.488 16.4174 8.062 16.1488C8.15 15.4823 8.412 15.0343 8.7 14.7779C6.475 14.5216 4.15 13.6367 4.15 9.7149C4.15 8.59935 4.537 7.67759 5.175 6.95884C5.075 6.70251 4.725 5.65156 5.275 4.24174C5.275 4.24174 6.112 3.97311 8.025 5.29372C8.83906 5.06206 9.68017 4.94546 10.525 4.94716C11.375 4.94716 12.225 5.062 13.025 5.2927C14.937 3.95978 15.775 4.24277 15.775 4.24277C16.325 5.65258 15.975 6.70353 15.875 6.95986C16.512 7.67759 16.9 8.58705 16.9 9.7149C16.9 13.6501 14.563 14.5216 12.338 14.7779C12.7 15.0978 13.013 15.713 13.013 16.6748C13.013 18.0456 13 19.1478 13 19.4944C13 19.763 13.188 20.0829 13.688 19.9804C15.673 19.2932 17.3979 17.9851 18.6199 16.2402C19.8419 14.4952 20.4994 12.4013 20.5 10.2532C20.5 4.5883 16.025 0 10.5 0Z"
               fill="#C6C6C6"
            />
         </g>
      </svg>
   ),
};
