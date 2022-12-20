// import { facebook, github } from "../assets";

const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    
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

    card: "sm:w-[350px] sm:h-[300px] xs:w-[250px] xs:h-[225px] w-[275px] h-[250px] rounded-[40px] shadow-lg m-2",

    smallImage: "w-[55px] h-[55px]",
    smallImageBackground: `flex justify-center items-center h-[80px] w-[80px] rounded-[50%]`

};

export const layout ={
    // section: `flex md:flex-row flex-col ${styles.paddingY}`,
    // sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    // sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    // sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};


export default styles;

