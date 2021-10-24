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
                        It's a {isBonesDay ? "no" : ""}bones day!
                    </button>
                </div>

                <a href="https://www.tiktok.com/@jongraz?" className="social-share">
                    <img src="/tiktok_logo.png" layout="fill" />
                    @jongraz
                </a>
            </main>
        </>
    );
};

export default Home;
