import {
  Card,
  Button,
  Table,
  Divider,
  Menu,
  Form,
  Modal,
  Input,
  Switch,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EllipsisDropdown from "../components/EllipsisDropdown";
import { URL } from "../utils/appConstant";

const careerColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "20%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "30%",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: "10%",
  },
  {
    title: "Career",
    dataIndex: "career_name",
    key: "career",
    width: "10%",
  },
];

const getConfig = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};

const fetchData = (url) => {
  return axios.get(url, getConfig());
};

const postData = (url, body) => {
  return axios.post(url, body, getConfig());
};

const JobDashboard = () => {
  const [careerData, setCareerData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [jobLoading, setJobLoading] = useState(false);
  const [careerLoading, setCareerLoading] = useState(false);
  const [submitLoading, setSubtmiLoading] = useState(false);
  const [form] = Form.useForm();

  const _careerColumns = [
    ...careerColumns,
    {
      title: "Action",
      dataIndex: "action",
      align: "end",
      key: "action2",
      render: (value, record) => (
        <span>
          <EllipsisDropdown
            menu={
              <Menu>
                <Menu.Item>
                  <a
                    href={record.cv}
                    rel="noopener noreferrer"
                    target="_blank"
                    download
                  >
                    Download
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <span> Delete </span>
                </Menu.Item>
              </Menu>
            }
          />
        </span>
      ),
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "category_name",
      key: "name0123012301230201",
      width: "50%",
    },
    {
      title: "Visibility",
      dataIndex: "is_visible",
      key: "visibilitydwqhuduhqwuiqwdhduwiduhqw",
      width: "40%",
      align: "center",
      render: (value, record) => (value ? <p>Yes</p> : <p>No</p>),
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "end",
      key: "action1",
      render: (value, record) => (
        <span>
          <EllipsisDropdown
            menu={
              <Menu>
                <Menu.Item
                  onClick={handleVisibilityToggle.bind(this, record.id)}
                  key={"career-menu-item"}
                >
                  <span> Make {record.is_visible ? "Deactive" : "Active"}</span>
                </Menu.Item>
                <Menu.Item>
                  <span> Edit </span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                  <span> Delete </span>
                </Menu.Item>
              </Menu>
            }
          />
        </span>
      ),
    },
  ];

  useEffect(() => {
    handleFetchCareerData();
    handleFetchJobData();
  }, []);

  const handleVisibilityToggle = (categoryId) => {
    postData(`${URL}/api/careers/category/${categoryId}/`, {})
      .then((res) => {
        const _careerData = careerData.filter((item) => item.id !== categoryId);
        setCareerData([..._careerData, res.data]);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleFetchJobData = () => {
    setJobLoading(true);
    fetchData(`${URL}/api/careers/`)
      .then((res) => {
        setJobData(res.data);
        setJobLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleFetchCareerData = () => {
    setCareerLoading(true);
    fetchData(`${URL}/api/careers/category/`)
      .then((res) => {
        setCareerData(res.data);
        setCareerLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleFormFinish = (values) => {
    setSubtmiLoading(true);
    postData(`${URL}/api/careers/category/`, values)
      .then((res) => {
        handleFetchCareerData();
        toggleModal(false);
        setSubtmiLoading(false);
      })
      .error((err) => {
        setSubtmiLoading(false);
        console.log(err.response.data);
      });
  };

  const toggleModal = (value, type = null) => {
    if (!value) form.resetFields();
    if (type !== null) setModalType(type);
    setVisibility(value);
  };

  return (
    <>
      <Card
        title="Career"
        extra={
          <Button type="primary" onClick={toggleModal.bind(this, true, "add")}>
            New Job
          </Button>
        }
        style={{ margin: "1vh" }}
      >
        <Table
          pagination={false}
          rowKey={(item) => item.id + "job-table-row-key-id"}
          key="job-table-key"
          loading={careerLoading}
          dataSource={careerData}
          columns={columns}
        />
      </Card>
      <Divider />
      <Card title="Job" style={{ margin: "1vh" }}>
        <Table
          rowKey={(item) => item.id + "career-table-row-key-id"}
          pagination={false}
          loading={jobLoading}
          dataSource={jobData}
          columns={_careerColumns}
        />
      </Card>
      <Modal
        title="New Job"
        visible={visibility}
        onCancel={toggleModal.bind(this, false, "upd")}
        footer={null}
      >
        <Form onFinish={handleFormFinish} form={form}>
          <Form.Item
            label="Name"
            name="category_name"
            rules={[
              { required: true, message: "Please enter name of the job!" },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Is Visible" name="is_visible" initialValue={true}>
            <Switch defaultChecked />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
            <Button>Cancel</Button>
            <Form.Item style={{ margin: 0 }}>
              <Button loading={submitLoading} htmlType="submit" type="primary">
                {modalType === "add" ? "Submit" : "Save"}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default JobDashboard;
