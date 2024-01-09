import Image from "next/image";
import photo from "@/public/images/photo.jpg";

export default function Home() {
  return (
    <main>
      <section className="hero flex justify-between items-center flex-wrap ">
        <div className="flex-col justify-between w-1/2 m-auto">
          <h1 className="text-yellow-500 pb-5">Welcome, I'm </h1>
          <h2 className="text-white text-7xl pb-6">Terence Arseneault</h2>
          <p className="text-gray-400 text-xl pb-6">
            I have a strong foundation in Full Stack Web Development from the
            University of New Brunswick coding boot camp.
          </p>
          <div className="flex justify-start">
            <button className="primary-btn hover:opacity-80 mr-6 mt-6">
              Button
            </button>
            <button className="secondary-btn hover:bg-blue-900 hover:opacity-80 duration-100 mt-6">
              Button
            </button>
          </div>
        </div>
        <div className="w-100 mx-auto">
          <Image
            className="w-96 h-96 rounded-full mt-12 brightness-75"
            src={photo}
            alt="Self photo"
          ></Image>
        </div>
      </section>
    </main>
  );
}
