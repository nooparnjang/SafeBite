"use client";
import Link from "next/dist/client/link";
import Head from "next/head";
import React, { useState } from "react";

// คุณควรแยก Navbar ไปเป็น Component ย่อย
// เพื่อให้สามารถเรียกใช้ซ้ำในหน้าอื่นๆ ได้ (เช่น: import Navbar from '../components/Navbar';)

// เพื่อความรวดเร็ว ฉันจะรวม Navbar แบบ Tailwind ไว้ในหน้านี้ก่อน
const Navbar: React.FC = () => (
  <nav className="bg-white shadow-sm">
    <div className="container mx-auto px-4 py-4 flex justify-start items-center space-x-6 text-gray-700">
      <Link
        href={"/"}
        className="flex items-center space-x-2 text-red-500 font-bold hover:text-red-700"
      >
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
      </Link>

      <Link href={"warmDog"} className="hover:text-gray-900">
        รายงานสุนัขจรจัด
      </Link>
      <Link
        href={"photofindDog"}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold"
      >
        แจ้งสุนัขหาย
      </Link>
      <Link href={"viewfindDog"} className="hover:text-gray-900">
        ตามหาสุนัขหาย
      </Link>
      <a
        href="#"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        แดชบอร์ด
      </a>
    </div>
  </nav>
);

const ReportLostDogPage: React.FC = () => {
  // state สำหรับจัดการค่าในฟอร์ม (แนะนำให้ใช้ useReducer สำหรับฟอร์มที่ซับซ้อน)
  const [formData, setFormData] = useState({
    description: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("ส่งแบบฟอร์มแล้ว! (โปรดดู Console Log)");
    // Logic ในการส่งข้อมูลไปยัง API จะอยู่ที่นี่
  };

  return (
    <>
      <Head>
        <title>SafeBite - แจ้งสุนัขหาย</title>
      </Head>

      <div className="min-h-screen bg-gray-200 font-sans">
        {/* Navigation Bar */}
        <Navbar />

        <main className="container mx-auto px-4 py-12 flex flex-col items-center">
          {/* Header */}
          <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
            แจ้งสุนัขหาย
          </h1>

          {/* Form Card */}
          <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. รูปภาพสุนัขที่หายไป */}
              <div className="space-y-2">
                <label className="text-gray-700 font-semibold">
                  ภาพสุนัขที่หายไป <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:border-gray-500 transition duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-8 w-8 text-gray-400 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.863-1.437A2 2 0 0110.424 4h3.152a2 2 0 011.664.89l.863 1.437A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-500 text-sm">
                    อัปโหลดรูปภาพของสุนัขที่หายไป
                  </p>
                  {/* สำหรับการทำงานจริง ควรซ่อน input type="file" ไว้ข้างใน */}
                  <input type="file" className="hidden" accept="image/*" />
                </div>
              </div>

              {/* 2. ลักษณะสุนัข */}
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="text-gray-700 font-semibold"
                >
                  ลักษณะสุนัข <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="ลักษณะสุนัข เช่น รูปพรรณ, ขนาด, สี, นิสัย และอื่นๆ"
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400 resize-none"
                  required
                />
              </div>

              {/* 3. ข้อมูลสถานที่ใกล้เคียง */}
              <div className="space-y-2">
                <label
                  htmlFor="location"
                  className="text-gray-700 font-semibold"
                >
                  ข้อมูลสถานที่ใกล้เคียง <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="location"
                  name="location"
                  rows={4}
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="กรอกลิงก์สถานที่ เช่น https://maps.app.goo.gl/gs6imXe3XrkuVK4U9"
                  className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 mt-4"
              >
                ส่งแบบฟอร์มรายงานสุนัขหาย
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default ReportLostDogPage;
