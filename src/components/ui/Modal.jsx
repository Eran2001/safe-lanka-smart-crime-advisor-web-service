import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({
  open = false,
  onClose = () => {},
  title = "Modal Title",
  children,
  showClose = true,
  size = "max-w-lg",
  footer,
}) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95 translate-y-1"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-1"
          >
            <Dialog.Panel
              className={`w-full ${size} transform overflow-hidden rounded-2xl bg-white 
              p-6 shadow-xl transition-all dark:bg-neutral-800 dark:text-white`}
            >
              <div className="flex justify-between items-center">
                <Dialog.Title className="text-lg font-semibold">
                  {title}
                </Dialog.Title>

                {showClose && (
                  <button
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-full cursor-pointer"
                  >
                    <CloseIcon className="w-6! h-6!" />
                  </button>
                )}
              </div>

              <div className="mt-4">{children}</div>

              {footer && <div className="mt-6">{footer}</div>}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
