import React from "react";

export default function About() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 " id="about">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            ABOUT
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            perusahaan berbasis teknologi informasi yang dapat membantu Anda
            untuk mengoptimalkan alur bisnis dan perdagangan Anda agar mencapai
            tingkat efisiensi dan produktivitas optimal.
          </p>
        </div>
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              ABOUT
            </span>
            <p className="leading-relaxed mb-8">
              perusahaan berbasis teknologi informasi yang dapat membantu Anda
              untuk mengoptimalkan alur bisnis dan perdagangan Anda agar
              mencapai tingkat efisiensi dan produktivitas optimal.
            </p>
            <div className="border-b-2 border-gray-100 w-full mt-auto"></div>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              VISION
            </span>
            <p className="leading-relaxed mb-8">
              Membantu memberikan solusi terbaik untuk menjaga kestabilan dan
              keseimbangan perusahaan
            </p>
            <div className="border-b-2 border-gray-100 mt-auto w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
