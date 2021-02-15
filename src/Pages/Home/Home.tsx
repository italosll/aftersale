import React, { useEffect, useState } from 'react';
import {Container, Street, Company, Banner, Column, Window, Row, Door,Outdoor,Support} from './Styles';
import axios from 'axios';


interface CustomProps {

  alight?: boolean;
  windows?: boolean[];
  teste?: boolean;
}

const Home: React.FC<CustomProps> = (props) => {

  const [allLights, setAllLights] = useState(false); // on-> true / off-> false

  const [night, setNight] = useState(Boolean)

  const [window0, setWindow0] = useState(false);
  const [window1, setWindow1] = useState(false);
  const [window2, setWindow2] = useState(false);
  const [window3, setWindow3] = useState(false);
  const [window4, setWindow4] = useState(false);
  const [window5, setWindow5] = useState(false);
  const [window6, setWindow6] = useState(false);
  const [window7, setWindow7] = useState(false);
  const [window8, setWindow8] = useState(false);
  const [window9, setWindow9] = useState(false);
  const [window10, setWindow10] = useState(false);
  const [window11, setWindow11] = useState(false);

  useEffect(()=>{


      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          
              axios.get(`https://api.sunrise-sunset.org/json?lat=${position.coords.latitude}&lng=${position.coords.longitude}`).then(response =>{
                
                let sunrise = response.data.results.sunrise;
                let sunset = response.data.results.sunset;
                compare_time(sunrise,sunset);

              })
        });
      } else {
        alert("Geolocation is not supported by this browser.")
      }

  },[]);

    function compare_time(sunrise:string, sunset:string){

      sunrise = am_pm_to_hours(sunrise);
      sunset = am_pm_to_hours(sunset);

      let sunrise_splited = sunrise.split(':').map(Number);
      let sunset_splited = sunset.split(':').map(Number);

      let current_date_time = new Date(); 

      let sunrise_date_time = new Date();
      sunrise_date_time.setHours(sunrise_splited[0]); 
      sunrise_date_time.setMinutes(sunrise_splited[1]); 
      sunrise_date_time.setSeconds(sunrise_splited[2]);

      let sunset_date_time = new Date(); 
      sunset_date_time.setHours(sunset_splited[0]); 
      sunset_date_time.setMinutes(sunset_splited[1]); 
      sunset_date_time.setSeconds(sunset_splited[2]);

      if(current_date_time > sunrise_date_time){

        if(current_date_time < sunset_date_time){
          setNight(false);
        }
        else {
          setNight(true);
        }

      }else setNight(true);

    }

  
    function am_pm_to_hours(time:any) {  // Function without seconds -> https://jsfiddle.net/cse_tushar/xEuUR/

      var hours = Number(time.match(/^(\d+)/)[1]);
      var minutes = Number(time.match(/:(\d+)/)[1]);
      var seconds = Number(time.match(/:(\d+)\s/)[1]); 
      var AMPM = time.match(/\s(.*)$/)[1];
      if (AMPM == "PM" && hours < 12) hours = hours + 12;
      if (AMPM == "AM" && hours == 12) hours = hours - 12;
      var sHours = hours.toString();
      var sMinutes = minutes.toString();
      var sSeconds = seconds.toString();

      if (hours < 10) sHours = "0" + sHours;
      if (minutes < 10) sMinutes = "0" + sMinutes;
      return (sHours +':'+sMinutes +':'+ sSeconds);
  }

  function turn_all_on_off(){

    let on_off = !allLights;
 
      setWindow0(on_off);
      setWindow1(on_off);  
      setWindow2(on_off);   
      setWindow3(on_off);   
      setWindow4(on_off);   
      setWindow5(on_off);
      setWindow6(on_off);
      setWindow7(on_off);
      setWindow8(on_off);
      setWindow9(on_off); 
      setWindow10(on_off);
      setWindow11(on_off);

      setAllLights(on_off);
  }

  function turn_on_off(window:number){

    switch(window){
      case 0: window0 == true ? setWindow0(false) : setWindow0(true);break;
      case 1: window1 == true ? setWindow1(false) : setWindow1(true);break;  
      case 2: window2 == true ? setWindow2(false) : setWindow2(true);break;   
      case 3: window3 == true ? setWindow3(false) : setWindow3(true);break;   
      case 4: window4 == true ? setWindow4(false) : setWindow4(true);break;   
      case 5: window5 == true ? setWindow5(false) : setWindow5(true);break;
      case 6: window6 == true ? setWindow6(false) : setWindow6(true);break;
      case 7: window7 == true ? setWindow7(false) : setWindow7(true);break;
      case 8: window8 == true ? setWindow8(false) : setWindow8(true);break;
      case 9: window9 == true ? setWindow9(false) : setWindow9(true);break;
      case 10: window10 == true ? setWindow10(false) : setWindow10(true);break;
      case 11: window11 == true ? setWindow11(false) : setWindow11(true);break;
    }
  }

  

  return (

    <>
    
      <Container nightfall={night}/>

        <Company>

          <Row>

            <Banner/>

          </Row>

          <Row>
            
            <Column>
              <Window onClick={()=>{turn_on_off(0)}} alight={window0}/>
              <Window onClick={()=>{turn_on_off(1)}} alight={window1}/>
              <Window onClick={()=>{turn_on_off(2)}} alight={window2}/>
              <Window onClick={()=>{turn_on_off(3)}} alight={window3}/>
              <Window onClick={()=>{turn_on_off(4)}} alight={window4}/>
              <Window onClick={()=>{turn_on_off(5)}} alight={window5}/>
            </Column>
          
            <Column>
              <Window onClick={()=>{turn_on_off(6)}} alight={window6}/>
              <Window onClick={()=>{turn_on_off(7)}} alight={window7}/>
              <Window onClick={()=>{turn_on_off(8)}} alight={window8}/>
              <Window onClick={()=>{turn_on_off(9)}} alight={window9}/>
              <Window onClick={()=>{turn_on_off(10)}} alight={window10}/>
              <Window onClick={()=>{turn_on_off(11)}} alight={window11}/>
            </Column>
            
          </Row>

          <Door/>

          <Support/>

          <Outdoor allLights={allLights} onClick={() => turn_all_on_off()}>
            {allLights == false? "Ascender todas as luzes" : "Apagar todas as luzes"}
          </Outdoor>

        </Company>

      <Street/>

    </>
    
  );
}

export default Home;
