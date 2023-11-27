"use client"
import React, { useEffect, useState } from 'react'; 
import ExcelJS from 'exceljs';
  
function App() { 

    const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(async (data) => {
        setData(data);
      })
      .then((json) => console.log(json));
  }, []);

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("My Sheet");

  sheet.properties.defaultRowHeight = 80;

  // // sheet.getRow(1).border = {
  // // //   top: { style: "thick", color: { argb: "FFFF0000" } },
  // // //   left: { style: "thick", color: { argb: "000000FF" } },
  // // //   bottom: { style: "thick", color: { argb: "F08080" } },
  // // //   right: { style: "thick", color: { argb: "FF00FF00" } },
  // // // };

  // // // sheet.getRow(1).fill = {
  // // //   type: "pattern",
  // // //   pattern: "darkVertical",
  // // //   fgColor: { argb: "FFFF00" },
  // // // };

  // // // sheet.getRow(1).font = {
  // // //   name: "Comic Sans MS",
  // // //   family: 4,
  // // //   size: 16,
  // // //   bold: true,
  // // // };

  sheet.columns = [
    {
      header: "Id",
      key: "id",
      width: 10,
    },
    { header: "Title", key: "title", width: 32 },
    {
      header: "Brand",
      key: "brand",
      width: 20,
    },
    {
      header: "Category",
      key: "category",
      width: 20,
    },
    {
      header: "Price",
      key: "price",
      width: 15,
    },
    {
      header: "Rating",
      key: "rating",
      width: 10,
    },
    {
      header: "Photo",
      key: "thumbnail",
      width: 30,
    },
  ];
  sheet.addRow({
    id: 'product?.id',
    title: 'product?.title',
    brand:' product?.brand',
    category: 'product?.category',
    price: 'product?.price',
    rating: 'product?.rating',
  });
  sheet.addRow({
    id: 'product?.id',
    title: 'product?.title',
    brand:' product?.brand',
    category: 'product?.category',
    price: 'product?.price',
    rating: 'product?.rating',
  });
  sheet.addRow({
    id: 'product?.id',
    title: 'product?.title',
    brand:' product?.brand',
    category: 'product?.category',
    price: 'product?.price',
    rating: 'product?.rating',
  });
  sheet.addRow({
    id: 'product?.id',
    title: 'product?.title',
    brand:' product?.brand',
    category: 'product?.category',
    price: 'product?.price',
    rating: 'product?.rating',
  });
  useEffect(() => {
  workbook.xlsx.writeBuffer().then(function (data) {
    const blob = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    
       const url = window.URL.createObjectURL(blob);
       let gg = blob.text();
       console.log(gg)
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "download.xlsx";
      anchor.click();
      window.URL.revokeObjectURL(url);
    
     
  });
}, [])



} 
  
export default App;
