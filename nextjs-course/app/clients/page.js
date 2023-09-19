'use client'

import Link from 'next/link';
import { useRouter,usePathname, useSearchParams } from 'next/navigation';

function ClientPage() {

    const router = useRouter();


    const clients = [
      { id : 'max', name: 'Maximilian'},
      { id : 'manu', name: 'Manuel'},
    ];

    function loadProjectHandler() {
        // load data...

        // Next.js 13 버전에서는 객체 형식으로 페이지를 이동하는 것이 더 이상 지원되지 않음
        // router.push({
        //     pathname: '/clients/[id]',
        //     query: { id: 'max'}
        // });

        router.push('/clients/max')
    }

    return (
        <div>
            <h1>The Clients Page</h1>
            <h2>페이지 네비게이션</h2>
            <ul>
                {clients.map(client => <li key={client.id}>
                    {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
                    {/* 현재 아래 객체 형식 문법 버전 13에서 지원 안함  */}
                    {/* <Link href={{
                        pathname: '/clients/[id]',
                        query: { id: client.id },
                    }}>{client.name}</Link> */}
                    <Link href={`/clients/[id]?id=${client.id}`}>{client.name}</Link>
                </li>)}
            </ul>
            <ul>
                <li>
                    <button onClick={loadProjectHandler}>Load Projecft A</button>
                </li>
            </ul>
        </div>
    );
}

export default ClientPage;