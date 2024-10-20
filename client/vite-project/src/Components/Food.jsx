import {  useSelector } from "react-redux";


const Food=()=>{
  const mealData=useSelector(state=>state.detailsData.foodplan)
  const title=useSelector(state=>state.detailsData.foodTitle)
  // console.log(plan)


  return (
    <div>
      <div className="flex flex-col items-center text-black">
        <h1 className="text-5xl font-semibold text-white">Plan</h1>
        <h2 className="text-2xl font-semibold text-white mt-2">{title}</h2>
        {mealData.map((item, index) => (
        <div
          key={item._id}
          className="w-[1150px] bg-neutral-100 rounded mt-10 mb-5 ml-4 p-4 flex flex-col drop-shadow-lg hover:scale-105 cursor-pointer"
        >
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mb-4">Meal: {item.meal}</h1>
            {item.suggestions.map((suggestion, suggestionIndex) => (
              <div key={suggestionIndex} className="flex flex-col mb-4">
                <h3 className="font-bold">Suggestion {suggestionIndex + 1}: {suggestion.name}</h3>
                <p>Ingredients:</p>
                <ul className="list-disc list-inside ml-4">
                  {suggestion.ingredients.map((ingredient, ingredientIndex) => (
                    <li key={ingredientIndex}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}



      </div>
    </div>
  )

}
export default Food