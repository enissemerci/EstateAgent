import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import "../style/HomeFilter.css"

const HomeFilter = () => {
  const [evler, setEvler] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/evler")
      .then((response) => {
        setEvler(response.data);
      })
      .catch((error) => {
        console.error("Evler listelenirken bir hata oluştu:", error);
      });
  }, []);

  const columns = [
    { title: "Adı", dataIndex: "name", key: "name" },
    { title: "Fiyat", dataIndex: "price", key: "price", sorter: (a, b) => a.price - b.price },
    { title: "Oda Sayısı", dataIndex: "odaSayisi", key: "odaSayisi", sorter: (a, b) => a.odaSayisi - b.odaSayisi },
    { title: "Metrekare", dataIndex: "metrekare", key: "metrekare", sorter: (a, b) => a.metrekare - b.metrekare },
    { title: "Adres", dataIndex: "adres", key: "adres" },
    { title: "Kat", dataIndex: "kat", key: "kat", sorter: (a, b) => a.kat - b.kat },
    { title: "Banyo Sayısı", dataIndex: "banyoSayisi", key: "banyoSayisi", sorter: (a, b) => a.banyoSayisi - b.banyoSayisi },
    { title: "Balkon Sayısı", dataIndex: "balkonSayisi", key: "balkonSayisi", sorter: (a, b) => a.balkonSayisi - b.balkonSayisi },
    { title: "Yapım Yılı", dataIndex: "yapimYili", key: "yapimYili", sorter: (a, b) => a.yapimYili - b.yapimYili },
    { title: "Isıtma Tipi", dataIndex: "isitmaTipi", key: "isitmaTipi" },
  ];
  return (
    <div>
      <Table className="table" dataSource={evler} columns={columns} rowKey="id" />
    </div>
  );
};

export default HomeFilter;
