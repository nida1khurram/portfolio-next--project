import Image from 'next/image'

export default function ImageBox() {
  return (
       <div className="max-w-[500px] max-h-[500px] flex flex-col  items-center 
   
    rounded-full shadow-md p-6 ">
        <Image
          width={500}
          height={500}
          alt="logo"
          src="/picture/home-img.png"
          className="rounded-full origin-bottom -rotate-12:hover"
        />
    </div>
  )
}
