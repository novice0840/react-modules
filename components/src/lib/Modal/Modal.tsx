/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { buttonsStyle, modalContentStyle, modalStyle } from "./Modal.style";
import useModalHook from "../useModalHook";

import ModalHeader from "../ModalHeader/ModalHeader";
import CloseButton from "../CloseButton/CloseButton";
import Title from "../Title/Title";
import LongButton from "../LongButton/LongButton";

interface ModalProps {
  position?: "center" | "bottom";
  title?: string;
  hasConfirmButton?: boolean;
  closeButtonPosition?: "bottom" | "top";
  onConfirm?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  position = "center",
  title,
  hasConfirmButton = true,
  closeButtonPosition = "top",
  onConfirm,
  onClose,
  children,
}) => {
  const { ref, action } = useModalHook();

  useEffect(() => {
    action.handleOpen();
  }, [action]);

  useEffect(() => {
    const clickBackdrop = (e: MouseEvent) => {
      if (e.target === ref.current) {
        action.handleClose();
      }
    };
    ref.current?.addEventListener("click", clickBackdrop);

    return () => {
      ref.current?.removeEventListener("click", clickBackdrop);
    };
  }, [action, ref]);

  return (
    <dialog ref={ref} css={modalStyle(position)}>
      <div css={modalContentStyle}>
        <ModalHeader>
          {title && <Title>{title}</Title>}
          {closeButtonPosition === "top" && (
            <CloseButton
              handleClick={() => {
                action.handleClose();
                if (onClose) onClose();
              }}
            />
          )}
        </ModalHeader>
        <div>{children}</div>
        <div css={buttonsStyle}>
          {hasConfirmButton && (
            <LongButton type="confirm" handleClick={onConfirm}>
              동의하고 저장하기
            </LongButton>
          )}
          {closeButtonPosition === "bottom" && (
            <LongButton
              type="cancel"
              handleClick={() => {
                action.handleClose();
                if (onClose) onClose();
              }}
            >
              닫기
            </LongButton>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
