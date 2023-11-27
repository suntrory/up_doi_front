'use client' 
import Image from 'next/image'
import styles from '@/app/page.module.css';
import btnStyle from '@/app/Button.module.css';
import './../global.css'
import {useRouter} from 'next/navigation';
import React, { useState } from "react";



export default function Home() {

    const router = useRouter()
    const [active, setActive] = useState(false)
    
    let goSur = () => {
        router.push('/survey')
    } 
    return (
        <div className="flex flex-col items-center justify-between p-44 space-y-5 space-x-4">
            <div className="flex  flex-col space-y-4 text-xl">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;แบบสอบถามฉบับนี้มีวัตถุประสงค์เพื่อใช้ในการคัดกรองสุขภาพเบื้องต้น สำหรับประกอบการ
ดูแลนักศึกษาที่เข้าร่วมกิจกรรมฯ และวางแผนเตรียมพร้อมในการปฏิบัติงานของมหาวิทยาลัยเชียงใหม่ใน
การจัดกิจกรรมประเพณีรับน้องขึ้นดอย ปี 2566 ซึ่งการเก็บข้อมูลมีความจำเป็นต้องเข้าถึงข้อมูลส่วนบุคคล 
เพื่อตรวจสอบความถูกต้องและส่งต่อไปยังศูนย์สุขภาพ มช. (คลินิกไผ่ล้อม) เพื่อรับการตรวจคัดกรอง
สุขภาพโดยละเอียด และผู้จัดกิจกรรมของคณะที่นักศึกษาสังกัด 
จึงขอความกรุณานักศึกษาคัดกรองสุขภาพด้วยความเป็นจริงสำหรับการนำเสนอข้อมูล
สุขภาพจะถูกนำเสนอในภาพรวมเท่านั้น
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;ข้อมูลที่เกี่ยวข้องกับนักศึกษาจะถูกเก็บเป็นความลับและข้อมูลใดที่สามารถระบุถึงตัวนักศึกษาจะไม่ปราก
                    ฎในฐานข้อมูลสาธารณะ ทั้งนี้ หากนักศึกษาไม่ยินยอมให้เปิดเผยข้อมูลทางสถิติของตนเองในภายหลัง
                    สามารถติดต่อขอยกเลิกการอนุญาตให้ใช้ข้อมูลได้ที่ กองพัฒนานักศึกษา สำนักงานมหาวิทยาลัย
                    อีเมล............................ หรือติดต่อสอบถามได้ที่หมายเลขโทรศัพท์.....................
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;การให้ข้อมูลสุขภาพส่วนบุคคลจะเป็นประโยชน์อย่างยิ่งในการดูแลนักศึกษาตลอดการเข้าร่วมกิจกรรมฯ
                    ในครั้งนี้
                </p>
                <p>
                    หมายเหตุ กรณีที่นักศึกษามีความเสี่ยงด้านสุขภาพ แล้วมีการแจ้งข้อมูลไม่ครบถ้วน หรือปกปิดข้อมูล
                    อาจส่งผลต่อการให้การดูแลช่วยเหลือจากทีมแพทย์และพยาบาลที่อาจล่าช้า หากเกิดเหตุสุดวิสัย
                    ให้อยู่ในความรับผิดชอบของนักศึกษา
                </p>
            </div>
            <div className="flex items-center text-2xl">
                <label
                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                    htmlFor="checkbox-8"
                    data-ripple-dark="true"
                >
                    <input 
                        onClick={() => setActive(!active)}
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                        id="checkbox-8"
                    />
                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>

                </label>
                <label>ยินยอม  </label>
            </div>
            <div className="flex flex-row justify-between space-x-4">
                <div className="basis-1/4">
                    <a href='./'>
                        <button className="w-40 py-4 px-6 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                            ยกเลิก
                        </button>
                    </a>
                </div>
                <div className="basis-1/4">
                    <button disabled={!active} onClick={goSur} style={{backgroundColor: active == false ? '#B8B8B8': ''}} className="w-40 py-4 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        ตกลง
                    </button>
                </div>
            </div>
        </div>

    )
}


