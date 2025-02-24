import type { SVGAttributes } from 'react';
import { Loader2 } from 'lucide-react';

export type IconProps = SVGAttributes<SVGElement>;

export const Icons = {
  Loader: Loader2,

  LightBulb: (props?: IconProps) => (
    <svg
      viewBox="0 0 24 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Group">
        <path
          id="Vector"
          d="M12 18.5C10.4087 18.5 8.88258 17.8679 7.75736 16.7426C6.63214 15.6174 6 14.0913 6 12.5C6 10.9087 6.63214 9.38258 7.75736 8.25736C8.88258 7.13214 10.4087 6.5 12 6.5C13.5913 6.5 15.1174 7.13214 16.2426 8.25736C17.3679 9.38258 18 10.9087 18 12.5C18 14.0913 17.3679 15.6174 16.2426 16.7426C15.1174 17.8679 13.5913 18.5 12 18.5ZM11 1.5H13V4.5H11V1.5ZM11 20.5H13V23.5H11V20.5ZM3.515 5.429L4.929 4.015L7.05 6.136L5.636 7.55L3.515 5.429ZM16.95 18.864L18.364 17.45L20.485 19.571L19.071 20.985L16.95 18.864ZM19.071 4.014L20.485 5.429L18.364 7.55L16.95 6.136L19.071 4.015V4.014ZM5.636 17.45L7.05 18.864L4.929 20.985L3.515 19.571L5.636 17.45ZM23 11.5V13.5H20V11.5H23ZM4 11.5V13.5H1V11.5H4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
};
