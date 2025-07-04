const CartDataStats = ({ title, total, rate, levelCheck, children }) => (
    <div className="rounded-lg border p-4 shadow">
      <div className="flex items-center gap-4">
        {children}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xl font-bold">{total}</p>
          <p className={`text-sm ${levelCheck ? "text-green-600" : "text-red-600"}`}>
            {rate}
          </p>
        </div>
      </div>
    </div>
  );
  
  export default CartDataStats;
  