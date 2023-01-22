// import { facebook, github } from "../assets";

const styles = {
    boxWidth: "xl:max-w-[1920px] w-full",
    
    title: "font-poppins font-semibold text-4xl ss:text-6xl text-white",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingSmallerX: "sm:px-12 px-4",
    
    paddingY: "sm:py-16 py-6",
    paddingSmallerY: "sm:py-12 py-4",
    
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    card: " aspect-[4/3] max-h-[300px] rounded-b-lg shadow-lg h-[200px] md:h-[300px] ",

    mediaCard: "flex flex-col items-start sm:items-center p-2 sm:flex-row",
    mediaText: "pl-4 pb-2 text-base ss:text-xl",
    mediaTittle: "pl-4 pb-2 text-4xl",
    smallImage: "w-[55px] h-[55px] ml-2",
    smallImageBackground: `flex justify-center items-center h-[80px] w-[80px] rounded-2xl`,

};

export const layout = {
    cardHolder: `flex-col rounded-2xl bg-secondary bg-clip-padding p-2 px-2 m-2 my-4`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};


export default styles;

