import { default as React } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Filters from "../layout/Filters";
import Header from "../layout/Header";

const ListProducts = () => {
  
  return (
    <>
      <Header />
      <section className="py-12">
        <div className="container max-w-screen-l mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Filters />

            <main className="md:w-2/3 lg:w-3/4 px-3">
              <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 flex p-3">
                    <div
                      style={{
                        width: "80%",
                        height: "70%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={"/monster2.jpeg"}
                        alt="product anme"
                        height="240"
                        width="240"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/4">
                    <div className="p-4">
                      <Link to={'/product/details'} className="hover:text-blue-600">
                        Monster Abra A5 V15.8 Intel Core i7 10750H 8GB RAM 500GB SSD 4GB GTX1650Ti FreeDOS 15.6'' FHD 120Hz Laptop
                      </Link>
                      <div className="flex flex-wrap items-center space-x-2 mb-2">
                        <div className="ratings">
                          <div className="my-1">
                            <StarRatings
                              rating={5}
                              starRatedColor="#ffb829"
                              numberOfStars={5}
                              starDimension="18px"
                              starSpacing="1px"
                              name="rating"
                            />
                          </div>
                        </div>
                        <b className="text-gray-300">•</b>
                        <span className="ml-1 text-yellow-500">5</span>
                      </div>
                      <p className="text-gray-500 mb-2">
                      Monster Abra A5 V15.8 Intel Core i7 10750H 8GB 250GB SSD GTX1650Ti Freedos 15.6'' FHD Laptop
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                    <div className="p-5">
                      <span className="text-xl font-semibold text-black">
                        $1000
                      </span>

                      <p className="text-green-500">Free Shipping</p>
                      <div className="my-3">
                        <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                          {" "}
                          Add to Cart{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 flex p-3">
                    <div
                      style={{
                        width: "80%",
                        height: "70%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={"/monster2.jpeg"}
                        alt="product anme"
                        height="240"
                        width="240"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/4">
                    <div className="p-4">
                      <Link to={'/product/details'} className="hover:text-blue-600">
                        Monster Abra A5 V15.8 Intel Core i7 10750H 8GB RAM 500GB SSD 4GB GTX1650Ti FreeDOS 15.6'' FHD 120Hz Laptop
                      </Link>
                      <div className="flex flex-wrap items-center space-x-2 mb-2">
                        <div className="ratings">
                          <div className="my-1">
                            <StarRatings
                              rating={5}
                              starRatedColor="#ffb829"
                              numberOfStars={5}
                              starDimension="18px"
                              starSpacing="1px"
                              name="rating"
                            />
                          </div>
                        </div>
                        <b className="text-gray-300">•</b>
                        <span className="ml-1 text-yellow-500">5</span>
                      </div>
                      <p className="text-gray-500 mb-2">
                      Monster Abra A5 V15.8 Intel Core i7 10750H 8GB 250GB SSD GTX1650Ti Freedos 15.6'' FHD Laptop
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                    <div className="p-5">
                      <span className="text-xl font-semibold text-black">
                        $1000
                      </span>

                      <p className="text-green-500">Free Shipping</p>
                      <div className="my-3">
                        <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                          {" "}
                          Add to Cart{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 flex p-3">
                    <div
                      style={{
                        width: "80%",
                        height: "70%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={"/monster2.jpeg"}
                        alt="product anme"
                        height="240"
                        width="240"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/4">
                    <div className="p-4">
                      <Link to={'/product/details'} className="hover:text-blue-600">
                        Monster Abra A5 V15.8 Intel Core i7 10750H 8GB RAM 500GB SSD 4GB GTX1650Ti FreeDOS 15.6'' FHD 120Hz Laptop
                      </Link>
                      <div className="flex flex-wrap items-center space-x-2 mb-2">
                        <div className="ratings">
                          <div className="my-1">
                            <StarRatings
                              rating={5}
                              starRatedColor="#ffb829"
                              numberOfStars={5}
                              starDimension="18px"
                              starSpacing="1px"
                              name="rating"
                            />
                          </div>
                        </div>
                        <b className="text-gray-300">•</b>
                        <span className="ml-1 text-yellow-500">5</span>
                      </div>
                      <p className="text-gray-500 mb-2">
                      Monster Abra A5 V15.8 Intel Core i7 10750H 8GB 250GB SSD GTX1650Ti Freedos 15.6'' FHD Laptop
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                    <div className="p-5">
                      <span className="text-xl font-semibold text-black">
                        $1000
                      </span>

                      <p className="text-green-500">Free Shipping</p>
                      <div className="my-3">
                        <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                          {" "}
                          Add to Cart{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 flex p-3">
                    <div
                      style={{
                        width: "80%",
                        height: "70%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={"/monster2.jpeg"}
                        alt="product anme"
                        height="240"
                        width="240"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/4">
                    <div className="p-4">
                      <Link to={'/product/details'} className="hover:text-blue-600">
                        Monster Abra A5 V15.8 Intel Core i7 10750H 8GB RAM 500GB SSD 4GB GTX1650Ti FreeDOS 15.6'' FHD 120Hz Laptop
                      </Link>
                      <div className="flex flex-wrap items-center space-x-2 mb-2">
                        <div className="ratings">
                          <div className="my-1">
                            <StarRatings
                              rating={5}
                              starRatedColor="#ffb829"
                              numberOfStars={5}
                              starDimension="18px"
                              starSpacing="1px"
                              name="rating"
                            />
                          </div>
                        </div>
                        <b className="text-gray-300">•</b>
                        <span className="ml-1 text-yellow-500">5</span>
                      </div>
                      <p className="text-gray-500 mb-2">
                      Monster Abra A5 V15.8 Intel Core i7 10750H 8GB 250GB SSD GTX1650Ti Freedos 15.6'' FHD Laptop
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                    <div className="p-5">
                      <span className="text-xl font-semibold text-black">
                        $1000
                      </span>

                      <p className="text-green-500">Free Shipping</p>
                      <div className="my-3">
                        <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                          {" "}
                          Add to Cart{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 flex p-3">
                    <div
                      style={{
                        width: "80%",
                        height: "70%",
                        position: "relative",
                      }}
                    >
                      <img
                        src={"/monster2.jpeg"}
                        alt="product anme"
                        height="240"
                        width="240"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/4">
                    <div className="p-4">
                      <Link to={'/product/details'} className="hover:text-blue-600">
                        Monster Abra A5 V15.8 Intel Core i7 10750H 8GB RAM 500GB SSD 4GB GTX1650Ti FreeDOS 15.6'' FHD 120Hz Laptop
                      </Link>
                      <div className="flex flex-wrap items-center space-x-2 mb-2">
                        <div className="ratings">
                          <div className="my-1">
                            <StarRatings
                              rating={5}
                              starRatedColor="#ffb829"
                              numberOfStars={5}
                              starDimension="18px"
                              starSpacing="1px"
                              name="rating"
                            />
                          </div>
                        </div>
                        <b className="text-gray-300">•</b>
                        <span className="ml-1 text-yellow-500">5</span>
                      </div>
                      <p className="text-gray-500 mb-2">
                      Monster Abra A5 V15.8 Intel Core i7 10750H 8GB 250GB SSD GTX1650Ti Freedos 15.6'' FHD Laptop
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                    <div className="p-5">
                      <span className="text-xl font-semibold text-black">
                        $1000
                      </span>

                      <p className="text-green-500">Free Shipping</p>
                      <div className="my-3">
                        <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                          {" "}
                          Add to Cart{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListProducts;
