export default function Block2() {
    return(
        <>
            <div className="pt-[780px] bg-gray-200">
                <div className="flex justify-between px-[120px]">
                    <div className="bg-white w-fit pl-[24px] pr-[100px] py-[12px] rounded-xl shadow-2xl">
                        <p className="font-bold text-[20px] text-blue-500">Всего обращений: <span className="text-black">128</span></p>
                    </div>
                    <div className="bg-white w-fit pl-[24px] pr-[188px] py-[12px] rounded-xl shadow-2xl">
                        <p className="font-bold text-[20px] text-blue-500">В работе: <span className="text-black">128</span></p>
                    </div>
                    <div className="bg-white w-fit pl-[24px] pr-[100px] py-[12px] rounded-xl shadow-2xl">
                        <p className="font-bold text-[20px] text-blue-500">Выполнено: <span className="text-black">128</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}
