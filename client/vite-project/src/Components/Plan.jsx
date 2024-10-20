import {  useSelector } from "react-redux";

const Plan=()=>{
  const plan=useSelector(state=>state.detailsData.plan)
  const title=useSelector(state=>state.detailsData.planTitle)
  console.log(title)


  return (
    <div>
      <div className="flex flex-col items-center text-black">
        <h1 className="text-5xl font-semibold text-white">Plan</h1>
        <h2 className="text-2xl font-semibold text-white mt-2">{title}</h2>
        {plan.map((item, index) => (
          <div
            key={item._id}
            className="w-[1150px] bg-neutral-100 rounded mt-10 mb-5 ml-4 p-4 flex flex-col drop-shadow-lg hover:scale-105 cursor-pointer"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold mb-4">Day: {item.day}</h1>
              {item.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} className="flex flex-col mb-4">
                  <h3 className="font-bold">Exercise {exerciseIndex + 1}</h3>
                  <p>Name: {exercise.name}</p>
                  <p>Duration: {exercise.duration}</p>
                  <p>Repetitions: {exercise.repetitions}</p>
                  <p>Sets: {exercise.sets}</p>
                  <p>Equipment: {exercise.equipment}</p>
                </div>
              ))}
            </div>
          </div>
        ))}


      </div>
    </div>

  )

}

export default Plan