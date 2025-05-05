import {  Dialog, DialogPanel,  } from "@headlessui/react";

function StaffDetailModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg1: boolean) => void;
}) {
  const close = () => {
    setIsOpen(false);
  };
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl text-white bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptas eveniet adipisci laudantium incidunt, nostrum recusandae cum porro esse, molestiae quo asperiores dignissimos, ducimus eum. Excepturi ipsum et dicta delectus?
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default StaffDetailModal;
