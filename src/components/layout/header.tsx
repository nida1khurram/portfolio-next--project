
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
     <header className='max-w-full container mx-auto flex flex-wrap p-1 flex-col md:flex-row justify-around items-center
     bg-gradient-to-r from-[#000] to-[#14523d]'>
       
    <Image width={100} height={100} alt="logo" src={'/picture/n1.png'} 
    className="max-w-[200px] max-h-[200px]" /> 
    
           {/* navbar  */}
  {/* <nav className="flex flex-col md:flex-row gap-8 text-[25px]  text-shadow-1 animate-pulse " > 
    <Link href={'/'}> <span> Home </span></Link>
    <Link href={'/about'}> <span> About</span></Link> 
    <Link href={'/skill'}> <span> Skill</span></Link>
    <Link href={'/project'}> <span> Project</span></Link>
    <Link href={'/contact'}> <span> Contact</span></Link>
</nav> */}
<ul className="hidden  md:block text-shadow-1 animate-pulse text-2xl ">
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
        <SheetTrigger className="md:hidden ">
          <Menu />
        </SheetTrigger>
        <SheetContent>
         
          <ul className="text-black block">
            {/* <li className="space-x-5 py-4 text-black block"> */}
              {/* <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/skill">Skill</Link> 
              <Link href="/project">Project</Link>
              <Link href="/contact">Contact</Link> */}
               <li><Link href="/">Home</Link></li>
         <li> <Link href="/about">About</Link></li>
          <li><Link href="skill">Skill</Link></li>
          <li><Link href="/project">Project</Link></li>
          <li><Link href="/contact">Contact</Link></li>
            {/* </li> */}
          </ul>
         
        </SheetContent>
      </Sheet>
   </header>
   {/* </div> */}
   {/* import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet" */}

{/* export function SheetDemo() {
  return ( */}
    {/* <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet> */}
  {/* )
} */}

    </>
  )
}
