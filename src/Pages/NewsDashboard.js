import React, { useState } from "react";

import { Card, Table, Select, Input, Button, Menu } from "antd";

import { BrowserRouter as Link } from "react-router-dom";

import {
  EyeOutlined,
  DeleteOutlined,
  SearchOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import utils from "../utils";
import axios from "axios";
import Flex from "../components/Flex";
import { URL } from "../utils/appConstant";
import { useHistory } from "react-router-dom";
import AvatarStatus from "../components/AvatarStatus";
import EllipsisDropdown from "../components/EllipsisDropdown";

const { Option } = Select;

const ProductList = () => {
  let history = useHistory();
  const [list, setList] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState("");

  const getBlogFromAPI = React.useCallback(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log(`button Pressed`);

    axios
      .get(`${URL}/api/blogs/`, config)
      .then(function (response) {
        console.log(`response`, response.data);
        setBlogs(response.data);
        setList(response.data);
        localStorage.setItem("blogs", response.data);
      })
      .catch(function (error) {
        console.log(`error`, error.response);
      });
  }, []);

  React.useEffect(() => {
    getBlogFromAPI();
  }, [getBlogFromAPI]);

  const signOut = () => {
    localStorage.removeItem("token");
    history.push("/Admin");
  };

  const jumpHome = () => {
    history.push("/Landing");
  };

  const dropdownMenu = (row) => (
    <Menu>
      <Link to={`/NewsEdit/${row.id}`}>
        <Menu.Item>
          <Flex alignItems="center">
            <EyeOutlined />
            <span className="ml-2">Edit news</span>
          </Flex>
        </Menu.Item>
      </Link>
      <Menu.Item onClick={() => deleteRow(row)}>
        <Flex alignItems="center">
          <DeleteOutlined />
          <span className="ml-2">
            {selectedRows.length > 0
              ? `Delete (${selectedRows.length})`
              : "Delete"}
          </span>
        </Flex>
      </Menu.Item>
    </Menu>
  );

  const addProduct = () => {
    history.push("/NewsPublish/");
  };

  const deleteRow = (row) => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .delete(`${URL}/api/blogs/${row.id}/delete/`, config)
      .then(function (response) {
        console.log(`response`, response.data);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(`error`, error.response);
      });
  };

  const tableColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "News list",
      dataIndex: "title",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            size={60}
            type="square"
            src={record.cover_image}
            name={record.title}
          />
        </div>
      ),
      sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => utils.antdTableSorter(a, b, "category"),
    },

    {
      title: "Date",
      dataIndex: "createdAt",
      sorter: (a, b) => utils.antdTableSorter(a, b, "createdAt"),
    },

    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div className="text-right">
          <EllipsisDropdown menu={dropdownMenu(elm)} />
        </div>
      ),
    },
  ];

  const rowSelection = {
    onChange: (key, rows) => {
      setSelectedRows(rows);
      setSelectedRowKeys(key);
    },
  };

  const onSearch = (e) => {
    const value = e.currentTarget.value;
    const searchArray = e.currentTarget.value ? list : blogs;
    const data = utils.wildCardSearch(searchArray, value);
    setList(data);
    setSelectedRowKeys([]);
  };

  const handleShowCategory = (value) => {
    // const config = {
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // };
    // console.log(`button Pressed`);
    // axios
    //   .get(`${URL}/api/blogs/?category=${value}/`, config)
    //   .then(function (response) {
    //     console.log(`response`, response.data);
    //     setBlogs(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(`error`, error.response);
    //   });
    if (value !== "All") {
      const key = "category";
      const data = utils.filterArray(blogs, key, value);
      setList(data);
    } else {
      setList(blogs);
    }
  };

  return (
    <Card>
      <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
        <Flex className="mb-1" mobileFlex={false}>
          <div className="mr-md-3 mb-3">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={(e) => onSearch(e)}
            />
          </div>
          <div className="mb-3">
            <Select
              defaultValue="All"
              className="w-100"
              style={{ minWidth: 180 }}
              onChange={handleShowCategory}
              placeholder="Category"
            >
              <Option value="All">All</Option>
              {blogs.map((elm) => (
                <Option key={elm.category} value={elm.category}>
                  {elm.category}
                </Option>
              ))}
            </Select>
          </div>
        </Flex>
        <div>
          <Button
            onClick={addProduct}
            type="primary"
            icon={<PlusCircleOutlined />}
            block
          >
            Add news
          </Button>
        </div>
      </Flex>
      <div className="table-responsive">
        <Table
          columns={tableColumns}
          dataSource={list}
          rowKey="id"
          rowSelection={{
            selectedRowKeys: selectedRowKeys,
            type: "checkbox",
            preserveSelectedRowKeys: false,
            ...rowSelection,
          }}
        />
      </div>
      <button className="btn_four" onClick={jumpHome}>
        Home
      </button>
      <button className="btn_four" onClick={signOut}>
        Sign out
      </button>
    </Card>
  );
};

export default ProductList;
