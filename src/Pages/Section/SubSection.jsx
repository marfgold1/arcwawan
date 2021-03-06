import React from "react";
import { Layout } from "../../Layout/Layout";
import { dataWawan } from "../data";
import "./SubSection.scss";

export const SubSection = (props) => {
    const mainIdx = props.index || 0;
    const idx = props.profileIndex || 0;
    const data = dataWawan[mainIdx].content[idx];
    return (
        <Layout>
            <h1>{ data.nama } <span><small>{ dataWawan[mainIdx].slug+'/'+data.slug }</small></span></h1>
            <p>{ data.body }</p>
        </Layout>
    )
}
