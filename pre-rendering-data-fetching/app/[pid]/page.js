import { Fragment } from "react";
import { getDummyData } from "../page";
import Link from "next/link";

const { products } = await getDummyData();

async function productDetailPage({ params }) {
  const { pid } = params;

  const loadedProduct = products.find((product) => product.id === pid);

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

// 아래 generateStaticParams 함수를 통해서 정적 배포 환경에서 동적 라우팅 과정을 정적으로 생성 할 수 있습니다.
// 만약 아래 배열의 요소가 10개라면 배포 단계에서 10개의 정적 사이트를 생성합니다.
export async function generateStaticParams() {
  // [ { pid: '1'}, {pid: '2'}, ...{pid: '200'}]
  return products.map((product) => ({
    pid: product.id.toString(),
  }));
}

async function getProductData() {}

export default productDetailPage;
