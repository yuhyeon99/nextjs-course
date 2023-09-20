'use client'

import { usePathname, useSearchParams } from 'next/navigation';

function eventDetailPage({ params }){


    return(
        <div>
            <h1>Event Detail Page</h1>
            <ul>
                <li>Detail Id : {params.id}</li>
            </ul>
        </div>
    )
}

export default eventDetailPage;