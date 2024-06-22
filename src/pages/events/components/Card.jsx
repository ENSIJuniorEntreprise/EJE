function Card({ title1 , title2 , text , isBlueTitle, link}){
    return(
        <div className="xxs:w-[90%] flex flex-col items-center bg-[#1f212d] w-3/4 md:w-[500px] lg:w-[50vw] h-auto md:h-[270px] pt-4 md:pt-6 pb-4 md:pb-6 pl-4 md:pl-10 pr-4 md:pr-10 shadow drop-shadow-cardShadow">
            <span className="flex flex-row pt-2 items-center">
                {isBlueTitle ? (
                    <>
                    <p className="mb-2 font-bold tracking-wide text-[rgb(45,162,221)] sm:text-3xl xs:text-2xl xxs:text-xl md:text-4xl font-proxima-nova-bold">{title1}</p>
                    <p className="mb-2 font-bold tracking-wide text-[#e0ded2] xs:text-2xl sm:text-3xl xxs:text-xl pl-3 md:text-4xl font-proxima-nova-bold">{title2}</p>
                    </>
                ) : (
                    <>
                    <p className="mb-2 font-bold tracking-wide text-[#e0ded2] xs:text-2xl sm:text-3xl md:text-4xl font-proxima-nova-bold">{title1}</p>
                    <p className="mb-2 font-bold tracking-wide text-[rgb(45,162,221)] sm:text-3xl xs:text-2xl pl-3 md:text-4xl font-proxima-nova-bold">{title2}</p>
                    </>
                )}

            </span>
            <p className="text-[#e0ded2] text-center font-proxima-nova-regular font-medium sm:text-lg mmxs:text-sm md:text-xl text-xs leading-normal md:leading-[25px] w-full md:w-[450px] md:h-[119.39px] md:pt-1 overflow-hidden pb-2" style={{ lineHeight: "1.1", maxHeight: "3.6em", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: "3" }}>
    {text}
</p>
          
<a href={new URL(link, window.location.origin).href} target="_blank" rel="noopener noreferrer" className="xxs:w-[100px] items-center w-1/4 md:w-[250px] h-auto font-proxima-nova-bold text-xs sm:text-lg sm:w-[200px] md:text-xl font-semibold text-center text-[#e0ded2] bg-transparent border-[#2da2dd] py-1 border-2 md:mt-10 mt-4 shadow-cardShadow">
    Learn more
</a>

        </div>
    )
}
export default Card