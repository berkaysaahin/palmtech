import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";

const Orders = () => {
  return (
    <section className="py-10">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Sidebar />
          <main className="md:w-2/3 lg:w-3/4 px-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <h1 className="text-3xl my-5 ml-4 font-bold">12 Orders</h1>
              <table className="w-full text-sm text-left">
                <thead className="text-l text-gray-700 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount Paid
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-2">12345667</td>
                    <td className="px-6 py-2">$232</td>
                    <td className="px-6 py-2">Processing</td>
                    <td className="px-6 py-2">
                      <div>
                        <Link
                          to={`/admin/orders/12345667`}
                          className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                        >
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                        <a className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Orders;
