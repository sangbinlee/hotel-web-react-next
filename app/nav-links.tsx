'use client';
 
// import {
//   UserGroupIcon,
//   HomeIcon,
//   InboxIcon,
// } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export default function NavLinks() {
    const pathname = usePathname();
    

    const links = [
        { 
            name:'Home',
            href:'/',
        },
        { 
            name:'About',
            href:'about',
        },
        { 
            name:'Contact',
            href:'contact',
        },

    ]
    return (
        <ul>
        {links.map((link) => {
            return (
                <li key={link.name} >
                    <Link
                        href={link.href}
                        className={clsx(
                            '',
                            {
                                'current': pathname === link.href,
                            },
                        )}
                    >
                        {link.name}
                    </Link>
                </li>
            );
        })}
        </ul>
    );
  }