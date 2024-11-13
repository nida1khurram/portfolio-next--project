import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header
        className="max-w-full container mx-auto flex flex-wrap p-1 flex-col md:flex-row justify-around items-center
      "
      >
        <Image
          width={100}
          height={100}
          alt="logo"
          src={"/picture/hero/n1.png"}
          className="max-w-[200px] max-h-[200px]"
        />

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
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="skill">Skill</Link>
              </li>
              <li>
                <Link href="/project">Project</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
