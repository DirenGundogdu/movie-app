import React from 'react'
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar"; 

export default function Movies({list}) {
  let perc = () => {
    return (list && list.vote_average * 10);
  };

    const props = {
        percent: perc(), // Circular Progress Bar settings
        colorCircle: "#081c22",
        fontColor: "#fff",
        fontSize: "1.6rem",
        fontWeight: 400,
        size: 40,
        stroke: 5,
        strokeBottom: 10,
        speed: 5000,
        cut: 0,
        rotation: -90,
        fill: "#081c22",
        unit: '%',
        textPosition: "0.35em",
        number: true,
        linearGradient: ["#1ed5a9 ","#1ed5a9"]
      };

      const [toggled, setToggled] = React.useState(true);
      const [toggledtwo, setToggledtwo] = React.useState(true);

      const toggleImage = () => setToggled(!toggled);
      const toggleImagetwo = () => setToggledtwo(!toggledtwo);
   
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${list && list.poster_path}`} alt=""
            className='w-36 h-56 rounded-lg' />
            <div className='absolute top-[198px] ml-2'>
            <CircularProgressBar {...props} ></CircularProgressBar>
            </div>
            <div className='mt-4'>
            <h2 className='font-bold w-32'>{(list && list.title) || (list && list.name)}</h2>
            
            <p className='text-gray-700 text-opacity-50'>{(list && list.release_date) || (list && list.first_air_date)}</p>
            </div>
            <div className='flex flex-row'>
              <ul className='grid grid-cols-2 gap-3'>
                <li> {/* thumbs up */}
                    {toggledtwo && <button onClick={toggleImage}><img src="https://cdn-icons.flaticon.com/png/128/4480/premium/4480427.png?token=exp=1634478935~hmac=0eada7212a5699b3bfc9b9235d6b7497" alt="" className='w-6 h-6'/></button>}
                </li>
                <li>{/* thumbs down */}
                   {toggled && <button onClick={toggleImagetwo}><img src="https://cdn-icons.flaticon.com/png/512/4480/premium/4480426.png?token=exp=1634478900~hmac=574cce47a099378abfdb27df93b0cf89" alt="Cat" className='w-6 h-6 mt-1' /></button>  }
                </li>
              </ul>
            </div>
            </div>
     
    )
}
