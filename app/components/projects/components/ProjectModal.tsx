import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  selectedImage: string | null;
  onClose: () => void;
};

export default function ProjectModal({ selectedImage, onClose }: Props) {
  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl h-[80vh]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Project Large"
              fill
              className="object-contain rounded-xl"
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}