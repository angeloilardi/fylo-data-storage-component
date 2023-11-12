import Image from "next/image";

const icons = ["icon-document.svg", "icon-folder.svg", "icon-upload.svg"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[url(/images/bg-mobile.png)] justify-center bg-cover bg-no-repeat gap-6">
      <div className="flex flex-col bg-delft_blue w-[300px] h-[180px] rounded-b-lg rounded-tl-lg rounded-tr-[100px] pl-5 justify-evenly">
        <div className="p-3">
          <Image src="/images/logo.svg" alt="logo" width={135} height={40} />
        </div>
        <div className="flex gap-3">
          {icons.map((icon: string, i: number) => {
            return (
              <div
                key={i}
                className="bg-oxford_blue p-3 rounded-lg flex items-center"
              >
                <Image src={`/images/${icon}`} width={24} height={16} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col bg-delft_blue w-[300px] h-[150px] rounded-lg pl-5 justify-evenly">
        <p>You’ve used 815 GB of your storage</p>
      </div>
    </main>
  );
}
