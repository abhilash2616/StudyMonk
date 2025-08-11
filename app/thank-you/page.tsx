"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full p-8 rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-200/70 text-center shadow-lg overflow-hidden relative"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-6"
        >
          <Image
            src="/assets/Email.gif"
            alt="Success"
            width={160}
            height={160}
            className="mx-auto"
          />
        </motion.div>
        <div className="space-y-4 mb-8">
          <motion.h3
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Thank You!
          </motion.h3>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your submission has been received. We appreciate your time!
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={() => router.push("/")}
            className="w-full py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Return Home
          </Button>
        </motion.div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-400/10 blur-3xl -z-10"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-400/10 blur-3xl -z-10"></div>
      </motion.div>
    </div>
  );
}

export default ThankYouPage;