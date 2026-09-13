function TechCart() {
  return (
    <div className="p-4 bg-gray-50 rounded-2xl shadow">
      <div className="mb-4">
        <h3 className="font-inter font-bold text-xl">Your Stack</h3>
        <p className="text-gray-500">No technologies selected yet.</p>
      </div>
      <div className="py-8 flex justify-center border border-gray-300 rounded-2xl border-dashed">
        <p className="text-gray-500">Your stack is empty.</p>
      </div>
    </div>
  );
}

export default TechCart;
