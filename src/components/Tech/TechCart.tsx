import type { TechData } from "../../types";
import TechCartItem from "./TechCartItem";

type TechCartProps = {
  techData: TechData[];
  onRemoveToCart: (id: string) => void;
  onRemoveAll: () => void;
};

function TechCart(props: TechCartProps) {
  return (
    <div className="p-4 bg-gray-50 rounded-2xl shadow">
      <div className="mb-4">
        <h3 className="font-inter font-bold text-xl">Your Stack</h3>
        {props.techData.length === 0 && (
          <p className="text-gray-500">No technologies selected yet.</p>
        )}
        {props.techData.length > 0 && (
          <p className="text-gray-500">
            {props.techData.length} technologies selected.
          </p>
        )}
      </div>

      {/* empty */}
      {props.techData.length === 0 && (
        <div className="py-8 flex justify-center border border-gray-300 rounded-2xl border-dashed mb-6">
          <p className="text-gray-500">Your stack is empty.</p>
        </div>
      )}

      {props.techData.length > 0 && (
        <div className="flex flex-col gap-4 mb-6">
          {props.techData.map((item) => (
            <TechCartItem
              key={item.id}
              techItem={item}
              onRemoveToCart={props.onRemoveToCart}
            />
          ))}
        </div>
      )}

      <button
        className="w-full py-2 font-bold text-lg text-red-700 border border-red-700 rounded-md hover:bg-red-300 hover:text-red-900 cursor-pointer"
        onClick={() => props.onRemoveAll()}
      >
        Remove All
      </button>
    </div>
  );
}

export default TechCart;
