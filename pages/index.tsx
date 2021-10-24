/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
    const [isBonesDay, setIsBonesDay] = useState(true);
    return (
        <>
            <main>
                <div className="reading">
                    <button onClick={() => setIsBonesDay(!isBonesDay)}>
                        It's a <br /> {isBonesDay ? "no" : ""}bones
                        <br /> day!
                    </button>
                </div>

                <a href="https://www.tiktok.com/@jongraz?" className="social-share">
                    <div className="ttlogo">
                        <img src="/tiktok_logo.png" />
                    </div>
                    @jongraz
                </a>
            </main>
        </>
    );
};

export default Home;
