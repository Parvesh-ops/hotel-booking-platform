import { Metadata } from "next";
import BookingPage from "./bookingClient";


export const metadata: Metadata = {
    title: "Booking | The Royal Hotel",
    description: "Book your stay at The Royal Hotel and experience luxury and comfort in the heart of Nepal.",
    icons: {
        icon: '/HotelLogo.png',
    },
};

const Booking = () => {
    return <BookingPage />;
};

export default Booking;
