// import React, { useEffect, useState } from "react";
// import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from "antd";
// import { EditOutlined, DeleteOutlined, CloseOutlined } from '@ant-design/icons'
// import axios from "axios";

// const EditableCell = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   record,
//   index,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
//   return (
//     <td {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{
//             margin: 0,
//           }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`,
//             },
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         children
//       )}
//     </td>
//   );
// };

// const EditableTable = () => {
//   const [form] = Form.useForm();
//   const [data, setData] = useState([]);
//   const [editingKey, setEditingKey] = useState("");

//   useEffect(() => {
//     const url = "https://jsonplaceholder.typicode.com/users";

//     axios.get(url).then((data) => {
//       setData(data.data);
//       console.log(data.data);
//     });
//   }, []);

//   const isEditing = (record) => record.key === editingKey;

//   const edit = (record) => {
//     form.setFieldsValue({
//       key: record.key,
//       name: "",
//       age: "",
//       address: "",
//       ...record,
//     });
//     setEditingKey(record.key);
//   };

//   const cancel = () => {
//     setEditingKey("");
//   };

//   const save = async (key) => {
//     try {
//       const row = await form.validateFields();
//       const newData = [...data];
//       const index = newData.findIndex((item) => key === item.key);

//       if (index > -1) {
//         const item = newData[index];
//         newData.splice(index, 1, { ...item, ...row });
//         setData(newData);
//         setEditingKey("");
//       } else {
//         newData.push(row);
//         setData(newData);
//         setEditingKey("");
//       }
//     } catch (errInfo) {
//       console.log("Validate Failed:", errInfo);
//     }
//   };

//   const columns = [
//     {
//       title: "#",
//       dataIndex: "id",
//       width: "3%",
//       editable: false,
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       width: "25%",
//       editable: true,
//     },
//     {
//       title: "Username",
//       dataIndex: "username",
//       width: "25%",
//       editable: true,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       width: "25%",
//       editable: true,
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       width: "25%",
//       editable: true,
//     },
//     {
//       title: "Operation",
//       dataIndex: "operation",
//       render: (_, record) => {
//         const editable = isEditing(record);
//         return editable ? (
//           <span className="d-flex">
//             <Typography.Link
//               onClick={() => save(record.key)}
//               style={{
//                 marginRight: 8,
//               }}
//             >
//               <Button>Save</Button>
//             </Typography.Link>
//             <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//               <Button>Cancel</Button>
//             </Popconfirm>
//           </span>
//         ) : (
//           <Typography.Link
//             disabled={editingKey !== ""}
//             onClick={() => edit(record)}
//           >
//             <Button><EditOutlined /></Button>
//           </Typography.Link>
//         );
//       },
//     },
//   ];
//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }

//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         inputType: col.dataIndex === "age" ? "number" : "text",
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record),
//       }),
//     };
//   });
//   return (
//     <div className="container">
//       <Form form={form} component={false}>
//         <Table
//           components={{
//             body: {
//               cell: EditableCell,
//             },
//           }}
//           bordered
//           dataSource={data}
//           columns={mergedColumns}
//           rowClassName="editable-row"
//           pagination={{
//             onChange: cancel,
//           }}
//         />
//       </Form>
//     </div>
//   );
// };

// export default EditableTable;

// // .editable-row .ant-form-item-explain {
// //   position: absolute;
// //   top: 100%;
// //   font-size: 12px;
// // }

import React, { useEffect, useState } from "react";
import { Table, Button, Form, Input } from "antd";
const Edittable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();
  const [checkrow, setCheckrow] = useState(null);
  const colums = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        if (checkrow === record.id) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Ismingizni kiriting...",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <h5>{text}</h5>;
        }
      },
    },
    {
      title: "E-mail",
      dataIndex: "email",
      render: (text, record) => {
        if (checkrow === record.id) {
          return (
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Emailingizni kiriting...",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <h5>{text}</h5>;
        }
      },
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button
              onClick={() => {
                setCheckrow(record.id);
                form.setFieldsValue({
                  id: record.id,
                  name: record.name,
                  email: record.email,
                });
              }}
            >
              {" "}
              Edit
            </Button>
            <Button htmlType="submit"> Save</Button>
          </>
        );
      },
    },
  ];
  useEffect(() => {
    const data = [];
    for (let index = 0; index < 5; index++) {
      data.push({
        id: `${index}`,
        name: `Name ${index}`,
        email: `example ${index + 100}@gmail.com`,
      });
    }
    setDataSource(data);
  }, []);
  const saveEdit = (values) => {
    const updateRow = [...dataSource];
    updateRow.splice(checkrow, 1, { ...values, id: checkrow });
    setDataSource(updateRow);
    setCheckrow(null);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Form form={form} onFinish={saveEdit}>
              <Table columns={colums} dataSource={dataSource} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edittable;
