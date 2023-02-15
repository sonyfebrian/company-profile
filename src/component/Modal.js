import React from "react";

export default function Modal({ setShowModal }) {
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font-bold uppercase">Login</h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => setShowModal(false)}
              >
                <span className="text-black opacity-7 h-6 w-6 text-xl  py-0 ">
                  x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <form className=" rounded px-8 pt-6 pb-8 w-full">
                <label className="block text-black text-sm font-bold mb-1">
                  First Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                <label className="block text-black text-sm font-bold mb-1">
                  Last Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                <label className="block text-black text-sm font-bold mb-1">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              </form>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="uppercase bg-transparent hover:bg-blue-500 text-cyan-400 font-semibold hover:text-white py-2 px-4 border border-cyan-400 hover:border-transparent rounded w-40"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
