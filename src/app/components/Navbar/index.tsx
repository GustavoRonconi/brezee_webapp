import Link from "next/link";
import Image from "next/image";

import s from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={s.root}>
      <div className="flex md:py-5">
        {/* <div className="flex w-10 h-10 sm:w-16 sm:h-16 md:w-5 md:h-6">
        <Image
            src='/menu.svg'// Use your menu icon
            alt="Menu Icon"
            layout="fill"
            objectFit="contain"
          />
        </div> */}
        <div className="flex w-10 h-10 sm:w-16 sm:h-16 md:w-5 md:h-10">
          <Image
            src="/brezee_logo_no_background_no_symbol.svg"
            alt="Brezee Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </nav>
  );
}
