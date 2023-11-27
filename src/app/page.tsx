import Image from 'next/image'
import styles from '@/app/page.module.css';
import btnStyle from '@/app/Button.module.css';
import { MyComponent } from '@/app/action/surveydata';

export default function Home() {

  //const response = fetch

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyComponent/>
      <p style={{color: 'blue'}}></p>
      <h1 className="font-black text-3xl font-mono">แบบสอบถามเข้าร่วมประเพณีรับน้องขึ้นดอย</h1>
      <a href="./check_survey">
        <button className="py-4 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          เริ่มทำแบบสอบถาม
        </button>
      </a>
      <div className="relative flex place-items-center
       before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial
        before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] 
        after:translate-x-1/3 after:bg-gradient-conic
        after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent
         before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        
      </div>
    </main>
  )
}
