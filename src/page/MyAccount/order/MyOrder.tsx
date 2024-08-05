import { useSelector } from "react-redux";
import style from "./style.module.scss";
import { Table } from "flowbite-react";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import orderApi from "@/services/orderApi";
import { TypeOrderSucess } from "@/models/model";
const MyOrder = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [orders, setOrders] = useState<TypeOrderSucess[] | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await orderApi.getOrderById(user!.id);
        setOrders(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrder();
  }, [user]);

  return (
    <div className={style.myOrder}>
      <h1>Orders Detail</h1>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Order_id</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
              {orders &&
                orders.map((e) => (
                  <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {e._id}
                    </Table.Cell>
                    <Table.Cell>{e.invoice_date}</Table.Cell>
                    <Table.Cell>{e.status}</Table.Cell>
                    <Table.Cell>{e.total}</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        view
                      </a>
                    </Table.Cell>
            </Table.Row>
                  </>
                ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default MyOrder;
