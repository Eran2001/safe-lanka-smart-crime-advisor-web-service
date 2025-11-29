import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import Icons from "@/components/ui/Icons";

const Dropdown = ({
  label = "Actions",
  items = [],
  buttonClass = "cursor-pointer",
  menuClass = "",
}) => {
  return (
    <Menu as="div" className="relative inline-flex">
      <Menu.Button
        className={`hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium 
          rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 
          focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 
          dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ${buttonClass}`}
      >
        {label}

        <Icons
          icon="heroicons:chevron-down"
          className="size-4 ui-open:rotate-180 transition-transform"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Menu.Items
          className={`absolute top-full mt-1 right-0 min-w-60  bg-white shadow-md rounded-lg p-1 
            dark:bg-neutral-800 dark:border dark:border-neutral-700 z-50 ${menuClass}`}
        >
          {items.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  onClick={() => item.onClick && item.onClick()}
                  className={`flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm 
                    text-gray-800 dark:text-neutral-400 ${buttonClass}
                    ${
                      active
                        ? "bg-gray-100 dark:bg-neutral-700 dark:text-neutral-300"
                        : ""
                    }
                  `}
                >
                  {item.icon && <Icons icon={item.icon} className="text-lg" />}
                  {item.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;

/* 
  <DropDown
          label="Actions"
          items={[
            {
              label: "Newsletter",
              icon: "mdi:email-newsletter",
              onClick: () => console.log("Newsletter clicked"),
            },
            {
              label: "Purchases",
              icon: "heroicons:shopping-cart",
              onClick: () => console.log("Purchases clicked"),
            },
            {
              label: "Downloads",
              icon: "mdi:download",
              onClick: () => console.log("Downloads clicked"),
            },
            {
              label: "Team Account",
              icon: "heroicons:user-group",
              onClick: () => console.log("Team clicked"),
            },
          ]}
        />
 */
