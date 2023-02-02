import { Topbar } from "@/components/Topbar";

export default function Home() {
    return (
        <>
            <Topbar />
            <main>
                <h1>Pet Name Generator</h1>
                <h2>
                    Generate funny and customizable name for your pet using
                    Artificial Intelligence
                </h2>
                <p>Powered by Co:here</p>
                <button className="btn">Start generating</button>
            </main>
        </>
    );
}
