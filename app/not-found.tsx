"use client";

import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const PageNotFound = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const hoverEffect = {
    scale: 1.02,
    transition: { duration: 0.3 },
  };

  const tapEffect = {
    scale: 0.98,
  };

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist" />
      </Head>
      
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center overflow-hidden relative"
        >
          <motion.div 
            className="absolute -top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              x: [0, 20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              x: [0, -20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          <div className="relative z-10">
            <motion.h1 
              variants={itemVariants}
              className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2"
            >
              404
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-semibold mb-4"
            >
              Page Not Found
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="mb-8 text-gray-600"
            >
              Oops! The page youre looking for doesnt exist or has been moved.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link href="/" passHref>
                <motion.button
                  whileHover={hoverEffect}
                  whileTap={tapEffect}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Go Back Home
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PageNotFound;