/** @jsxImportSource @emotion/react */

import COLOR_PALETTE from "../colorPalette";
import { closeButton } from "./CloseButton.styles";

interface CloseButtonProps {
  handleClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ handleClick }) => {
  return (
    <button css={closeButton} onClick={handleClick}>
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.8167 1.41L13.4067 0L7.81665 5.59L2.22665 0L0.81665 1.41L6.40665 7L0.81665 12.59L2.22665 14L7.81665 8.41L13.4067 14L14.8167 12.59L9.22665 7L14.8167 1.41Z"
          fill={COLOR_PALETTE.color}
        />
      </svg>
    </button>
  );
};

export default CloseButton;
