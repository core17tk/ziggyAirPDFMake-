import React, {useState} from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,    
  BarElement
)

const GenerateGraph_03 = () => {
  const [imageURL, setImageURL] = useState('')

  var data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
  }

  var options =  {
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    },

    legend: {
      labels: {
        fontSize: 26
      }
    },
    animation : {
      onComplete : function(){    
        const data = document.getElementById('graph')
        setImageURL(data.toDataURL())
        console.log(imageURL)
      }
    }
  }

  // const getData = (e) => {
  //   e.preventDefault()
  //   console.log(imageURL)
  // }

  return (
    <div>
      <Bar id='graph'
        data={data}
        height={400}
        options={options}
      />
      {/* <form onSubmit={getData}>
        <button type='submit'> click me </button>
      </form> */}
    </div>
    
  )
}

export default GenerateGraph_03