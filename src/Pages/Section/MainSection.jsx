import React from "react";
import { Layout } from "../../Layout/Layout";
import { dataWawan } from "../data";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";

export const MainSection = (props) => {
    const idx = props.index;
    return (
        <Layout>
            <div className="cards">
                { dataWawan[idx].content.map((content, cidx) => (
                    <Link to={'/'+dataWawan[idx].slug+'/'+content.slug} key={cidx}>
                        <Card
                            slug={content.slug}
                            title={content.nama}
                            body={content.body}
                            image={content.image}
                        />
                    </Link>
                )) }
            </div>
        </Layout>
    )
}
