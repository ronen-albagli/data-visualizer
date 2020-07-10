/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import BarChart from "../../components/Chart/BarChart/BarChart";
import "./HomeScreen.scss";
import Header from "../../components/Header/Header";
import DashboardTable from "../../components/Tables/DashboardTable";
import DataFieldMenu from "../../components/DataFieldMenu/DataFieldMenu";

const data = [
  { name: "dfdf", name2: "sdfsdf", name3: "sdfsdf", name4: "sdfsdf" },
  { name: "dfdf", name2: "sdfsdf", name3: "sdfsdf", name4: "sdfsdf" },
  { name: "dfdf", name2: "sdfsdf", name3: "sdfsdf", name4: "sdfsdf" },
  { name: "dfdf", name2: "sdfsdf", name3: "sdfsdf", name4: "sdfsdf" },
];

const HomeScreen = (props: any) => {
  const [isFieldsMenuOpen, setFieldsMenuOpen] = useState(true);
  return (
    <div className="home-screen-container">
      <DataFieldMenu
        dataObj={data[0]}
        isOpen={isFieldsMenuOpen}
        collapse={setFieldsMenuOpen}
      />
      <div
        style={{
          width: `calc(100% - ${isFieldsMenuOpen ? "100px" : "20px"})`,
          padding: "0px 15px",
        }}
      >
        <div className="top-section">
          <Header />
          <SearchSummary />
        </div>
        <div>
          <div className="middle-section">
            <SearchInput />
          </div>
          <Filters />
          <BarChart />
          <DashboardTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

const SearchSummary = () => <div className="doc-counter"> Doc Count: 1000</div>;

const SearchInput = () => (
  <div className="search-input">
    <input type="text" />
    <button>SEARCH</button>
  </div>
);

const Filters = () => {
  const [filters, setfilters] = useState([]);

  return (
    <div className="filter-section">
      <div className="filters-container">
        {filters.map((f: any) => (
          <div className="filter">{f.data}</div>
        ))}
      </div>
      <button>Add Query</button>
    </div>
  );
};
