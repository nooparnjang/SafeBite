import React from 'react';
import CardfindDog from '../components/CardfindDog';
import Link from 'next/dist/client/link';

// ข้อมูลจำลองสำหรับแสดงการ์ด 5 รายการตามในรูป
const mockDogData = [
  { id: 1, characteristics: 'ตัวเล็ก สีขาว มีจุดดำที่หาง ขนฟู', location: 'บริเวณสวนสาธารณะ ซอย 1', date: '25/11/2025' },
  { id: 2, characteristics: 'พันธุ์พุดเดิ้ล มีปลอกคอสีแดง ติดแท็กชื่อ', location: 'ใกล้โรงเรียน XXX', date: '18/11/2025' },
  { id: 3, characteristics: 'สุนัขไทยหลังอาน เพศผู้ อายุประมาณ 3 ปี', location: 'หน้าปากซอยถนนใหญ่', date: '10/11/2025' },
  { id: 4, characteristics: 'บางแก้ว เพศเมีย ไม่ดุ ชอบวิ่งเล่น', location: 'ในหมู่บ้าน YYY', date: '05/11/2025' },
  { id: 5, characteristics: 'ชิวาว่า ขาสั้น มีรอยสักที่หูซ้าย', location: 'ตลาดสด ZZZ', date: '01/11/2025' },
];

const Navbar: React.FC = () => (
    <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-start items-center space-x-6 text-gray-700">
            <Link href={"/"} className="flex items-center space-x-2 text-red-500 font-bold hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                <span>หน้าหลัก</span>
            </Link>
           <Link href={"warmDog"} className="hover:text-gray-900">รายงานสุนัขจรจัด</Link>
              <Link href={"photofindDog"} className="hover:text-gray-900">แจ้งสุนัขหาย</Link>
              <Link href={"viewfindDog"} className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold">ตามหาสุนัขหาย</Link>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">แดชบอร์ด</a>
        </div>
    </nav>
);
const LostDogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Navbar />
      
      {/* ส่วนหัวของหน้า */}
      <header className="py-8 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-extrabold text-gray-800 text-center tracking-wide">
            ตามหาสุนัขหาย
          </h1>
        </div>
      </header>

      {/* ส่วนแสดงรายการการ์ด */}
      <main className="container mx-auto px-4 mt-8">
        {mockDogData.map((dog) => (
          <CardfindDog 
            key={dog.id} 
            id={dog.id} 
            characteristics={dog.characteristics} 
            location={dog.location} 
            date={dog.date} 
          />
        ))}
      </main>
    </div>
  );
};

export default LostDogPage;