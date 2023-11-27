'use client'
import Image from 'next/image'
import styles from '@/app/page.module.css';
import btnStyle from '@/app/Button.module.css';
import './../global.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export  default async function Home() {
    const router = useRouter()
    const [data, setData] = useState(null)

    const handleChange = () => { 
    
        console.log('The checkbox was toggled'); 
        
      };

        // const response = await fetch("http://localhost:3333/getCount");
        // const allPostsData = await response.json();
        // console.log(allPostsData);
    return (
        <div>  
            <p>{"allPostsData"}</p>
        
        </div> 
    )
}


