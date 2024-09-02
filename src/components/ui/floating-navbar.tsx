// 'use client';
// import React, { useState } from 'react';
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from 'framer-motion';
// import { cn } from '@/utils/cn';
// import Link from 'next/link';

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//     dropdownLinks?: { name: string; link: string }[]; // Added dropdownLinks for each navItem
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   const [visible, setVisible] = useState(false);

//   useMotionValueEvent(scrollYProgress, 'change', (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === 'number') {
//       let direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         setVisible(false);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <div className='h-10 w-full'>
//     <AnimatePresence mode='wait'>
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           'flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2 items-center justify-center space-x-4', 
//           className
//         )}
//       >
//         {navItems.map((navItem, idx) => (
//           <div key={`navItem-${idx}`} className='relative group'>
//             <Link
//               href={navItem.link}
//               className={cn(
//                 'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500',
//                 'transition duration-200 ease-in-out transform hover:scale-105'
//               )}
//             >
//               <span className={`block `}>{navItem.icon}</span>
//               <span className=' sm:block text-sm'>{navItem.name}</span>
//             </Link>
//             {navItem.dropdownLinks && (
//               <div className='absolute left-0 w-rvw py-1 hidden group-hover:flex flex-col space-y-4 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg'>
//                 {navItem.dropdownLinks.map((dropdownLink, idx) => (
//                   <Link
//                     key={`dropdown-${idx}`}
//                     href={dropdownLink.link}
//                     className='block px-4  py-1 text-sm dark:text-neutral-50 text-neutral-600  dark:hover:text-neutral-300 hover:text-neutral-500 transition duration-200 ease-in-out transform hover:scale-105'
//                   >
//                     {dropdownLink.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </motion.div>
//     </AnimatePresence></div>
//   );
// };

'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    dropdownLinks?: { name: string; link: string }[]; // Added dropdownLinks for each navItem
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <div className='h-14 w-full'> {/* Increased height for larger navbar */}
      <AnimatePresence mode='wait'>
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            'flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-4 items-center justify-center space-x-6', 
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <div key={`navItem-${idx}`} className='relative group'>
              <Link
                href={navItem.link}
                className={cn(
                  'relative dark:text-neutral-50 items-center flex space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500',
                  'transition duration-200 ease-in-out transform hover:scale-105'
                )}
              >
                <span className={`block`}>{navItem.icon}</span>
                <span className='sm:block text-base'>{navItem.name}</span> {/* Increased text size for better visibility */}
              </Link>
              {navItem.dropdownLinks && (
                <div className='absolute left-0 w-auto p-2 hidden group-hover:flex flex-col space-y-4 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg'>
                  {navItem.dropdownLinks.map((dropdownLink, idx) => (
                    <Link
                      key={`dropdown-${idx}`}
                      href={dropdownLink.link}
                      className='block px-4 py-2 text-sm dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition duration-200 ease-in-out transform hover:scale-105'
                    >
                      {dropdownLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
