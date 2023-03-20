import React, { useEffect, useState } from "react";
import Navbar from "./NavbarQ";
import "./quest.css";
import QuestDataR from "./QuestDataR";
import imag1 from "../images/Firebond/div-1.png";
import imga2 from "../images/image3.png";
import QuestDataL from "./QuestDataL";
import { TaskCard } from "../utility/TaskCard";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import { AUTO, COLUMN, FILL_60PARENT, FILL_70PARENT, FILL_PARENT, ROW } from "../../constants/typography";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { GET_ONE_QUEST } from "../../apis/api";
import { useSelector } from "react-redux";

function Quest() {

  const [data,setData] = useState([])
  let params = useParams()
    let {id} = params 
    let [loading,setLoading] = useState(false)

    useEffect(()=>{
      const getData = async()=>{
        setLoading(true)
        let res = await axios({
          method:"get",
          url:GET_ONE_QUEST(id),
      
        })
        setData([res.data.data])
        setLoading(false)
      }

      getData()
      
    },[])


    console.log(data)
  return (
   data.length>0?<VStack  padding={{base:"16px"}} marginTop="100px" w={FILL_PARENT}>
      <Navbar />
      <Flex w={{base:FILL_PARENT,sm:FILL_PARENT,lg:FILL_70PARENT}} direction={{base:COLUMN,sm:COLUMN,md:COLUMN,lg:ROW}} bg={"transparent"} gap={"32px"} >
        <QuestDataR
                        imgsrc={data[0].cimage}
                        imgsrc2={data[0].cimage}
                        hname={data[0].cname}
                        name={data[0].cname}
                        link={"/Quest/"+data[0]._id}
                        pname={data[0].name}
                        xppoints={data[0].tokens}
                        task={data[0].task.split("|").length}
                        ttask="5"
                        likes="687"
                        para1={data[0].description}
                        para2="Follow Twitter, subscribe to the Newsletter and share with your
                        frens on Twitter to get Cryptocity NFT Wall 
                        proof and a chance to win from $100 raffle"
                    />

        <VStack className="down" w={FILL_PARENT} alignItems="flex-start">

       {data[0].task.split("|").map((el)=><TaskCard task={el.trim()} />)}

          
        </VStack>
      </Flex>
    </VStack>:""
  );
}

export default Quest;
