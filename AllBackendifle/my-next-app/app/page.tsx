import Link from 'next/dist/client/link';
import Head from 'next/head';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>SafeBite - รายงานสุนัขจรจัด</title>
        <meta name="description" content="ร่วมเป็นส่วนหนึ่งกับการทำให้ชุมชนของเราปลอดภัยมากขึ้น" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-6 text-gray-700">
              <div className="flex items-center space-x-2 text-red-500 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>หน้าหลัก</span>
              </div>
              <Link href={"warmDog"} className="hover:text-gray-900">รายงานสุนัขจรจัด</Link>
              <Link href={"photofindDog"} className="hover:text-gray-900">แจ้งสุนัขหาย</Link>
              <Link href={"viewfindDog"} className="hover:text-gray-900">ตามหาสุนัขหาย</Link>
            </div>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">แดชบอร์ด</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
          style={{
            backgroundImage: 'url("/asset/dog-4372036_1280.jpg")', // ต้องมีรูปใน public/images
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-4">SafeBite</h1>
            <p className="text-xl mb-8">
              มาร่วมเป็นส่วนหนึ่งกับการทำให้ชุมชนของเราปลอดภัยมากขึ้น
            </p>
            <div className="space-x-4">
              <Link href={"warmDog"} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                รายงานสุนัขจรจัด
              </Link>
              <Link href={"viewfindDog"} className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300">
                ตามหาสุนัขหาย
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: คนทั่วไป */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-200 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">คนทั่วไป</h2>
              <p className="text-gray-600 mb-6">
                รายงานสุนัขจรจัดเพื่อทำให้บริเวณชุมชนของคุณปลอดภัยมากขึ้น
              </p>
              <Link href={"warmDog"} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg">
                รายงานสุนัขจรจัด
              </Link>
            </div>

            {/* Card 2: เจ้าของสุนัข */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-200 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">เจ้าของสุนัข</h2>
              <p className="text-gray-600 mb-6">
                แจ้งสุนัขที่หาย หรือค้นหาสุนัขที่พบล่าสุด
              </p>
              <div className="space-y-4">
                <Link href={"photofindDog"} className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg">
                  แจ้งสุนัขหาย
                </Link>
                <Link href={"viewfindDog"} className="block w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg">
                  ตามหาสุนัขหาย
                </Link>
              </div>
            </div>

            {/* Card 3: เทศบาล */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-200 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">เทศบาล</h2>
              <p className="text-gray-600 mb-6">
                ดูแลและจัดการสุนัขจรจัดในพื้นที่ต่างๆ ของเมือง
              </p>
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg">
                แดชบอร์ด
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;