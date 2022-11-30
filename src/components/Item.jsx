import React from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { Box, IconButton, Typography ,useTheme,Button } from "@mui/material";
import AddIcon from '@mui/material/Add';
import RemoveIcon from '@mui/material/Remove';
import { shades } from "../../theme";
import {addToCart} from '../state'
import {useNavigate} from 'react-router-dom'

function Item({item,width}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1)
    const [isHover,setIsHover] = useState(false)

    const {
        palette:{neutral},
    }=useTheme();

    const {category , price , name, image } = item.attributes;
    const {
        data:{
            attributes: {

            }
        }
    } = image

  return (
    <>

    </>
  )
}

export default Item