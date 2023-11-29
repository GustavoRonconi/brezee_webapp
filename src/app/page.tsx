import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-secondary">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
            <div>
              <h1 className="text-5xl font-bold leading-none sm:text-6xl mb-8">
                Estamos{" "}
                <span key="1" className="text-primary">
                  preparando
                </span>{" "}
                uma experiência de moda{" "}
                <span key="1" className="text-primary">
                  incrível
                </span>{" "}
                para você
                <span key="1" className="text-primary">
                  ...
                </span>
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              src="/undraw_woman.svg"
              alt="Brezee Logo"
              width={300}
              height={400}
            />
            {/* <img alt="none provided" loading="lazy" width="600" height="600" decoding="async" data-nimg="1" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 " src="/menu.svg"> */}
          </div>
        </div>
      </section>
    </main>
  );
}
