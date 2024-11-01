"use client";
import Image from "next/image";
import LogoLolita from "../../assets/logo_blanc_plein.jpeg";

const Logo = () => {
  return (
    <div className="flex justify-center my-14 items-center">
      <Image
        src={LogoLolita}
        alt="logo"
        width={150}
        height={150}
        className="h-auto max-w-full rounded-lg"
      />
    </div>
  )
}

export default Logo;
