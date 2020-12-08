import React, { Component } from 'react';
import RoomsFilter from './RoomFilter';
import Roomslist from './RoomList';
import {withRoomConsumer} from '../Context';
import Loading from './Loading'
const RoomContainer = ({context}) => {
                const {loading,sortedRooms,rooms}=context;
                if(loading){
                    return <Loading/>
                }
                return(
                    <>
                    <RoomsFilter rooms={rooms}/>

                    <Roomslist rooms={sortedRooms}/>
                    </>
                )
            }
        
   
 
export default withRoomConsumer(RoomContainer);