export default function Techstack () {

    const ts = ["nextjs", "tailwindcss", "capacitorjs", "react", "rust"];

    return (<>
        {ts.map((nm, idx) => {
            return (<div key={idx} className="flex justify-center items-center flex-col">
                <img src="/brand.jpg" alt="techstack-image" height={64} width={64} />
                <p className="text-center">{nm}</p>
            </div>)
        })}
    </>)
}