'use client'

function EventDateList({ params }){
    
    const date = params.slug;
    
    console.log(date);

    return(
        <div>
            <ul>
                <li>{date}</li>
            </ul>
        </div>
    )
}

export default EventDateList;