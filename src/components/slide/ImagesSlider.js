import {useState} from 'react';
const ImagesSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        background: `url(${slides[currentIndex].url})`
    };
    const sliderStyles = {
        height: "100%",
        position: "relative"
    };
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transorm: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        Zindex: 1,
        cursor: "pointer"
    }
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transorm: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        Zindex: 1,
        cursor: "pointer"
    }

    const dotsContainerStyle = {
        display:"flex",
        justifyContent: "center"
    }

    const dotsStyles = {
        color:"#fff",
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px"
    }



    const gotoPrevious = () => {
        const isFirstSlide= currentIndex ===0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const gotoNext = () => {
        const isFLastSlide= currentIndex === slides.length -1;
        const newIndex = isFLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)

    }
    

    return(
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={gotoPrevious}>←</div>
            <div style={rightArrowStyles} onClick={gotoNext}>→</div>
            <div style={slideStyles}> </div>
            {/* <div style={dotsContainerStyle}>
                {slides.map((slide, slideIndex)=>( 
                <div key={slideIndex} style={dotsStyles} onClick={() => goToSlide(slideIndex)}>●</div>
                ))}
            </div> */}
        </div>
    )
}
export default ImagesSlider;