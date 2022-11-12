import classes from "./Banner.module.css"

const Banner = (props) => {
    return(
        <div className={classes.banner}>
            <div className={classes.image}><img src={props.image} alt="banner_image" /></div>
            <div className={classes.banner_card}>
                <h2>{props.title}</h2>
                <div className={classes.description}>{props.description}</div>
            </div>
        </div>
    )
}

export default Banner