"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function VideoModal({
  src,
  open,
  onClose,
}: {
  src: string;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-border bg-black shadow-2xl sm:max-w-sm"
          >
            <button
              aria-label="Close video"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white"
            >
              <X size={16} />
            </button>
            <video
              src={src}
              controls
              autoPlay
              playsInline
              className="aspect-[9/16] w-full bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
