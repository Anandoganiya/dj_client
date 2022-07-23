import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faXmarkCircle,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingBookingRequest,
  getAcceptedBookingRequest,
} from "../reducers/userSlice";
import Skeleton from "react-loading-skeleton";
const BookingRequest = () => {
  const [requestBtnStatus, setRequestBtnStatus] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { isLoading, bookingRquest } = useSelector(
    (state) => state.currentUser
  );
  const dispatch = useDispatch();
  library.add(faLocationDot, faCalendar, faXmarkCircle, faCircleCheck);

  useEffect(() => {
    if (requestBtnStatus) {
      dispatch(getAcceptedBookingRequest(user.data.token));
    } else {
      dispatch(getPendingBookingRequest(user.data.token));
    }
  }, [dispatch, user, requestBtnStatus]);

  return (
    <div className="mx-[41px] max-sm:mx-4 max-2md:mt-[5rem]">
      <div className="font-inter">
        <button
          onClick={() => setRequestBtnStatus(true)}
          className={`text-[20px] py-[16px] px-[21px] 
           rounded-xl tracking-widest max-sm:text-[1rem] 
           ${
             requestBtnStatus ? "bg-red-light text-white" : "text-black-darkest"
           } `}
        >
          Accepted
        </button>
        <button
          onClick={() => setRequestBtnStatus(false)}
          className={`text-[20px] py-[16px] px-[21px] ${
            !requestBtnStatus ? "bg-red-light text-white" : "text-black-darkest"
          } ml-[30px]  max-sm:ml-4 max-sm:text-[1rem]
            rounded-xl tracking-widest`}
        >
          Rejected
        </button>
      </div>
      <div className="mt-[56px]">
        {/*  block */}
        {isLoading ? (
          <Skeleton count={3} height={168} className="mb-16 rounded-3xl" />
        ) : (
          bookingRquest?.data?.booking.map((booking) => {
            return (
              <div
                key={booking._id}
                className="flex justify-between max-md:flex-col shadow-item-shadow rounded-2xl font-inter  mt-[58px]"
              >
                <div className="flex max-md:flex-col">
                  <div className="shadow-item-shadow rounded-2xl">
                    <figure className="">
                      <img
                        className="w-[157px] max-md:w-full max-md:h-[20rem] rounded-t-2xl h-[127px] object-cover"
                        src="./assets/images/mount.jpg"
                        alt="dj name"
                      />
                      <span className="font-[700] text-[22px] pl-[4px] pt-[12px]  max-md:block max-md:text-center">
                        Dj jeffz
                      </span>
                    </figure>
                  </div>
                  <div className="mt-[28px] ml-[29px] font-normal text-[20px] tracking-widest">
                    <div className="flex items-center">
                      <span className="">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      <div className="ml-[13px]">
                        <span>{booking.address}</span>
                        <p>{booking.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-[23px]">
                      <span>
                        <FontAwesomeIcon icon={faCalendar} />
                      </span>
                      <span className="ml-[13px]">{booking.date}</span>
                    </div>
                  </div>
                </div>
                <div className="borde flex flex-col items-center bg-gray-lighter max-md:mt-4">
                  <figure className="mt-[40px] mb-[15px]  ">
                    {booking.status === "Pending" ? (
                      <div className="p-1 border-red-light border">
                        {" "}
                        <img
                          src="./assets/icons/pending.png"
                          alt="pending state"
                        />
                      </div>
                    ) : booking.status === "Decline" ? (
                      <FontAwesomeIcon
                        icon={faXmarkCircle}
                        className="h-[70px] w-[70px] text-red-light"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="h-[70px] w-[70px] text-green"
                      />
                    )}
                  </figure>
                  <span
                    className={`pl-[12px] text-[30px] mb-[12px] 
                 ${
                   booking.status === "Accepted"
                     ? "text-green font-normal"
                     : "text-red-light font-bold"
                 } pr-[5px] font-roboto`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BookingRequest;
