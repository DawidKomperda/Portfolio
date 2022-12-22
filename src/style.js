// import { facebook, github } from "../assets";

const styles = {
    boxWidth: "xl:max-w-[1920px] w-full",
    
    title: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[60px] leading-[66.8px]",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingSmallerX: "sm:px-12 px-4",

    paddingY: "sm:py-16 py-6",
    paddingSmallerY: "sm:py-12 py-4",
    
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    card: "w-[275px] h-[250px] rounded-[40px] shadow-lg sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[300px]",

    mediaCard: "flex flex-col items-start sm:items-center p-5 sm:flex-row",
    mediaText: "pl-5 pb-2 text-base ss:text-xl",
    mediaTittle: "pl-5 pb-2 text-4xl",
    smallImage: "w-[55px] h-[55px]",
    smallImageBackground: `flex justify-center items-center h-[80px] w-[80px] rounded-[50%]`

};

export const layout = {
    cardHolder: `lex flex-col bg-secondary rounded-[40px] p-6 m-4`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};


export default styles;

