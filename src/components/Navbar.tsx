// 'use client';
// import React from 'react';

// import { FloatingNav } from "./ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
// import Link from 'next/link';

// function Navbar() {
//   return <div>Navbar</div>;
// }

// export default Navbar;


'use client';
import React from 'react';
import { FloatingNav } from './ui/floating-navbar';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
export default function Navbar() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
    },
    {
      name: 'Our Courses',
      link: '/about',
      icon: <IconUser className='h-4 w-4 text-neutral-500 dark:text-white' />,
      dropdownLinks: [
        {
          name: 'All Courses',
          link: '/all-courses'
        },
        {
          name: 'Basic Music Theory',
          link: '/basic-music-theory'
        },
        {
          name: 'Advanced Composition',
          link: '/advanced-composition'
        },
        {
          name: 'Songwriting',
          link: '/songwriting'
        },
        {
          name: 'Music Production',
          link: '/music-production'
        },
      ]
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: (
        <IconMessage className='h-4 w-4 text-neutral-500 dark:text-white' />
      ),
    },
  ];
  return (
    <div className='w-full'>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
// const DummyContent = () => {
//   return (
//     <div className='grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md'>
//       <p className='dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold'>
//         Scroll back up to reveal Navbar
//       </p>
//       <div className='inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]' />
//     </div>
//   );
// };