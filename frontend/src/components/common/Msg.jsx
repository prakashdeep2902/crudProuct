import React, { useEffect, useState } from "react";
import { Info, CheckCircle, XCircle } from "lucide-react";
import { useSelector } from "react-redux";

const Msg = () => {
  const msgInfo = useSelector((state) => state.msg);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (msgInfo?.isMsgShow) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [msgInfo]);

  const getMsgType = () => {
    switch (msgInfo?.type) {
      case "success":
        return {
          icon: <CheckCircle size={18} />,
          bg: "bg-green-500",
        };

      case "fail":
      case "error":
        return {
          icon: <XCircle size={18} />,
          bg: "bg-red-500",
        };

      default:
        return {
          icon: <Info size={18} />,
          bg: "bg-blue-500",
        };
    }
  };

  const currentType = getMsgType();

  return (
    <div
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-9999
      transition-all duration-500 ease-in-out
      ${
        show
          ? "translate-y-0 opacity-100"
          : "-translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-fit max-w-md flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-lg">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${currentType.bg}`}
        >
          {currentType.icon}
        </div>

        <p className="text-gray-800 text-base font-medium">
          {msgInfo?.message}
        </p>
      </div>
    </div>
  );
};

export default Msg;
