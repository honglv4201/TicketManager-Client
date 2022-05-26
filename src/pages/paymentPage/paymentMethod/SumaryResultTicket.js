import { Link } from "react-router-dom";

const SumaryResultTicket = () => {
  return (
    <div className="flex-1 min-w-[300px] min-h-[400px] rounded-lg dark:!opacity-90 dark:!text-white  bg-white dark:!bg-dark_primary_pnl flex-col ">
      <div className="flex justify-center mt-4 text-center">
        <div className="flex items-center gap-1 w-fit ">
          <div className="flex flex-col gap-1 text-sm">
            <span className="time-start">12:00 AM</span>
            <span className="font-bold opacity-90">Ga Da Nang</span>
          </div>
          <div className="flex flex-col gap-1 items-center text-sm">
            <div className="w-[100px] border-dotted border-b-2"></div>
            <span>13 gio</span>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <span className="time-start">04:30 PM</span>
            <span className="font-bold opacity-90">Ga Sai Gon</span>
          </div>
        </div>
      </div>

      <div className="flex mt-4 justify-center dark:!text-white ">
        <div className="px-4 transport-image max-w-[280px] max-h-[280px] overflow-hidden ">
          <img
            className="w-full h-full rounded-lg dark:opacity-75"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Tile_Hill_train_727.jpg/640px-Tile_Hill_train_727.jpg"
            alt="tau_image"
          />
        </div>
      </div>

      <div className="flex gap-1 mt-2 items-center ml-10 dark:!text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#FFCC00"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>

        <span className="opacity-80 text-sm">4.8</span>
        <span className="opacity-50 text-sm">(23 rates)</span>
      </div>

      <div className="flex flex-col ml-10 mt-2 dark:!text-white ">
        <div className="flex gap-4">
          <div className="block border-r-2 border-r-gray-200  mt-2 pr-4">
            <div className="text-sm opacity-50">Ngay Di</div>
            <div className="text-sm opacity-90">30/4/2022</div>
          </div>
          <div className="block">
            <div className="text-sm opacity-50 mt-2">So luong</div>
            <div className="text-sm  opacity-90">2 nguoi</div>
          </div>
        </div>
      </div>

      <div className="text-lg font-bold opacity-80 mt-4 px-10">Summary</div>
      <div className="mt-2 flex flex-col gap-3 px-7 text-sm dark:!text-white ">
        <div className="item flex justify-between px-3">
          <div className="opacity-60">3x passenger</div>
          <div className="font-bold">480.000 vnd</div>
        </div>
        <div className="item flex justify-between px-3">
          <div className="opacity-60">Tax and fee</div>
          <div className="font-bold">1.240.000 vnd</div>
        </div>
        <div className="item flex justify-between px-3">
          <div className="opacity-60">Services</div>
          <div className="font-bold">100.000 vnd</div>
        </div>
        <div className="item flex justify-between bg-gray-100 dark:!bg-opacity-10 dark:!text-white rounded-lg py-2 px-3 ">
          <div className="opacity-60">Total</div>
          <div className="font-bold">1.590.000 vnd</div>
        </div>

        <Link
          to="/"
          className="px-4 py-[12px] rounded-lg bg-primary text-white text-center mt-3 mb-10"
        >
          Pay
        </Link>
      </div>
    </div>
  );
};
export default SumaryResultTicket;
