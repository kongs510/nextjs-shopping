import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>kongs510 | shpping mall</title>
        <meta name="description" content="kongs 의 블로그 연습용입니다."></meta>
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
[];
