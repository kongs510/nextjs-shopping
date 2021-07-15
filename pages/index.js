import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";

export default function Home() {
  const [list, setList] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false)
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>kongs510 | shpping mall</title>
        <meta name="description" content="kongs 의 블로그 연습용입니다."></meta>
      </Head>
      {isloading && (
        <div class="ui segment" style={{ padding:"300px 0",boxShadow:"none",border:"none"}}>
          <div class="ui active inverted dimmer">
            <div class="ui medium text loader">Loading</div>
          </div>
        </div>
      )}
      {!isloading && (
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
      )}
    </div>
  );
}
