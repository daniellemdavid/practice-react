import { process_params } from "express/lib/router";


function PostCard(props){
    return(
        <section id = {props.id}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>

        </section>
    )
}