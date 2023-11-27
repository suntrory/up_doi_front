"use client"
import Head from "next/head";
import { useState } from "react";

export default function Test() {
  const [candidat, setCandidat] = useState({
    lastName: "",
    firstName: "",
  });
  const [user, setUser] = useState()

  const onSubmit = async () => {
    if (candidat.lastName === "" || candidat.firstName === "")
      return alert("last name or first name is empty");

    // await fetch("/api/myform", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(candidat),
    //     }).then(res=>res.json()).then(data=>setUser(data.user))
  };
  return (
    <div>
      <Head>
        <title> Next.js submit form</title>
      </Head>

      <form
        onSubmit={onSubmit}
        className="w-1/3 justify-center border-2 flex flex-col gap-4 m-4 p-2"

      >
        <label htmlFor="Last name">Last name</label>
        <input
          className="border-2 border-gray-200  p-2"
          onChange={(event) => {
            setCandidat({ ...candidat, lastName: event.target.value });
          }}
        ></input>

        <label htmlFor="First name">First name</label>

        {/* <option value="">เลือกคณะ/วิทยาลัย</option>
        <option value="01">คณะมนุษยศาสตร์</option>
        <option value="02">คณะศึกษาศาสตร์</option>
        <option value="03">คณะวิจิตรศิลป์</option>
        <option value="04">คณะสังคมศาสตร์</option>
        <option value="05">คณะวิทยาศาสตร์</option>
        <option value="06">คณะวิศวกรรมศาสตร์</option>
        <option value="07">คณะแพทยศาสตร์</option>
        <option value="08">คณะเกษตรศาสตร์</option>
        <option value="09">คณะทันตแพทยศาสตร์ </option>
        <option value="10">คณะเภสัชศาสตร์</option>
        <option value="11">คณะเทคนิคการแพทย์ </option>
        <option value="12">คณะพยาบาลศาสตร์</option>
        <option value="13">คณะอุตสาหกรรมเกษตร</option>
        <option value="14">คณะสัตวแพทยศาสตร์ </option>
        <option value="15">คณะบริหารธุรกิจ</option>
        <option value="16">คณะเศรษฐศาสตร์</option>
        <option value="17">คณะสถาปัตยกรรมศาสตร์</option>
        <option value="18">คณะการสื่อสารมวลชน</option>
        <option value="19">คณะรัฐศาสตร์และรัฐประศาสนศาสตร์</option>
        <option value="20">คณะนิติศาสตร์</option>
        <option value="21">วิทยาลัยศิลปะ สื่อ และเทคโนโลยี</option>
        <option value="24">วิทยาลัยนานาชาตินวัตกรรมดิจิทัล</option> */}

        <button
          className="bg-black text-white text-sm font-medium p-2 rounded "
          type="submit"
        >
          <>Submit</>
        </button>
      </form>
      <div className="p-2">{user ? 'user is : ' + user : ''}</div>
    </div>
  );
}
