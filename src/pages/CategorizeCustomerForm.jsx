import React, { useState } from 'react';
import { Table, message, Modal, Button } from 'antd';
import axios from 'axios';
import { CategorizeForm } from '../components/CategorizeForm';


const CategorizeCustomerForm = () => {
  const [evler, setEvler] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const filterEvler = (evValue, criteria, value) => {
    if (!value) return true;
    if (criteria === 'mutlakaOlsun') return evValue === value;
    if (criteria === 'mutlakaOlmasin') return evValue !== value;
    return true;
  };

  const filterEvlerAddress = (evAddress, criteria, value) => {
    if (!value) return true;
    if (criteria === 'mutlakaOlsun') return evAddress.toLowerCase().includes(value.toLowerCase());
    if (criteria === 'mutlakaOlmasin') return !evAddress.toLowerCase().includes(value.toLowerCase());
    return true;
  };

  const onFinish = (values) => {
    axios.get('http://localhost:5001/evler')
      .then(response => {
        let data = response.data;

        data = data.map(ev => ({
          ...ev,
          name: capitalizeFirstLetter(ev.name)
        }));

        let filteredEvler = data.filter(ev => {
          return filterEvler(ev.odaSayisi, values.odaSayisiKriter, values.odaSayisi) &&
                 filterEvlerAddress(ev.adres, values.adresKriter, values.adres) &&
                 filterEvler(ev.isitmaTipi, values.isitmaTipiKriter, values.isitmaTipi) &&
                 filterEvler(ev.price, values.fiyatKriter, values.fiyat) &&
                 filterEvler(ev.metrekare, values.metrekareKriter, values.metrekare) &&
                 filterEvler(ev.kat, values.katKriter, values.kat) &&
                 filterEvler(ev.banyoSayisi, values.banyoSayisiKriter, values.banyoSayisi) &&
                 filterEvler(ev.balkonSayisi, values.balkonSayisiKriter, values.balkonSayisi) &&
                 filterEvler(ev.yapimYili, values.yapimYiliKriter, values.yapimYili);
        });

        if (filteredEvler.length === 0 && Object.values(values).includes('mutlakaOlsun')) {
          message.error('Seçilen kriterlere uygun ev bulunamadı.');
        } else {
          setEvler(filteredEvler);
          setModalVisible(true); 
        }
      })
      .catch(error => {
        message.error('Bir hata oluştu');
      });
  };

  const columns = [
    { title: 'Adı', dataIndex: 'name', key: 'name' },
    { title: 'Fiyat', dataIndex: 'price', key: 'price', sorter: (a, b) => a.price - b.price },
    { title: 'Oda Sayısı', dataIndex: 'odaSayisi', key: 'odaSayisi', sorter: (a, b) => a.odaSayisi - b.odaSayisi },
    { title: 'Metrekare', dataIndex: 'metrekare', key: 'metrekare', sorter: (a, b) => a.metrekare - b.metrekare },
    { title: 'Adres', dataIndex: 'adres', key: 'adres' },
    { title: 'Kat', dataIndex: 'kat', key: 'kat', sorter: (a, b) => a.kat - b.kat },
    { title: 'Banyo Sayısı', dataIndex: 'banyoSayisi', key: 'banyoSayisi', sorter: (a, b) => a.banyoSayisi - b.banyoSayisi },
    { title: 'Balkon Sayısı', dataIndex: 'balkonSayisi', key: 'balkonSayisi', sorter: (a, b) => a.balkonSayisi - b.balkonSayisi },
    { title: 'Yapım Yılı', dataIndex: 'yapimYili', key: 'yapimYili', sorter: (a, b) => a.yapimYili - b.yapimYili },
    { title: 'Isıtma Tipi', dataIndex: 'isitmaTipi', key: 'isitmaTipi' }
  ];
  return (
    <div>
      <CategorizeForm onFinish={onFinish} />
      <Modal
        title="Filtered Evler"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setModalVisible(false)}>
            Close
          </Button>
        ]}
        width={'80%'}
        responsive
      >
        <Table dataSource={evler} columns={columns} rowKey="id" />
      </Modal>
    </div>

  );
};

export default CategorizeCustomerForm;
