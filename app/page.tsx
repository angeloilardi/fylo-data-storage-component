import Image from "next/image";

const icons = ["icon-document.svg", "icon-folder.svg", "icon-upload.svg"];

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center bg-[url(/images/bg-mobile.png)] justify-center bg-cover bg-no-repeat md:flex-row md:[background:url('/images/bg-desktop.png')_#0C122C_no-repeat_left_bottom] md:[background-position:center_bottom,right_top] md:[background-size:100%_50%,cover]">
      <div className="flex flex-col lg:flex-row gap-6 lg:items-end">
        <div className="flex flex-col bg-delft_blue w-[330px] h-[200px] rounded-b-lg rounded-tl-lg rounded-tr-[100px] px-7 justify-evenly">
          <Image src="/images/logo.svg" alt="logo" width={135} height={40} />
          <div className="flex gap-5">
            {icons.map((icon: string, i: number) => {
              return (
                <div
                  key={i}
                  className="bg-oxford_blue p-3 rounded-lg flex items-center w-12 h-12"
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
          <p className="text-sm text-center mt-8 text-delft_blue-900 md:text-start">
            You’ve used <strong>815 GB</strong> of your storage
          </p>
          <div className="rounded-full w-full h-5 bg-delft_blue-400 p-1">
            <div
              className={`flex bg-gradient-to-r from-[hsl(6,100%,80%)] h-full to-[hsl(335,100%,65%)] rounded-full p-1 items-center relative`} style={{width:'81.5%'}}
            >
              <div className="absolute bg-white w-2.5 h-2.5 rounded-full right-0.5"></div>
            </div>
          </div>
          <div className="flex justify-between text-xs font-semibold text-delft_blue-900">
            <p>0 GB</p>
            <p>1000 GB</p>
          </div>
          <div className="w-[190px] h-[70px] bg-white flex justify-center rounded-md items-center absolute -bottom-[25%] left-[22%] md:-top-[30%] md:left-[61%] md:rounded-t-md md:rounded-bl-md md:rounded-br-none">
            <p className="text-xs text-taupe_gray font-bold tracking-wider align-top">
              <span className="text-4xl font-bold text-black">185 </span>GB LEFT
            </p>
            <div className="hidden md:block w-0 h-0 border-t-[20px] border-r-0 border-b-0 border-l-[20px] border-t-white border-b-transparent absolute border-x-transparent top-[100%] right-0"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
