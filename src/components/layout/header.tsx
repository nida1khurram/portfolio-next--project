
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image"
import Link from "next/link"
export default function Header() {
  return (
    <>
     {/* <div className='  z-50 sticky top-0 '> */}
     <header className='container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center justify-around 
     bg-gradient-to-r from-[#14523d] to-[#000]'>
       
    <Image width={100} height={100} alt="logo" src={'/picture/n1.png'} 
    className="max-w-[200px] max-h-[200px]"/> 
    
           {/* navbar  */}
  {/* <nav className="flex flex-col md:flex-row gap-8 text-[25px]  text-shadow-1 animate-pulse " > 
    <Link href={'/'}> <span> Home </span></Link>
    <Link href={'/about'}> <span> About</span></Link> 
    <Link href={'/skill'}> <span> Skill</span></Link>
    <Link href={'/project'}> <span> Project</span></Link>
    <Link href={'/contact'}> <span> Contact</span></Link>
</nav> */}
<ul className="hidden md:block text-shadow-1 animate-pulse text-2xl">
        <li className="space-x-5 py-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="skill">Skill</Link>
          <Link href="/project">Project</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
{/* sheet */}
<Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li className="space-x-5 py-4 text-black block">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/skill">Skill</Link>
              <Link href="/project">Project</Link>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
   </header>
   {/* </div> */}
   
    </>
  )
}
