"use client";
import Modal from "@/components/Modal";
import * as React from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        title="TEST MODAL"
        description="TEST"
        isOpen={true}
        onChange={() => {}}
      >
        TEST MOSDAL
      </Modal>
    </>
  );
};

export default ModalProvider;
