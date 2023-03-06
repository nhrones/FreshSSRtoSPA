import { Head } from "$fresh/runtime.ts";
import HiddenRef from "../islands/HiddenRef.tsx";

export default function Home() {
    return (
        <>
            <Head>
                <title>Fresh SPA</title>
                <link rel="stylesheet" href="./style.css" />
            </Head>
            <div>
                <HiddenRef></HiddenRef>
                <p>
                    Note: The visible elements on this page are NOT island elements. 
                    And yet they are dynamic user elements here on the client!  
                    This page is comprised of simple HTML in /routes/index.tsx, simple css in /static/style.css, 
                    and finally pure typescript client code in the /app/ folder.  
                </p>
                <button id='testbtn'>Click Me</button>
                <button id='howbtn'>How?</button>
                <a href='https://github.com/nhrones/FreshSPA'>See the code!</a>
                <pre id='logger'></pre>
            </div>
            <div>
                <a href="https://fresh.deno.dev">
                    <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge.svg" alt="Made with Fresh" />
                </a>
            </div>

        </>
    );
}
