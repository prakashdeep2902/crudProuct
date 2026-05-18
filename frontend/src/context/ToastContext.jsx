import React, { createContext, useContext, useState } from "react";
import Toast from "../components/common/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    message: "",
    type: "",
    show: false,
  });

  const showMessage = (message, type = "success") => {
    setToast({ message, type, show: true });

    setTimeout(() => {
      setToast({
        message: "",
        type: "",
        show: false,
      });
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showMessage }}>
      {children}
      {toast.show && <Toast message={toast.message} type={toast.type} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
