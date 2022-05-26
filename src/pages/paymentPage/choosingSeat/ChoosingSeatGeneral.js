import TickeChoosing from "./TicketChoosing";
import TotalMoney from "./TotalMoney";

const ChoosingSeatGeneral = ({ isOpenTab, handleToggleOpenTab }) => {
  return (
    <div
      className={`${
        isOpenTab ? "w-[500px] " : "w-[130px] absolute right-0 top-0"
      } min-h-[130px] bg-white rounded-lg overflow-hidden transition-all duration-75`}
    >
      <div
        className="w-full h-6 bg-gray-200 bg-opacity-80 text-center py-6 flex items-center gap-2 justify-center cursor-pointer"
        onClick={handleToggleOpenTab}
      >
        <i
          class={`fa-solid fa-angle-left transition-all duration-100 ${
            isOpenTab ? "rotate-180" : ""
          }`}
        ></i>
        {isOpenTab ? (
          " Chi tiết vé"
        ) : (
          <div>
            <span className="opacity-60 text-sm">Đã chọn :</span>{" "}
            <span className="ml-1">1/2</span>
          </div>
        )}
      </div>

      {isOpenTab && <TickeChoosing />}
      {!isOpenTab && <TotalMoney />}
    </div>
  );
};

export default ChoosingSeatGeneral;
