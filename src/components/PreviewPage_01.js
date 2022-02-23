import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import GenerateGraph from './GenerateGraph';


import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf'

var pdfMake = require('pdfmake/build/pdfmake.js');

const PreviewPage = () => {
  const {userValue} = useContext(TaskContext)
  const {location, compliedBy, monitoringPeriod, compliedOn} = userValue

  const onButtonClick = () => {
    
    htmlToImage.toPng(document.getElementById('myPage'), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          const pdf = new jsPDF("portrait", "mm", "a4");
          const imgProps= pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(dataUrl, 'PNG', 0, 0,pdfWidth, pdfHeight);
          pdf.save("download.pdf"); 
        })
  };

  const downloadPDF = (e) => {
    e.preventDefault()
    // var docDefinition ={
    //     content:[
    //         "new file is working"
    //     ]
    // }
    var docDefinition = {
        content: [
            document.getElementById('testingID').textContent
        ]
    }
    pdfMake.createPdf(docDefinition).download()
}

  const data = [
    { name: "Facebook", value: 1400},
    { name: "Google", value: 3000},
    { name: "Youtube", value: 5000}
  ]


  return (
    <form onSubmit={downloadPDF}>
      <div className="" id='testingID' >
            <h1 className='my-10 flex justify-center form-label text-3xl text-gray-700 text-base font-medium'> Air Quanlity Report </h1>
            <h1 className='my-10 flex text-blue-500 justify-center form-label text-3xl text-gray-700 text-base font-medium'> January 2022 </h1>

        <div className='grid grid-cols-6 gap-2'>
          
          <div className="col-start-2">
            <h1 className='uppercase text-lg font-medium text-gray-400 text-base'><i class="fas fa-map-marker-alt"></i> Location </h1>
          </div>

          <div className="col-end-6 ">
            <h1 className='uppercase text-lg font-medium text-gray-400 text-base'><i class="fas fa-user"></i> Complied By </h1>
          </div>

          <div className="col-start-2">
            <h1 className='text-xl text-gray-700 text-base font-medium'> {location} </h1>
          </div>
          
          <div className="col-end-6 ">
            <h1 className='text-xl text-gray-700 text-base font-medium'> {compliedBy} </h1>
          </div>
          
          <div className="col-start-2 mt-5">
            <h1 className='uppercase text-lg font-medium text-gray-400 text-base'><i class="fas fa-calendar-alt"></i> Monitizing Period </h1>
          </div>

          <div className="col-end-6 mt-5">
            <h1 className='uppercase text-lg font-medium text-gray-400 text-base'><i class="fas fa-clock"></i> Complied On </h1>
          </div>

          <div className="col-start-2 ">
            <h1 className='text-xl text-gray-700 text-base font-medium'> {monitoringPeriod} </h1>
          </div>

          <div className="col-end-6 ">
            <h1 className='text-xl text-gray-700 text-base font-medium'> {compliedOn} </h1>
          </div>

        </div>

        <div className="flex justify-center mt-10">
          <h1 className="px-6 py-2.5 rounded-full text-xl font-semibold bg-neutral-800 text-white uppercase"> Average Air Quality Rating </h1>
        </div>

        <div className='grid grid-cols-6 gap-2'>

          <div className="col-start-2">
            <GenerateGraph data={data}/>
          </div>

          <div className="col-span-6 col-start-4 my-36">
            <h1 className='text-red-500 text-2xl text-gray-700 text-base font-medium'> Good (8 CO2)</h1>
            <h1 className='text-yellow-500 text-2xl text-gray-700 text-base font-medium'> Medium (2 PM, 1 VOC) </h1>
            <h1 className='text-green-500 text-2xl text-gray-700 text-base font-medium'> Poor (2 PM) </h1>
          </div>

        </div>

      </div>

        <div className="flex justify-center">
        <button type='submit' className="my-3 px-10 py-3 bg-blue-700 text-white font-medium text-lg 
          leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg 
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
          active:shadow-lg transition duration-150 ease-in-out" > Download </button>
      </div>
      
    </form>
  ) 
}

export default PreviewPage