import React, { useEffect, useState } from 'react'
import "assets/scss/main.scss";
import CovidApi from 'api/covidApi';
import moment from 'moment';
import TotalCaseWorld from 'components/TotalCaseWorld';

function App(props) {
  const [dataSummary, setDataSummary] = useState({});

  useEffect(async () => {
    
    const data = await CovidApi.getSummary();

    setDataSummary(data);
  }, []);

  // moment(dataSummary.Date).format("DD/MM/YYYY, h:mm:ss")
  console.log(dataSummary);

  return (
    <div className='home'>
        <h1 className="home__title">Thống kê số liệu Covid-19 trên toàn thế giới</h1>
        <TotalCaseWorld global={dataSummary.Global}></TotalCaseWorld>
        <p className='home__slogan'>Chung ta phòng chống dịch bệnh Covid-19</p>
    </div>
  )
}

export default App;

