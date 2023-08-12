import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className='h-10 w-10'  src="/images/checked.png" alt="hello" srcset="" />
        <span class="ml-3 text-xl">To Do By abubakar</span>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link href={"/"} class="mr-5 hover:text-gray-900">Home</Link >
        <Link href={"/Todo"} class="mr-5 hover:text-gray-900">My to dos</Link >
        <Link href={"/"} class="mr-5 hover:text-gray-900">Contact us</Link >
     
      </nav>
     
    </div>
  </header>
  )
}
export default Header;
