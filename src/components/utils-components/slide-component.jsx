import { motion } from "framer-motion";

export default function SlideComponent({ isFirstFormSubmitted }) {
  return (
    <>
      <motion.span
        className={`bg-blue-500 w-4 h-4 rounded-lg border`}
        initial={false}
        animate={{ opacity: isFirstFormSubmitted ? 0.3 : 1 }}
        transition={{ duration: 0.5 }}
      ></motion.span>
      <motion.span
        initial={false}
        animate={{ opacity: isFirstFormSubmitted ? 1 : 0.3 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-500 w-4 h-4 rounded-lg border"
      ></motion.span>
    </>
  );
}
