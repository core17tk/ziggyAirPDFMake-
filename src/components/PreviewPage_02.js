import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');

const PreviewPage_02 = () => {
  const {userValue} = useContext(TaskContext)
  const {location, compliedBy, monitoringPeriod, compliedOn} = userValue

  const downloadPDF = (e) => {
    e.preventDefault()

    var docDefinition = {
        content: [
            {
              text: document.getElementById('mainTag').textContent, style: 'header'
            },
            {
              text: document.getElementById('dateTag').textContent, style: 'date'
            },
            {
              columns:[
                {
                  width: '50%',
                  text: 'Location', margin: [15, 30, 15, 2], fontSize: 10
                },
                {
                  width: '50%',
                  text: 'Complied By', margin: [15, 30, 15, 2], fontSize: 10
                }
              ]
            },
            {
              columns:[
                
                {
                  width: '50%',
                  text: document.getElementById('locationDataTag').textContent, style: 'marginStyle'
                },
                {
                  width: '50%',
                  text: document.getElementById('compliedDataTag').textContent, style: 'marginStyle'
                }
              ]
            },
            {
              columns:[
                {
                  width: '50%',
                  text: 'Monitering Date', margin: [15, 10, 15, 2], fontSize: 10
                },
                {
                  width: '100',
                  text: 'Complied On',  margin: [15, 10, 15, 2], fontSize: 10
                }
              ]
            },
            {
              columns:[
                
                {
                  width: '50%',
                  text: document.getElementById('monitoringDataTag').textContent, style: 'marginStyle'
                },
                {
                  width: '50%',
                  text: document.getElementById('compliedDataOnTag').textContent, style: 'marginStyle'
                }
              ]
            },
            {
              text: 'Average Air Quality Rating', alignment: 'center', fontSize: 22, margin: [10,30]
            }
            
        ],

        styles: {
          header: {
            alignment: 'center',
            bold: true,
            fontSize: 22,
            margin: 5
          },
          date: {
            alignment: 'center',
            bold: true,
            fontSize: 15,
            color: 'blue',
            margin: 5
          },
          marginStyle: {
            margin: 15
          }
        }
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
        
        <h1 id='mainTag'> Air Quality report </h1>
        <h1 id='dateTag'> January 2022 </h1>
        
        <h1 id='locationTag'> <i class="fas fa-map-marker-alt"></i> Location </h1>
        <h1 id='compliedByTag'> <i class="fas fa-user"></i> Complied By </h1>
        
        <h1 id='locationDataTag'> {location} </h1>
        <h2 id='compliedDataTag'> {compliedBy}</h2>
        <h2 id='monitoringDataTag'> {monitoringPeriod}</h2>
        <h2 id='compliedDataOnTag'> {compliedOn}</h2>

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

export default PreviewPage_02