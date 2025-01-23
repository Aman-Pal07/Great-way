import { AlertCircle, CheckCircle, Clock, Package, Truck } from "lucide-react";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const Track = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState("");

  // Mock order data - replace with actual API call
  const mockOrderDetails = {
    orderNumber: "ORD123456789",
    status: "in_transit",
    estimatedDelivery: "January 25, 2025",
    items: [
      {
        id: 1,
        name: "Classic Blue Denim Jacket",
        size: "L",
        color: "Blue",
        quantity: 1,
        price: 89.99,
        image: "/api/placeholder/80/80",
      },
      {
        id: 2,
        name: "Cotton V-Neck T-Shirt",
        size: "M",
        color: "White",
        quantity: 2,
        price: 24.99,
        image: "/api/placeholder/80/80",
      },
    ],
    trackingSteps: [
      { id: 1, status: "Order Placed", date: "Jan 20, 2025", completed: true },
      {
        id: 2,
        status: "Order Confirmed",
        date: "Jan 21, 2025",
        completed: true,
      },
      { id: 3, status: "Processing", date: "Jan 22, 2025", completed: true },
      { id: 4, status: "In Transit", date: "Jan 23, 2025", completed: true },
      { id: 5, status: "Out for Delivery", date: "Pending", completed: false },
      { id: 6, status: "Delivered", date: "Pending", completed: false },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Fashion Street",
      city: "Styleville",
      state: "ST",
      zipCode: "12345",
    },
  };

  const handleTrackOrder = (e) => {
    e.preventDefault();
    if (!orderNumber.trim()) {
      setError("Please enter an order number");
      return;
    }

    // Simulate API call
    setOrderDetails(mockOrderDetails);
    setError("");
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Order Placed":
        return <Package className="w-6 h-6" />;
      case "In Transit":
        return <Truck className="w-6 h-6" />;
      case "Delivered":
        return <CheckCircle className="w-6 h-6" />;
      default:
        return <Clock className="w-6 h-6" />;
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Track Your Order
            </h1>
            <p className="mt-2 text-gray-600">
              Enter your order number to track your package
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <form onSubmit={handleTrackOrder} className="flex gap-4">
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter your order number"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Track Order
              </button>
            </form>
            {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
          </div>

          {orderDetails && (
            <div className="space-y-8">
              {/* Order Summary */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Order #{orderDetails.orderNumber}
                    </h2>
                    <p className="text-gray-600">
                      Estimated Delivery: {orderDetails.estimatedDelivery}
                    </p>
                  </div>
                  {orderDetails.status === "in_transit" && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      In Transit
                    </span>
                  )}
                </div>

                {/* Tracking Progress */}
                <div className="mb-8">
                  <div className="relative">
                    {orderDetails.trackingSteps.map((step, index) => (
                      <div
                        key={step.id}
                        className="flex items-center mb-8 last:mb-0"
                      >
                        <div
                          className={`flex items-center justify-center w-8 h-8 rounded-full ${
                            step.completed ? "bg-green-500" : "bg-gray-200"
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <Clock className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className="text-lg font-medium text-gray-900">
                            {step.status}
                          </h3>
                          <p className="text-gray-500">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Order Items
                  </h3>
                  <div className="space-y-4">
                    {orderDetails.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 border-b pb-4 last:border-0"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-gray-900 font-medium">
                            {item.name}
                          </h4>
                          <p className="text-gray-600">
                            Size: {item.size} | Color: {item.color}
                          </p>
                          <p className="text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="text-gray-900 font-medium">
                          ${item.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Shipping Address
                </h3>
                <div className="text-gray-600">
                  <p>{orderDetails.shippingAddress.name}</p>
                  <p>{orderDetails.shippingAddress.address}</p>
                  <p>
                    {orderDetails.shippingAddress.city},{" "}
                    {orderDetails.shippingAddress.state}{" "}
                    {orderDetails.shippingAddress.zipCode}
                  </p>
                </div>
              </div>

              {/* Need Help Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Need Help?
                    </h3>
                    <p className="text-gray-600">
                      If you have any questions about your order, please contact
                      our customer service.
                    </p>
                    <button className="mt-2 text-indigo-600 hover:text-indigo-500">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Track;
