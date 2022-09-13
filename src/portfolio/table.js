import React, {useState} from "react";
import { Table, Button, Form, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const dataSource = JSON.parse(localStorage.getItem("users"));

const CabinetTable = () => {
  const [form] = Form.useForm();
  const [checkrow, setCheckrow] = useState(null);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        if (checkrow === record.id) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Enter name",
                },
              ]}
            >
                <Input />
            </Form.Item>
          );
        } else {
            return <p>{text}</p>
        }
      },
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text, record) => {
        if (checkrow === record.id) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Enter email",
                },
              ]}
            >
                <Input />
            </Form.Item>
          );
        } else {
            return <p>{text}</p>
        }
      },
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button onClick={() => {
                setCheckrow(record.id);
                form.setFieldsValue({
                    id: record.id,
                    name: record.name,
                    email: record.email
                })
            }} style={{ margin: "0 10px" }}>
              <EditOutlined /> Edit
            </Button>
            {
                <Button style={{ margin: "0 10px" }}>
                <DeleteOutlined /> Delete
              </Button>
            }
          </>
        );
      },
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default CabinetTable;
