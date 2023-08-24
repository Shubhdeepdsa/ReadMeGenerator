import Image from 'next/image'

export default function Home() {
  return (
    <main className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-8 rounded-lg shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg bg-fuchsia-200 text-center">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r bg-clip-text from-indigo-600 to-pink-400 ">Welcome to GitDoctor</h1>
        <div className="flex justify-center ">
          <button className="relative overflow-hidden group bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded flex items-center space-x-2 transform transition-transform hover:scale-105">
            <span className="font-semibold">Login with GitHub</span>
          </button>
        </div>
      </div>
    </main>
  )
}
