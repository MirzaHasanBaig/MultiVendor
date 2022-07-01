import React,{useState, useEffect, useRef} from "react";
import "./Slider.css"
import styled from "styled-components";
import {sliderData,Categories} from "./DataSlider"
var i = 0;
const Container= styled.div`
background-image: url("/img/slider-back.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: block;
height: auto;
width: 100%;
overflow: hidden;
align-items: center;
justify-content: center;
`
const Data = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    align-items: left;
    flex-direction: column;
    justify-content: center;
    color: white;
`

const Heading = styled.h1`
    display: flex;
    margin-bottom: 30px;
    font-size: 40px;
    font-weight: bold;
`

const Category = styled.div`
    display: flex;
    margin-bottom: 10px;
    color: black !important;
`

const Button = styled.a`
    display: inline-flex;
    margin-bottom: 30px;
    text-decoration: none;
    border: 3px solid #F28C28 !important ;
    border-radius: 5px;
    padding: 10px;
    color: black !important;
`

const Img = styled.img`
    display: flex;
    width: 100%;
    height: 400px !important; 
    object-fit: contain;
    object-position: center
`
const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: Center;
    margin: 20px 0px;
    `
    
const Slider = ()=>{
    const body = useRef();
    const slideData = useRef();
    const SlideImg = useRef();
    const anime = ["slideInTop","slideInRight","slideInBottom","slideInLeft",""];
    const [Act, setAct] = useState(["Active","NonActive","NonActive","NonActive"]);
    const [slideIndex, setSlideIndex] = useState(0);
    function ChangeSlide(index){
        var ActiveArray = [];
            for(var i= 0; i < sliderData.length;i++){
                if(i===index){ActiveArray.push("Active")}
                else{ActiveArray.push("NonActive")}
            }
        setAct(ActiveArray);
        setSlideIndex(index);
    };  
    useEffect(()=>{
        slideData.current.addEventListener("animationend",slideData.current.classList.remove("fadeOut"));
        SlideImg.current.addEventListener("animationend",SlideImg.current.classList.remove("fadeOut"));
        var timer2;
        const timer1 = setTimeout(()=>{
            body.current.classList.add("mybody");
            slideData.current.classList.add("fadeOut");
            SlideImg.current.classList.add("fadeOut");
            timer2 = setTimeout(()=>{
            var count = (slideIndex+1)%sliderData.length;
            setSlideIndex(count);
            var ActiveArray = []; 
            for(var i= 0; i < sliderData.length;i++){
                if(i===count){ActiveArray.push("Active")}
                else{ActiveArray.push("NonActive")}
            }
            setAct(ActiveArray);
        },800);
        body.current.classList.remove("mybody");
        },5000);
        return ()=> {clearTimeout(timer1);clearTimeout(timer2)};
    },[slideIndex]);
    
    var items = sliderData.map((id)=>{
        return <Box style={{cursor: "pointer",marginLeft:"5px"}} onClick={() =>{ ChangeSlide(id-1);}}/>;
   })

    return <Container ref={body} style={{display:"flex"}}>
    <div style={{display:"flex",flex: 1.8,padding: "0px 20px",backgroundColor:"white",zIndex:1,height:"450px"}}>
    <div className="banner h-100 br-sm" style={{backgroundImage: "url(images/demos/demo1/banners/2.jpg)",backgroundColor: "#ebeced",width:"100%",}}>
        <div style={{backgroundColor:"rbga(0,0,0,0.1)",height:"100%",width:"100%"}}>
            <div className="banner-content content-top" style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"center",alignItems:"center"}}>
                <h5 className="banner-subtitle font-weight-normal mb-2" style={{paddingTop:"20px",fontSize:"18px"}}>Weekend Sale</h5>
                <hr className="banner-divider bg-dark mb-2"/>
                <h3 className="banner-title font-weight-bolder ls-25 text-uppercase" style={{fontSize:"14px"}}>
                    New Arrivals<br/> <span class="font-weight-normal text-capitalize">Collection</span>
                </h3>
                <a href="shop-banner-sidebar.html" class="btn btn-dark btn-outline btn-rounded btn-sm" style={{marginTop:"50px",backgroundColor:"black",color:"white"}}>shop Now</a>
            </div>
        </div>
        </div>
    </div>
    <div style={{display:"flex", flex:8,flexDirection:"column",justifyContent:"center"}}>
   <Icons>
    <Data style={{flex: 3,paddingLeft:"20px",flexWrap:"wrap"}} className={anime[1] + " " + anime[5]} ref={slideData}>
        <Category className={anime[1]}>{sliderData[slideIndex].description}</Category>
        <Heading className={anime[1]}>{sliderData[slideIndex].heading}</Heading>
        <Button href={sliderData[slideIndex].ProductUrl} className={anime[2]+" SlideButton"}>{sliderData[slideIndex].button} </Button>
    </Data>
    <Data style={{flex: 4, flexWrap:"wrap"}} className={anime[3] + " " +anime[5]} ref={SlideImg}>
        <Img src={sliderData[slideIndex].imgUrl}/>
    </Data>
    </Icons>
    <Icons style={{margin:"0px 0px 40px 0px"}}>
    <Box style={{cursor: "pointer",marginLeft:"7px"}} onClick={() =>{ ChangeSlide(0);}}/>
    <Box style={{cursor: "pointer",marginLeft:"7px"}} onClick={() =>{ ChangeSlide(1);}}/>
    <Box style={{cursor: "pointer",marginLeft:"7px"}} onClick={() =>{ ChangeSlide(2);}}/>
    <Box style={{cursor: "pointer",marginLeft:"7px"}} onClick={() =>{ ChangeSlide(3);}}/>      
    </Icons>
    </div>
    
    
    </Container>
};
const Link = styled.a`
    display: flex;
    color: black;
    justify-content: center;
    align-content: center;
    text-decoration: none; 

`
const Box = styled.div`
display: inline-flex;
height: 10px;
width: 10px;
background-color: black;
border-radius: 50%;
`

export default Slider;