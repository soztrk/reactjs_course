import classes from "./MealsList.module.css"
import MealItem from "./MealItem"

const MealsList = (props) => {

    

    return(
        <div className={classes.meals_list}>
            <ul>
                {props.items.map((val,index)=>{
                    return (
                        <MealItem
                        key={index}
                        id={val.id} 
                        name={val.name}
                        desc={val.description}
                        price={val.price} />
                    )
                })}
            </ul>
        </div>
    )
}

export default MealsList