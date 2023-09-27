import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavItem() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex-sm-column flex flex-col lg:flex-row h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden mb-4">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ms-40">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href="/">
                        <p className='nav_item'>HOME</p>
                    </Link>
                    <Link href="/aboutus">
                        <p className='nav_item'>ABOUT US</p>
                    </Link>
{/* ----------------------------Nav dropdown------------------------------------------- */}
                    <Menu as="div" className="relative inline-block text-left">
                    <div className=''>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3  text-sm font-semibold  shadow-sm ring-1 ring-inset ring-white hover:bg-gray-50 nav_item">
                        HEATING
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Furnace Installation 
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Furnace Maintenance
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Furnace Repair
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                    </Menu>
                    <Menu as="div" className="relative inline-block text-left">
                    <div className=''>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3  text-sm font-semibold  shadow-sm ring-1 ring-inset ring-white hover:bg-gray-50 nav_item">
                        COOLING 
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                <Link
                                 href="/ac-repair">
                                     <span  className='block px-4 py-2 text-sm text-gray-700'>A/C Repair</span>
                                 </Link>
                            </Menu.Item>
                        </div>
                        <div className="py-1">
                            <Menu.Item>
                                <Link
                                 href="/ac-installation">
                                     <span  className='block px-4 py-2 text-sm text-gray-700'>A/C Installation</span>
                                 </Link>
                            </Menu.Item>
                        </div>
                        <div className="py-1">
                            <Menu.Item>
                                <Link
                                 href="/ac-maintanence">
                                     <span  className='block px-4 py-2 text-sm text-gray-700'>A/C Maintenance</span>
                                 </Link>

                            </Menu.Item>
                        </div>
                        </Menu.Items>
                    </Transition>
                    </Menu>
                    <Link href="/contact-us">
                        <p className='nav_item'>CONTACT US</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden lg:inline-block">
                   <button className='book_service_btn text-white'>BOOK SERVICE</button>
              </div>
                <div className="absolute top-11 flex items-center lg:hidden">
                   <button className='book_service_btn text-white'>BOOK SERVICE</button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <Disclosure.Button
                    as="a"
                    href=""
                    
                   
                    >
                    <Link href="/">
                        <p className='nav_item'>HOME</p>
                    </Link>
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href=""
                    
                   
                    >
                     <Link href="/aboutus">
                         <p className='nav_item mt-2'>ABOUT US</p>
                     </Link>
                </Disclosure.Button>
                <Menu as="div" className="block text-left ">
                <div className=''>
                    <Menu.Button className="inline-flex w-full gap-x-1.5 rounded-md bg-white   text-sm font-semibold  shadow-sm ring-1 ring-inset ring-white hover:bg-gray-50 nav_item mt-2">
                    HEATING
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Disclosure.Button className="py-1">
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Furnace Installation 
                                </a>
                            )}
                            </Menu.Item>
                        </Disclosure.Button>
                        <Disclosure.Button className="py-1">
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Furnace Maintenance
                                </a>
                            )}
                            </Menu.Item>
                        </Disclosure.Button>
                        <Disclosure.Button className="py-1">
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Furnace Repair
                                </a>
                            )}
                            </Menu.Item>
                        </Disclosure.Button>
                    </Menu.Items>
                </Transition>
                </Menu>
                <Menu as="div" className=" block text-left">
                <div className=''>
                    <Menu.Button className="inline-flex w-full  gap-x-1.5 rounded-md bg-white   text-sm font-semibold  shadow-sm ring-1 ring-inset ring-white hover:bg-gray-50 nav_item mt-2">
                    COOLING 
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Disclosure.Button className="py-1">
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                            A/C Repair
                            </a>
                        )}
                        </Menu.Item>
                    </Disclosure.Button>
                    <Disclosure.Button className="py-1">
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                            A/C Installation
                            </a>
                        )}
                        </Menu.Item>
                    </Disclosure.Button>
                    <Disclosure.Button className="py-1">
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                            A/C Maintenance
                            </a>
                        )}
                        </Menu.Item>
                    </Disclosure.Button>
                    </Menu.Items>
                </Transition>
                </Menu>
              
                <Disclosure.Button
                    as="a"
                    href=""
                    
                   
                    >
                    <Link href="contact-us">
                    <p className='nav_item mt-2'>CONTACT US</p>
                    </Link>
                </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}