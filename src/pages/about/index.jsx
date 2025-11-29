import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

const AboutPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1>AboutPage</h1>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Confirm Action">
        <div className="h-[200px]">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Are you sure you want to perform this action?
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                console.log("Confirmed");
                setOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AboutPage;
