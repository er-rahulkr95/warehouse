import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchWareHouseDetail, updateWareHouseDetails } from '../../features/warehouseListing/wareHouseSlice'
import WareHouseDetailReadOnly from '../../components/WareHouseDetail/WareHouseDetailReadOnly/WareHouseDetailReadOnly'
import WareHouseDetailEdit from '../../components/WareHouseDetail/WareHouseDetailEdit/WareHouseDetailEdit'
import styles from "./WareHouseDetails.module.css"

const WareHouseDetail = () => {
    const {wareHouseDetail, wareHouseList} = useSelector((state)=>state.app)
    const [edit, setEdit] = useState(false)
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch();
    const getWareHouseDetails = wareHouseList.length && [...wareHouseList].find((warehouse)=> warehouse.id === parseInt(id))
    
    useEffect(()=>{
        dispatch(fetchWareHouseDetail(getWareHouseDetails))
    },[getWareHouseDetails])
  

    const handleEdit = () =>{
        setFormData({...wareHouseDetail})
        setEdit(true)
    }


    const handleCancel = () =>{
        setEdit(!edit)
    }

    const handleBack = () =>{
        navigate("/")
    }

    
    const handleUpdate = ()=>{
        dispatch(updateWareHouseDetails({wareHouseList,formData}));
        setEdit(!edit)
    }


  return (
    <div className={styles.wrapper}>
    <h1 className={styles.heading}>Ware House Details</h1>
    <section className={styles.wareHouseDetailContainer}>
    <div className={styles.border}>
    {!edit ?  <WareHouseDetailReadOnly/> :  <WareHouseDetailEdit formData={formData} setFormData = {setFormData}/> }
    <div className={styles.buttonWrapper}>
    <button onClick={edit ? handleUpdate :  handleEdit} className={styles.button1}>{edit ? "Update" :" Edit"}</button>
    <button onClick ={edit ? handleCancel : handleBack} className={styles.button2}> {edit ? "Cancel" : "Back" }</button>
    </div>
    </div>
    </section>
    </div>
    
  )
}

export default WareHouseDetail