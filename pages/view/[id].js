import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
import Head from "next/head";

export default function post({ item }) {

    return (
        <>
            <Head>
                <title>{item.name}</title>
                <meta name="description" content={item.description}></meta>
            </Head>
            {item && <Item item={item} />}
        </>
    )
};

export async function getServerSideProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
        },
    };
} []