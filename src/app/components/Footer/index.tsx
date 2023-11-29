import Image from "next/image";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.root}>
      <div className="container px-6 mx-auto divide-y divide-quaternary md:space-y-1 divide-opacity-50">
        <div className="grid">
          <div className="grid justify-center lg:justify-between pb-1">
            <a
              aria-label="Back to homepage"
              className="flex items-center"
              href="/"
            >
              <Image
                alt="logo"
                loading="lazy"
                width="150"
                height="45"
                src="/brezee_logo_no_background.svg"
              ></Image>
            </a>
          </div>
        </div>
        <div className="grid justify-center lg:justify-between pt-3">
          <div className="flex">
            <span className="mr-2">©2023 All rights reserved</span>
          </div>
          <div className="flex justify-center pt-1 space-x-4 lg:pt-0 lg:col-end-13">
            <a
              rel="noopener noreferrer"
              // href="https://strapi.io/"
              title="Whatsapp"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 rounded-full dark:bg-primary dark:text-gray-900"
            >
              <Image
                alt="logo"
                loading="lazy"
                width="150"
                height="45"
                src="/whatsapp.svg"
              ></Image>
            </a>
            <a
              rel="noopener noreferrer"
              // href="https://www.youtube.com/@Strapi"
              title="YouTube"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 rounded-full dark:bg-primary dark:text-gray-900"
            >
              <Image
                alt="logo"
                loading="lazy"
                width="150"
                height="45"
                src="/youtube.svg"
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
