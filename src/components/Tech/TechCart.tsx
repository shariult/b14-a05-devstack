import TechCartItem from "./TechCartItem";

function TechCart() {
  return (
    <div className="p-4 bg-gray-50 rounded-2xl shadow">
      <div className="mb-4">
        <h3 className="font-inter font-bold text-xl">Your Stack</h3>
        <p className="text-gray-500">No technologies selected yet.</p>
      </div>

      {/* empty */}
      <div className="py-8 flex justify-center border border-gray-300 rounded-2xl border-dashed">
        <p className="text-gray-500">Your stack is empty.</p>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <TechCartItem />
        <TechCartItem />
        <TechCartItem />
      </div>

      <button className="w-full py-2 font-bold text-lg text-red-700 border border-red-700 rounded-md hover:bg-red-300 hover:text-red-900 cursor-pointer">
        Remove All
      </button>
    </div>
  );
}

export default TechCart;
