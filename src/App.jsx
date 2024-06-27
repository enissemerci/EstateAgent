import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import Login from './pages/Login';
import HomeForm from './pages/HomeForm';
import HomeFilter from './pages/HomeFilter';
import CategorizeCustomerForm from './pages/CategorizeCustomerForm';
import SendMail from './pages/SendMail';
import "./style/App.css"
const { Header, Content } = Layout;


const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [filteredEvler, setFilteredEvler] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoggedIn(true);
    }
  }, []);

  const menuItems = loggedIn
    ? [
        { key: '1', label: <Link to="/ev-ekle">Ev Ekle</Link> },
        { key: '2', label: <Link to="/evler">Evler</Link> },
        { key: '3', label: <Link to="/musteri-istek">Müşteri İstekleri</Link> },
        { key: '4', label: <Link to="/mail-gonder">Mail Gönder</Link> },
        {
          key: '5',
          label: (
            <Button type="link" onClick={handleLogout} style={{ color: 'white' }}>
              <Link to="/">Çıkış Yap</Link> 
            </Button>
          ),
          style: { marginLeft: 'auto' }
        },
      ]
    : [{ key: '5', label: <Link to="/">Giriş Yap</Link> }];

  return (
    <Router>
      <Layout>
        <div className='app'>
        <Header style={{backgroundColor:"#005C78"}}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} style={{backgroundColor:"#005C78"}}  className="custom-menu"
  />
        </Header>
        <Content style={{display: 'flex', justifyContent: 'center', padding: '50px', backgroundColor:"#006989",height:"100vh"}}>
          <Routes>
            <Route exact path="/" element={<Login setLoggedIn={setLoggedIn} />} />
            {loggedIn && (
              <>
                <Route path="/ev-ekle" element={<HomeForm />} />
                <Route path="/evler" element={<HomeFilter />} />
                <Route path="/musteri-istek" element={<CategorizeCustomerForm setFilteredEvler={setFilteredEvler} />} />
                <Route path="/mail-gonder" element={<SendMail evler={filteredEvler} />} />
              </>
            )}
          </Routes>
        </Content>
        </div>
      </Layout>
    </Router>
  );
};

export default App;
