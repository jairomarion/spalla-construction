import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  image: string;
  index: number;
  onClick: () => void;
};
export default function ProjectCard({ image, index, onClick }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl"
    >
      <Image
        src={image}
        alt="Project"
        fill
        className="object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <p className="text-white font-semibold">View Project</p>
      </div>
    </motion.div>
  );
}