'use client';

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Page({ params }) {
  // ex) /about?aboutDetail=3
  const aboutDetailId = useSearchParams().get("aboutDetail"); // 3
  // 폴더구조 about => [aboutDetail] => page.js
  // params.동적폴더명 => params.aboutDetail
  // ex) /about/3
  console.log(params.aboutDetail);
  
  return <div>My Post: {params.aboutDetail}</div>
}