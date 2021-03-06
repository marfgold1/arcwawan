import React from "react";
import { Layout } from "../../Layout/Layout";
import { dataWawan } from "../data";
import { Card } from "../../components/Card/Card";
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <Layout>
            <h1>Wawancara ARC 2021</h1>
            <div className="cards">
                { dataWawan.map((mainRoute, idx) => (
                    <Link to={'/'+mainRoute.slug} key={idx}>
                        <Card
                            image={mainRoute.image}
                            slug={mainRoute.slug}
                            key={idx}
                            title={mainRoute.title}
                        />
                    </Link>
                )) }
            </div>
        </Layout>
    )
}