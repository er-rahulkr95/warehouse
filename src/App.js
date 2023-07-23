import {Routes, Route } from 'react-router-dom';
import WareHouseHome from './pages/wareHouseListHome/WareHouseHome';
import WareHouseDetail from './pages/wareHouseDetails/WareHouseDetail';
import NotFoundPage from './pages/notFound/NotFoundPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadWareHouseList } from './features/warehouseListing/wareHouseSlice';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadWareHouseList());
  }, []);


  return (
    <>
      <Routes>
              <Route path='/' element={<WareHouseHome />} />
              <Route path='/wareHouse/details/:id' element={<WareHouseDetail/>} />
              <Route path='*' element={<NotFoundPage/>} />    
            </Routes>
    </>
  );
}

export default App;
