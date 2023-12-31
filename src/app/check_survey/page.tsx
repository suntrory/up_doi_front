"use client"
import Image from 'next/image'
import styles from '@/app/page.module.css';
import btnStyle from '@/app/Button.module.css';
import './../global.css'
import {useRouter} from 'next/navigation';
import {addCount} from '@/app/action/surveydata';

export default function Home() {

    const router = useRouter()

    const addC =async (params:any) => {
        let dataGo = {
            "status": 0
        }
        console.log(dataGo);
        // await fetch("http://localhost:3333/addCount", {
        //     method: "POST",
        //     headers: {
        //     "content-type": "application/json",
        //     },
        // }).catch((e) => console.log(e));
        addCount();
        
        router.push('./')
    };

  return (
    <div className="flex flex-col items-center justify-between p-44 space-y-5">
        <div className="flex flex-row">
            <p className='text-xl'>นักศึกษาแจ้งประสงค์จะเข้าร่วมประเพณีรับน้องขึ้นดอย</p>
        </div>
        <div className="flex w-96 flex-row justify-between">
            
            <div className="basis-3/4">
                <button onClick={addC} className="py-4 px-6 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                    ไม่ประสงเข้าร่วม
                </button>
            </div>
            <div className="basis-3/4">
                <a href='./pre_survey'>
                    <button className="py-4 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    ประสงเข้าร่วม
                    </button>    
                </a>
            </div>
            
            
        </div>
    </div>
        
  )
}


