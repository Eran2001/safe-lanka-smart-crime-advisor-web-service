import React, { Fragment } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import CloseIcon from "@mui/icons-material/Close";

const Drawer = ({
  activeModal,
  onClose,
  children,
  themeClass = "max-w-[95%]",
  title = "Basic Drawer",
  mainXPadding = "px-0",
  mainYPadding = "py-0",
  backdropOpacity = "bg-opacity-75",
}) => {
  const closeModal = () => {
    if (onClose) onClose();
  };

  return (
    <Transition appear show={activeModal} as={Fragment}>
      <Dialog as="div" className="relative z-99999" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop
            className={`fixed inset-0 backdrop-blur-sm bg-black/40 ${backdropOpacity}`}
          />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel
                  className={`pointer-events-auto w-screen bg-white dark:bg-gray-900 shadow-xl ${themeClass}`}
                >
                  <div className="flex justify-between items-center px-4 py-4">
                    <DialogTitle className="text-lg font-semibold text-black">
                      {title}
                    </DialogTitle>

                    <button
                      className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-full cursor-pointer"
                      onClick={closeModal}
                    >
                      <CloseIcon className="w-6! h-6!" />
                    </button>
                  </div>

                  <div
                    className={`h-[calc(100%-64px)] overflow-y-auto ${mainXPadding} ${mainYPadding}`}
                  >
                    {children}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
