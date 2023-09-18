import Link from 'next/link';

function ClientPage() {

    const clients = [
      { id : 'max', name: 'Maximilian'},
      { id : 'manu', name: 'Manuel'},
    ];

    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map(client => <li key={client.id}>
                    {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
                    {/* 현재 아래 문법 버전 13에서 지원 안함  */}
                    {/* <Link href={{
                        pathname: '/clients/[id]',
                        query: { id: client.id },
                    }}>{client.name}</Link> */}
                    <Link href={`/clients/[id]?id=${client.id}`}>{client.name}</Link>
                </li>)}
            </ul>
        </div>
    );
}

export default ClientPage;