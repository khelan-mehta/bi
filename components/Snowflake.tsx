const Snowflake = () => {
    return (
        <section className="fixed top-0 left-0 -z-[1] overflow-visible h-full w-full">
            {Array.from({ length: 50 }, (_, i) => i).map((_,idx) => {
                return (<div className="snowflake" key={idx}></div>)})}
            
             {/* <div className="snowflake"></div>
             <div className="snowflake"></div>
             <div className="snowflake"></div>
             <div className="snowflake"></div>
             <div className="snowflake"></div>
             <div className="snowflake"></div>

             <div className="snowflake"></div>
             <div className="snowflake"></div> */}
             
        </section>
    )
}

export default Snowflake;