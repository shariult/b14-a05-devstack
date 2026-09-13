import { useEffect, useState } from "react";
import TechCard from "../Tech/TechCard";
import TechCart from "../Tech/TechCart";
import useHTTP from "../../hooks/useHTTP";
import type { TechData } from "../../types";
import { toast } from "react-toastify";

function Techs() {
  const { isLoading, error, sendRequest } = useHTTP();
  const [techData, setTechData] = useState<TechData[]>([]);
  function resHandler(data: TechData[]) {
    setTechData(data);
  }
  useEffect(
    function () {
      sendRequest({ url: "/data.json" }, resHandler);
    },
    [sendRequest],
  );

  const [cartItems, setCartItems] = useState<TechData[]>([]);
  function addCartHandler(data: TechData) {
    const doesExist = cartItems.some((item) => item.id === data.id);
    if (doesExist) {
      toast.warning("Already exists!", {
        position: "bottom-right",
      });
    } else {
      setCartItems([...cartItems, data]);
      toast.success(`${data.name} Added to Cart`, {
        position: "bottom-right",
      });
    }
  }
  function removeItemHandler(id: string) {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    toast.success(`${id.toUpperCase()} Removed from Cart!`, {
      position: "bottom-right",
    });
  }
  function removeAllHandler() {
    if (cartItems.length === 0) {
      toast.error("Stack is empty!", {
        position: "bottom-right",
      });
    } else {
      setCartItems([]);
      toast.success("Stack Cleared!", {
        position: "bottom-right",
      });
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto py-4">
        <div className="px-4 mb-4">
          <h2 className="font-inter text-3xl font-bold text-center md:text-left">
            Explore the{" "}
            <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="text-gray-500 text-center md:text-left">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="p-4 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6 md:col-span-2 xl:col-span-3">
            {isLoading && <p>Loading, Please wait!</p>}
            {error && (
              <p className="text-red-500 text-2xl">Something went wrong!</p>
            )}
            {!isLoading &&
              !error &&
              techData.length > 0 &&
              techData.map((techItem) => (
                <TechCard
                  key={techItem.id}
                  techItem={techItem}
                  isAdded={cartItems.some(
                    (cartItem) => cartItem.id === techItem.id,
                  )}
                  onAddToCart={addCartHandler}
                />
              ))}
          </div>

          {/* cart */}
          <div className="col-span-1">
            <TechCart
              techData={cartItems}
              onRemoveToCart={removeItemHandler}
              onRemoveAll={removeAllHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
