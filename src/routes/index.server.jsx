import { Suspense } from "react";

import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";

export default function Home() {
  return (

    <Layout>
      <Suspense>
        <FeaturedCollections />
      </Suspense>
    </Layout>
    // <section className="p-6 md:p-8 lg:p-12">
    //   <h1 className="font-extrabold mb-4 text-5xl md:text-7xl">Hello World!</h1>
    //   <p className="font-bold md-3">Welcome to Hydrogen.</p>
    //   <p>
    //     Hydrogen is a front-end web development framework
    //     used for building
    //     Shopify custom storefronts.
    //   </p>
    // </section>
  );
}
