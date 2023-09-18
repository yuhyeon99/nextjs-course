import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Next World!</h1>
      <ul>
        <li>
          {/* 새 페이지를 불러오기 위해 새 HTTP요청을 보냄 */}
          {/* 즉, React앱을 싫행  할 때 갖는 앱 상태가 바뀜 */}
          {/* React에 적합하지 않는 방법 */}
          {/* <a href="/about">About</a> */}

          {/* HTTP 요청을 보내지 않고 앱 상태도 바뀌지 않음 */}
          {/* 링크에 마우스를 대자마자 이동하려는 페이지로 자동으로 데이터를 미리 패칭하는 최적화 방법이 있음 */}
          {/* replace 속성 : 새로운 페이지를 또 띄우지 않고 현재 페이지를 새 페이지로 바꿈 => 뒤로 갈 수 없음 */}
          <Link replace href="/about">About</Link>

        </li>
        
        <li>
          <Link href="/clients">clients</Link>
        </li>
      </ul>
    </main>
  )
}
