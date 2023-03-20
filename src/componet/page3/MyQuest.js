import React, { useEffect, useState } from 'react';
import "./myQuest.css"
import Card from './Card';
import img1 from "../images/Firebond/div-1.png"
import Navbar from './NavbarQ';
import QuestCard from '../utility/QuestCard/QuestCard';
import { useDispatch, useSelector } from 'react-redux';
import { allQuest, getQuest } from '../../redux/quest/quest.actions';
import { Grid } from '@chakra-ui/react';
import { AUTO, FILL_80PARENT, R1, R2, R3, R4 } from '../../constants/typography';
import { useSearchParams } from 'react-router-dom';


function MyQuest() {
    let {loading:qloading,error:qerror,data:qdata} = useSelector((state)=>state.questManager)
    let {data} = useSelector((state)=>state.authManager)
    // let {token,name,email} = data
    
    const [questDat,setQuestData] = useState([])
    let dispatch = useDispatch()
    useEffect(()=>{

        dispatch(allQuest())
        
    },[])


    useEffect(()=>{
        setQuestData(qdata)
    },[qdata])

    
    return (
        <div >
            <Navbar />

            <div className='apidiv'>
                <div className='topdiv'>

                </div>
                <div className='diveff'>
                    <h1>Live Quests</h1>
                    <Grid  gap={"16px"} width={FILL_80PARENT} margin={AUTO} mt={"16px"} gridTemplateColumns={{base:R1,sm:R1,md:R2,lg:R3}}>
                       {questDat?.map((el)=> <QuestCard {...el} />)}

                    </Grid>

                </div>

            </div>

        </div>
    )
}

export default MyQuest;
