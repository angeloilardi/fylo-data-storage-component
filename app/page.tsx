import Image from "next/image";

const icons = ["icon-document.svg", "icon-folder.svg", "icon-upload.svg"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[url(/images/bg-mobile.png)] justify-center bg-cover bg-no-repeat md:flex-row [background:url(/images/bg-desktop.png'),#6DB3F2]">
      <div className="flex flex-col lg:flex-row gap-6 lg:items-end">
        <div className="flex flex-col bg-delft_blue w-[330px] h-[200px] rounded-b-lg rounded-tl-lg rounded-tr-[100px] px-7 justify-evenly">
          <Image src="/images/logo.svg" alt="logo" width={135} height={40} />
          <div className="flex gap-5">
            {icons.map((icon: string, i: number) => {
              return (
                <div
                  key={i}
                  className="bg-oxford_blue p-3 rounded-lg flex items-center"
                >
                  <Image
                    src={`/images/${icon}`}
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col bg-delft_blue w-[330px] md:w-[550px] h-[150px] rounded-lg px-5 relative gap-3">
          <p className="text-sm text-center mt-10 text-delft_blue-900 md:text-start">
            You’ve used 815 GB of your storage
          </p>
          <div className="rounded-full w-full h-5 bg-delft_blue-400 p-1">
            <div
              className={`flex bg-gradient-to-r from-[hsl(6,100%,80%)] h-full to-[hsl(335,100%,65%)] rounded-full w-[${
                (815 / 1000) * 100
              }%] p-1 items-center relative`}
            >
              <div className="absolute bg-white w-2.5 h-2.5 rounded-full right-0.5"></div>
            </div>
          </div>
          <div className="flex justify-between text-xs font-semibold text-delft_blue-900">
            <p>0 GB</p>
            <p>1000 GB</p>
          </div>
          <div className="w-[150px] h-[60px] bg-white flex justify-center rounded-md items-center absolute -bottom-[20%] left-[25%] md:-top-[25%] md:left-[65%] md:rounded-t-md md:rounded-bl-md md:rounded-br-none">
            <p className="text-xs text-taupe_gray font-bold">
              <span className="text-4xl font-bold text-black">185 </span>GB LEFT
            </p>
            <div className="hidden md:block w-0 h-0 border-t-[25px] border-r-0 border-b-0 border-l-[25px] border-t-white border-b-transparent absolute border-x-transparent top-[100%] right-0"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
