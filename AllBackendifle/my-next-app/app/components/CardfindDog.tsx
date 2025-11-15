import React from 'react';

// กำหนด Type ของข้อมูลการ์ด (สามารถปรับเปลี่ยนได้ตามข้อมูลจริง)
interface LostDogCardProps {
  id: number;
  characteristics: string;
  location: string;
  date: string;
}

const  CardfindDog: React.FC<LostDogCardProps> = ({ characteristics, location, date }) => {
  return (
    <div className="bg-white p-4 my-4 rounded-xl shadow-md border border-gray-100 flex items-center space-x-4 max-w-4xl mx-auto">
      {/* ส่วนรูปภาพ (Placeholder) */}
      <div className="w-32 h-32 bg-gray-200 rounded-lg shrink-0 border border-gray-300">
        {/*  */}
      </div>

      {/* ส่วนรายละเอียด */}
      <div className="flex-grow grid grid-cols-2 gap-x-6 gap-y-2 pr-4">
        {/* 1. ลักษณะทั่วไป */}
        <div className="col-span-2 text-gray-700">
          <label className="font-medium text-sm">ลักษณะทั่วไป:</label>
          <p className="bg-gray-50 border border-gray-200 rounded-md px-3 py-1 text-sm">{characteristics}</p>
        </div>
        
        {/* 2. สถานที่ใกล้เคียง */}
        <div className="col-span-1 text-gray-700">
          <label className="font-medium text-sm">สถานที่ใกล้เคียง:</label>
          <p className="bg-gray-50 border border-gray-200 rounded-md px-3 py-1 text-sm">{location}</p>
        </div>

        {/* 3. วันที่พบ / ตรวจสอบ */}
        <div className="col-span-1 flex items-end justify-between">
          <div className="text-gray-700">
            <label className="font-medium text-sm">วันที่พบ:</label>
            <p className="text-sm">{date}</p>
          </div>
          
          <button 
            className="bg-pink-300 text-white font-bold px-6 py-2 rounded-full hover:bg-pink-400 transition duration-150 shadow-md transform hover:scale-105"
          >
            ตรวจสอบ
          </button>
        </div>
      </div>
    </div>
  );
};

export default  CardfindDog;