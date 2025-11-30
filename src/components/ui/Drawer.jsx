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
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all ${backdropOpacity}`}
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
                  className={`pointer-events-auto w-[280px] bg-white dark:bg-muted-900 
                    rounded-l-3xl shadow-2xl ${themeClass}`}
                >
                  <div className="p-6 flex justify-between items-center border-b border-slate-200 dark:border-muted-200">
                    <DialogTitle className="text-lg font-bold text-muted-900 dark:text-white">
                      {title}
                    </DialogTitle>

                    <button
                      onClick={closeModal}
                      className="w-10 h-10 flex items-center justify-center rounded-full 
                      text-muted-900 dark:text-white hover:bg-muted-200 
                      dark:hover:text-muted-900 dark:hover:bg-muted-200 cursor-pointer transition"
                    >
                      <CloseIcon fontSize="small" />
                    </button>
                  </div>

                  <div
                    className={`h-[calc(100%-80px)] overflow-y-auto p-6 ${mainXPadding} ${mainYPadding}`}
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
