import React from 'react'

const addUsers = () => {
  return (
    <div className="bg-gray-50 font-[sans-serif]">
  <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
    <div className="max-w-md w-full">
      <a href="javascript:void(0)">
        <img
          src="https://readymadeui.com/readymadeui.svg"
          alt="logo"
          className="w-40 mb-8 mx-auto block"
        />
      </a>
      <div className="p-8 rounded-2xl bg-white shadow">
        <h2 className="text-gray-800 text-center text-2xl font-bold">
          Add user
        </h2>
        <form className="mt-8 space-y-4">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              First name
            </label>
            <div className="relative flex items-center">
              <input
                name="firstname"
                type="text"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter first name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-4 h-4 absolute right-4"
                viewBox="0 0 24 24"
              >
                <circle cx={10} cy={7} r={6} data-original="#000000" />
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"
                />
              </svg>
            </div>
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Last name</label>
            <div className="relative flex items-center">
              <input
                name="lastname"
                type="text"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter Last name"
              />

            </div>
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              Email
            </label>
            <div className="relative flex items-center">
              <input
                name="email"
                type="text"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-4 h-4 absolute right-4"
                viewBox="0 0 24 24"
              >
                <circle cx={10} cy={7} r={6} data-original="#000000" />
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"
                />
              </svg>
            </div>
          </div>
          <div className="!mt-8">
            <button
              type="button"
              className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Add user
            </button>
          </div>
         
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default addUsers