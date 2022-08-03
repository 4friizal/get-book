import { useRouter } from "next/router";

import Layout from "../../components/layout";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout headTitle={"Product Detail"}>
      <div>Product {id}</div>
    </Layout>
  );
}
