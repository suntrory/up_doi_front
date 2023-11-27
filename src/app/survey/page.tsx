'use client'
import Image from 'next/image'
import styles from '@/app/page.module.css';
import btnStyle from '@/app/Button.module.css';
import './../global.css'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState, ChangeEvent, Component } from 'react'


export default function Home() {
    const router = useRouter();
    const [showMe, setShowMe] = useState(false);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()


        const formData = new FormData(event.currentTarget)
        let dd = {
            fname: formData.get('fname'),
            lname: formData.get('lname'),
        }
        const response = await fetch('http://localhost:3333/addRecoard', {
            method: 'POST',
            body: JSON.stringify(dd),
            headers: {
                "content-type": "application/json",
            },
        })

        // Handle response if necessary
        const data = await response.json()
        console.log('----------' + data);
        // ...
    }


    // async function onSubmit(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault()

    //     const formData = new FormData(event.currentTarget)
    //     console.log(formData.entries);

    //     await fetch("http://localhost:3333/addRecoard", {
    //         method: "POST",
    //         body: formData,
    //         headers: {
    //         "content-type": "application/json",
    //         },
    //     }).catch((e) => console.log(e));

    //     //router.push('./')

    //     // const response = await fetch('/api/submit', {
    //     //     method: 'POST',
    //     //     body: formData,
    //     // })

    //     // Handle response if necessary
    //     // const data = await response.json()
    //     // ...
    // }
    var toggle_congenital_disease = (e: any) => {
        if (e.target.checked) {
            setShowMe(true);
        }
    }
    var toggle_congenital_disease_invert = (e: any) => {
        if (e.target.checked) {
            setShowMe(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-between p-44 space-y-3 text-xl">
            <h1>ข้อมูลนักศึกษา</h1>
            <form onSubmit={onSubmit} className="w-2/3 justify-center border-2 flex flex-col gap-4 m-4 p-2" >
                <div className="flex w-72 flex-row gap-6 mx-6 my-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " name="fname"
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                ชื่อ
                            </label>
                        </div>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" " name="lname"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            นามสกุล
                        </label>
                    </div>
                </div>
                <div className="flex w-72 flex-row gap-6 mx-6 my-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                    <label className="flex h-full w-full select-none text-base leading-tight text-blue-gray-400">
                        คณะที่สังกัด
                        </label>
                        {/* <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" " name="gov"
                        /> */}
                        <select name="gov" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">เลือกคณะ/วิทยาลัย</option>
                            <option value="คณะมนุษยศาสตร์">คณะมนุษยศาสตร์</option>
                            <option value="คณะศึกษาศาสตร์">คณะศึกษาศาสตร์</option>
                            <option value="คณะวิจิตรศิลป์">คณะวิจิตรศิลป์</option>
                            <option value="คณะสังคมศาสตร์">คณะสังคมศาสตร์</option>
                            <option value="คณะวิทยาศาสตร์">คณะวิทยาศาสตร์</option>
                            <option value="คณะวิศวกรรมศาสตร์">คณะวิศวกรรมศาสตร์</option>
                            <option value="คณะแพทยศาสตร์">คณะแพทยศาสตร์</option>
                            <option value="คณะเกษตรศาสตร์">คณะเกษตรศาสตร์</option>
                            <option value="คณะทันตแพทยศาสตร์">คณะทันตแพทยศาสตร์ </option>
                            <option value="คณะเภสัชศาสตร์">คณะเภสัชศาสตร์</option>
                            <option value="คณะเทคนิคการแพทย์">คณะเทคนิคการแพทย์ </option>
                            <option value="คณะพยาบาลศาสตร์">คณะพยาบาลศาสตร์</option>
                            <option value="คณะอุตสาหกรรมเกษตร">คณะอุตสาหกรรมเกษตร</option>
                            <option value="คณะสัตวแพทยศาสตร์">คณะสัตวแพทยศาสตร์ </option>
                            <option value="คณะบริหารธุรกิจ">คณะบริหารธุรกิจ</option>
                            <option value="คณะเศรษฐศาสตร์">คณะเศรษฐศาสตร์</option>
                            <option value="คณะสถาปัตยกรรมศาสตร์">คณะสถาปัตยกรรมศาสตร์</option>
                            <option value="คณะการสื่อสารมวลชน">คณะการสื่อสารมวลชน</option>
                            <option value="คณะรัฐศาสตร์และรัฐประศาสนศาสตร์">คณะรัฐศาสตร์และรัฐประศาสนศาสตร์</option>
                            <option value="คณะนิติศาสตร์">คณะนิติศาสตร์</option>
                            <option value="วิทยาลัยศิลปะ สื่อ และเทคโนโลยี">วิทยาลัยศิลปะ สื่อ และเทคโนโลยี</option>
                            <option value="วิทยาลัยนานาชาตินวัตกรรมดิจิทัล">วิทยาลัยนานาชาตินวัตกรรมดิจิทัล</option>
                        </select>
                        {/* <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            คณะที่สังกัด
                        </label> */}
                    </div>
                </div>
                <div className="flex w-72 flex-row gap-6 mx-6 my-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" " name="id" maxLength={9}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            รหัสนักศึกษา
                        </label>
                    </div>
                </div>
                <div className="flex w-72 flex-row gap-6 mx-6 my-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" " name="age" maxLength={2}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            อายุ
                        </label>
                    </div>
                </div>

                <div className="flex w-72 flex-row gap-6 mx-6 my-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" " maxLength={10} name="tel"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            หมายเลขโทรศัพท์เคลื่อนที่
                        </label>
                    </div>
                </div>

                <div className="flex w-72 flex-row gap-6 mx-6 my-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" " maxLength={10} name="emer_tel"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-grey-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-grey-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-grey-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            หมายเลขโทรศัพท์ฉุกเฉิน
                        </label>
                    </div>
                </div>
                <div className="flex w-full flex-row gap-6 mx-6 my-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <label className="flex h-full w-full select-none text-base leading-tight text-blue-gray-400">
                            ประวัติการแพ้ยา
                        </label>
                        <div className="flex flex-col space-y-2">
                            <div className="text-base space-x-2">
                                <input
                                    type='radio'
                                    className="peer h-5 w-5 rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" " maxLength={10} name="ck_medic" />
                                <label>ไม่มี</label>
                            </div>

                            <div className="flex flex-row text-base space-x-2">
                                <input
                                    type='radio'
                                    className="peer h-5 w-5 rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" " maxLength={10} name="ck_medic" />
                                <label>ระบุ</label>
                                <input type="text"
                                    className="peer h-5 w-100 rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3"
                                    placeholder="ระบุ"></input>
                            </div>
                        </div>


                    </div>
                </div>
                <div style={{ marginTop: 50 }} className="flex w-full flex-row gap-6 mx-6 my-6">
                    <div className="relative h-full w-full min-w-[200px] min-h-[200px]">
                        <label style={{ marginBottom: 20 }} className="flex h-full w-full select-none text-base leading-tight text-blue-gray-400">
                            โรคประจำตัวที่ได้รับการวินิจฉัยจากแพทย์ (การแพ้ยา/อาหาร ไม่นับเป็นโรคประจำตัว)
                        </label>
                        <div className="flex flex-col space-y-2">
                            <div className="text-base space-x-2">
                                <input
                                    type='radio'
                                    className="peer h-5 w-5 rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" " maxLength={10} name="lost_medic" onChange={(e) => { toggle_congenital_disease_invert(e) }} />
                                <label>ไม่มี</label>
                            </div>

                            <div className="flex flex-row text-base space-x-2">
                                <input
                                    type='radio'
                                    className="peer h-5 w-5 rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-grey-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" " maxLength={10} name="lost_medic" onChange={(e) => { toggle_congenital_disease(e) }} />
                                <label>มี (ตอบได้หลายตัวเลือก)</label>



                            </div>
                            <div style={{ display: showMe ? "block" : "none" }} className="flex flex-col text-base space-x-2 space-y-1">
                                <input type="checkBox" value={1} name="disease1" /><label>โรคหัวใจ</label><input type="checkBox" value={2} name="disease2" /><label>โรคลมชัก</label>
                                <input type="checkBox" value={3} name="disease3" /><label>โรคหอบหืด</label><input type="checkBox" value={4} name="disease4" /><label>โรคภูมิแพ้อากาศ</label>
                                <input type="checkBox" value={5} name="disease5" /><label>โรคความดันโลหิตสูง</label><input type="checkBox" value={6} name="disease6" /><label>โรคชัก</label>
                                <input type="checkBox" value={7} name="disease7" />อื่น ๆ
                                <input type="text"
                                    className="peer h-5 w-100 rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3"
                                    placeholder="ระบุ"></input>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="flex w-72 flex-row gap-6 mx-6 my-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <button type='submit' className="w-40 py-4 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                            บันทึก
                        </button>

                    </div>
                </div>
            </form>
        </div>

    )
}


