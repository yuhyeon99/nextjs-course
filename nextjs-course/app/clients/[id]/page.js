'use client'

import { usePathname, useSearchParams } from 'next/navigation';

export default function ClientDetailPage({ params }){
    const queryParams = useSearchParams();

    // 쿼리 파라미터 접근방식
    const queryId = queryParams.get('id');
    // path 파라미터 접근 방식
    const id = params.id;

    return (
        <div>
            <h1>ClientDetailId : {queryId ? queryId : id} </h1>
        </div>
    )
}