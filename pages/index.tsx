import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
    const [isBonesDay, setIsBonesDay] = useState(true);
    return (
        <main className={styles.main}>
            <button onClick={() => setIsBonesDay(!isBonesDay)}>
                It's a {isBonesDay ? "no" : ""}bones day!
            </button>
        </main>
    );
};

export default Home;
