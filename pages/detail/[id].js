import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
import Head from "next/head";

export default function Post({ item, name }) {
  const router = useRouter();
  console.log(router.isFallback);
  if (router.isFallback) {
    return (
      <div
        className="ui segment"
        style={{ padding: "300px 0", boxShadow: "none", border: "none" }}
      >
        <div className="ui active inverted dimmer">
          <div className="ui medium text loader">Loading</div>
        </div>
      </div>
    );
  }
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1004" } },
      { params: { id: "912" } }, // See the "paths" section below
      { params: { id: "911" } }, // See the "paths" section below
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
